import mongoose from "mongoose";
import { User } from "@/app/models/table_users";
import crypto from "crypto";
import { sendEmail } from "../email";

export async function POST(req) {
    const body = await req.json();
    mongoose.connect(process.env.NEXT_PUBLIC_MONGOURL);

    const user = await User.findOne({ email: body.email });

    if (!user) {
        return Response.json("User is not found", { status: 404 });
    }

    const resetToken = crypto.randomBytes(20).toString("hex");
    const passwordResetToken = crypto.createHash("sha256").update(resetToken).digest("hex");

    const passwordResetExpires = Date.now() + 10 * 60 * 1000;

    await User.updateOne({ email: body.email }, {
        passwordResetToken: passwordResetToken,
        passwordResetExpires: passwordResetExpires,
    });

    const resetUrl = `http://localhost:3000/resetPassword/${resetToken}`;

    const message = `We have a received a password reset request. Please use the link below to reset your password\n\n${resetUrl}\n\nThis reset password link will be valid for only 10 mins`;
    
    try {
        await sendEmail({
            email: user.email,
            subject: "Password Reset Request",
            message: message
        });

        return Response.json("Password sent to the user email", {status: 200})
    } catch(err) {
        user.passwordResetToken = undefined;
        user.passwordResetExpires = undefined;
        await User.updateOne({ email: body.email }, {
            passwordResetToken: passwordResetToken,
            passwordResetExpires: passwordResetExpires,
        })

        return Response.json("There was an error. Try again later", { status: 500 });

    }




}
