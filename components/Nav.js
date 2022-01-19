import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

function Nav() {
  const { data: session } = useSession();

  return (
    <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-zinc-800">
      <div class="container flex flex-wrap justify-between items-center mx-auto">
        <a href="/" class="flex">
          <span class="self-center text-lg font-bold whitespace-nowrap text-gray-400">
            Jose's Fun API
          </span>
        </a>
        <div>
          {session ? (
            <div class="flex ">
              <p className="text-gray-400 mr-3 mt-2">
                Welcome, {session.user.name}
              </p>
              <div className="h-10 w-10 relative mr-4">
                <Image
                  src={session.user.image}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full h-10 w-10"
                />
              </div>
              <button
                onClick={() => signOut()}
                type="button"
                class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <div class="flex">
              <button
                onClick={() => signIn("github")}
                type="button"
                class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                Sign In with GitHub
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Nav;
