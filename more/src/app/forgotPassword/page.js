"use client";
import { useState } from "react";

export default function PasswordResetRequestPage() {
  const [email, setEmail] = useState("");
  const [requestingReset, setRequestingReset] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [error, setError] = useState(false);

  async function handleFormSubmit(ev) {
    ev.preventDefault();
    setRequestingReset(true);
    setError(false);
    setEmailSent(false);
    const response = await fetch("/api/forgotPassword", {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: { "Content-Type": "application/json" },
    });
    if (!response.ok) {
      setError(true);
    } else {
      setEmailSent(true);
    }
    setRequestingReset(false);
  }

  return (
    <section className="my-14">
      <h1 className="text-center text-primary text-4xl mb-4">Password Reset</h1>
      {emailSent && (
        <div className="my-4 text-center">
          Password reset email sent.
          <br />
          Please check your inbox.
        </div>
      )}
      {error && (
        <div className="my-4 text-center">
          An error has occurred.
          <br />
          Please try again later.
        </div>
      )}
      <form className="block max-w-xl mx-auto" onSubmit={handleFormSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          disabled={requestingReset}
          onChange={(ev) => setEmail(ev.target.value)}
          className="block w-full p-2 mb-4 border border-gray-300 rounded-lg"
        />
        <button
          type="submit"
          disabled={requestingReset}
          className="block w-full text-gray-700 font-semibold border border-gray-300 rounded-xl px-6 py-2"
        >
          {requestingReset ? "Sending..." : "Send Password Reset Email"}
        </button>
      </form>
    </section>
  );
}
