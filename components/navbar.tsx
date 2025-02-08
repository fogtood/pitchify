"use client";

import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { BadgePlus, Github, Loader, LogOut } from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Navbar() {
  const { data: session, status } = useSession();

  return (
    <header className="bg-white px-5 py-3 shadow-sm">
      <nav className="flex items-center justify-between">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={144} height={30} priority />
        </Link>

        <div className="flex items-center gap-5 text-black">
          {status === "loading" ? (
            <Loader className="size-6 animate-spin" />
          ) : session?.user ? (
            <>
              <Link href="/startup/create">
                <span className="max-sm:hidden">Create</span>
                <BadgePlus className="size-6 sm:hidden" />
              </Link>
              <button
                className="text-red-500 max-sm:hidden"
                onClick={() => {
                  signOut();
                }}
              >
                Logout
                <LogOut className="size-6 sm:hidden" />
              </button>
              <Link href={`/user/${session?.user.id}`}>
                <Avatar className="size-10">
                  <AvatarImage src={session?.user.image || "/user.png"} />
                  <AvatarFallback>AV</AvatarFallback>
                </Avatar>
              </Link>
            </>
          ) : (
            <button
              className="flex items-center gap-1 rounded-lg border-2 border-black p-2 font-bold"
              onClick={() => signIn("github")}
            >
              <Github className="size-4" />
              Login
            </button>
          )}
        </div>
      </nav>
    </header>
  );
}
