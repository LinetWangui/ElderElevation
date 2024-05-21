"use client";
import Link from "next/link";
import { useState } from "react";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [creatingUser, setCreatingUser] = useState(false);
  const [userCreated, setUserCreated] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [error, setError] = useState(false);

  async function handleFormSubmit(ev) {
    ev.preventDefault();
    setCreatingUser(true);
    setError(false);
    setUserCreated(false);
    const response = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (!response.ok) {
      setError(true);
    }
    else {
      setUserCreated(true);
    }
    setCreatingUser(false);
  }

  return (
    <section className="my-14">
      <h1 className="text-center text-primary text-4xl mb-4">Register</h1>
      {userCreated && (
        <div className="my-4 text-center">
          User created.
          <br />
          Now you can{" "}
          <Link className="underline" href={"/login"}>
            Login &raquo;
          </Link>
        </div>
      )}
      {emailSent && (
        <div className="my-4 text-center">
          A verification code has been sent.
        </div>
      )}
      {error && (
        <div className="my-4 text-center">
          An error has occured.
          <br />
          Please try again later
        </div>
      )}
      <form className="block max-w-xl mx-auto" onSubmit={handleFormSubmit}>
        <input
          type="email"
          placeholder="email"
          value={email}
          disabled={creatingUser}
          onChange={(ev) => setEmail(ev.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          disabled={creatingUser}
          onChange={(ev) => setPassword(ev.target.value)}
        />
        <button
          type="submit"
          disabled={creatingUser}
          className="block w-full text-gray-700 font-semibold border border-gray-300 rounded-xl px-6 py-2"
        >
          Register
        </button>
        <div className="text-center my-4 text-gray-500 border-t pt-4">
            Already have an account?{" "}
            <Link className="underline text-blue-500" href={"/login"}>Login here &raquo;</Link>
        </div>
      </form>
    </section>
  );
}
