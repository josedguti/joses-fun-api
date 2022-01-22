import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

function Nav() {
  const { data: session } = useSession();

  return (
    <>
      <Head>
        <title>Jose&apos;s Fun API</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="mortyicon" href="/favicon.ico" />
      </Head>
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-zinc-800">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <Link href="/" className="flex" passHref>
            <span className="self-center text-lg font-bold whitespace-nowrap text-gray-400 cursor-pointer">
              Jose&apos;s Fun API
            </span>
          </Link>
          <div>
            {session ? (
              <div className="flex ">
                <p className="text-gray-400 mr-3 mt-2">
                  Welcome, {session.user.name}
                </p>
                <div className="h-10 w-10 relative mr-4">
                  <Image
                    src={session.user.image}
                    alt="github profile picture"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full h-10 w-10"
                  />
                </div>
                <button
                  onClick={() => signOut()}
                  type="button"
                  className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <div className="flex">
                <button
                  onClick={() => signIn("github")}
                  type="button"
                  className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                >
                  Sign In with GitHub
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
