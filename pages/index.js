import React from "react";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <>
      <br />
      <br />
      <div className="text-center">
        {!session ? (
          <h1 className="italic hover:not-italic font-extrabold text-7xl">
            Welcome, <span className="text-red-500">Stranger!</span>
          </h1>
        ) : (
          <h1 className="italic hover:not-italic font-extrabold text-7xl">
            Welcome, <span className="text-blue-500">{session.user.name}</span>
          </h1>
        )}
        <br />
        <p className="italic hover:not-italic text-4xl mt-5 mx-12">
          This is the Rick and Morty API, where you will be able to see your
          favorite characters and their info, enjoy!!
        </p>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="flex justify-center">
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            <Link href="/Characters">Go to Characters Page</Link>
          </span>
        </button>
      </div>
    </>
  );
}
