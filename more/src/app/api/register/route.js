import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { User } from "@/app/models/table_users";
import crypto from "crypto";
import { sendEmail } from "../email";
import { NextResponse } from "next/server";

function generateNumericToken(length) {
  let token = "";
  for (let i = 0; i < length; i++) {
    token += Math.floor(Math.random() * 10).toString();
  }
  return token;
}

export async function POST(req) {
  const body = await req.json();
  mongoose.connect(process.env.NEXT_PUBLIC_MONGOURL);

  // Check if user already exists
  const existingUser = await User.findOne({ email: body.email });
  if (existingUser) {
    return new NextResponse("Email is already in use", { status: 400 });
  }

  // Hash the password
  const notHashedPassword = body.password;
  const salt = bcrypt.genSaltSync(10);
  body.password = bcrypt.hashSync(notHashedPassword, salt);

  // Generate verification token
  const verifyCode = generateNumericToken(6);
  const verifyToken = crypto
    .createHash("sha256")
    .update(verifyCode)
    .digest("hex");

  const verifyTokenExpires = Date.now() + 10 * 60 * 1000;

  try {
    // Create the user
    const createdUser = await User.create(body);

    // Update user with verification token and expiry
    await User.updateOne(
      { email: body.email },
      {
        verifyToken: verifyToken,
        verifyTokenExpires: verifyTokenExpires,
      }
    );

    // Send verification email
    const message = `Please use this code for verification: ${verifyCode}`;
    await sendEmail({
      email: body.email,
      subject: "Registration Code",
      message: message,
    });

    return Response.json("User created successfully. Verification code sent to the email", { status: 200 });
  } catch (err) {
    return Response.json("There was an error. Try again later", {
      status: 500,
    });
  }
}
