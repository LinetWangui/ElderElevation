"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function Header() {
  const session = useSession();
  const status = session?.status;
  const userData = session.data?.user;
  let username = userData?.email;
  
  if (session?.data?.expires === Date.now + 1 * 60 * 60) {
    signOut({ callbackUrl: "/login" });
  }

  console.log(session);
  return (
    <header className="flex items-center justify-between my-5 mx-5">
      <Link className="text-primary font-semibold text-2xl" href="/">
        ElderElevation
      </Link>
      <nav className="flex items-center gap-7 text-gray-500 font-semibold">
        <Link href={"/"}>Home</Link>
        <Link href={""}>About</Link>
        <Link href={""}>Contact</Link>
      </nav>
      {status === "authenticated" && (
        <nav className="flex items-center gap-7 text-gray-500 font-semibold">
          <Link className="whitespace-nowrap" href={"/profile"}>
           <div className="flex gap-1 items-center rounded-full border border-gray-500 py-1 px-2">
           <svg
              class="h-7 w-7 text-gray-500 relative"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            {username}
           </div>
          </Link>
          <button
            onClick={() => signOut()}
            className="bg-primary rounded-full text-white px-8 py-2"
          >
            Logout
          </button>
        </nav>
      )}
      {status === "unauthenticated" && (
        <nav className="flex items-center gap-7 text-gray-500 font-semibold">
          <Link href={"/login"}>Login</Link>
          <Link
            href={"/register"}
            className="bg-primary rounded-full text-white px-8 py-2"
          >
            Register
          </Link>
        </nav>
      )}
    </header>
  );
}
