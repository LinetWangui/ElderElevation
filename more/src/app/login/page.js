"use client";
import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginInProgress, setLoginInProgress] = useState(false);

  async function handleFormSubmit(ev) {
    ev.preventDefault();
    setLoginInProgress(true);
    
    await signIn('credentials', {email, password, callbackUrl: "/"});

    setLoginInProgress(false)
  }

  return (
    <section className="my-14">
      <h1 className="text-center text-primary text-4xl mb-4">Login</h1>
      <form className="block max-w-xl mx-auto" onSubmit={handleFormSubmit}>
        <input
          type="email"
          name="email"
          placeholder="email"
          value={email}
          disabled={loginInProgress}
          onChange={(ev) => setEmail(ev.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={password}
          disabled={loginInProgress}
          onChange={(ev) => setPassword(ev.target.value)}
        />
        <button
          type="submit"
          disabled={loginInProgress}
          className="block w-full text-gray-700 font-semibold border border-gray-300 rounded-xl px-6 py-2"
        >
          Login
        </button>
        <div className="my-1 text-gray-500 pt-2 text-center">
            Forgot Password{" "}
            <Link className="underline text-blue-500" href={"/forgotPassword"}>Reset here &raquo;</Link>
        </div>
        <div className="text-center my-4 text-gray-500 border-t pt-4">
            Don't have an account?{" "}
            <Link className="underline text-blue-500" href={"/register"}>Register here &raquo;</Link>
        </div>
      </form>
    </section>
  );
}
