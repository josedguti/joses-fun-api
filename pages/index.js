import React from "react";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import Loading from "../components/Loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const { status, data: session } = useSession();

  if (status === "loading") return <Loading />;

  if (!session) {
    toast.warn("You need to sign in!", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      toastId: "success1",
    });
  } else if (session) {
    toast.success("You are logged in!", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      toastId: "success2",
    });
  }

  return (
    <div className="pb-40">
      <ToastContainer />
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
    </div>
  );
}
