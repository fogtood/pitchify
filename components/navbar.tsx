import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { BadgePlus, Github, LogOut } from "lucide-react";

export default function Navbar() {
  const isLoggedIn = false;

  return (
    <header className="bg-white px-5 py-3 shadow-sm">
      <nav className="flex items-center justify-between">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={144} height={30} />
        </Link>

        <div className="flex items-center gap-5 text-black">
          {isLoggedIn ? (
            <>
              <Link href="/startup/create">
                <span className="max-sm:hidden">Create</span>
                <BadgePlus className="size-6 sm:hidden" />
              </Link>
              <>
                <span className="max-sm:hidden">Logout</span>
                <LogOut className="size-6 text-red-500 sm:hidden" />
              </>
              <Link href={"/user"}>
                <Avatar>
                  <AvatarImage src="/user.png" />
                  <AvatarFallback>AV</AvatarFallback>
                </Avatar>
              </Link>
            </>
          ) : (
            <button className="flex items-center gap-1 rounded-lg border-2 border-black p-2 font-bold">
              <Github className="size-4" />
              Login
            </button>
          )}
        </div>
      </nav>
    </header>
  );
}
