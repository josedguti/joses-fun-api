import React from "react";
import { signIn } from "next-auth/react";


function AccessDenied() {
  return (
    <>
      <div className="flex justify-center text-center mt-10">
        <div className="rounded-md bg-red-50/70 p-4">
          <div className="flex">
            <div className="ml-3">
              <h3 className="text-2xl font-bold text-red-700">
                Access Denied
              </h3>
              <p className="text-base font-medium text-red-700 mt-2">
                Sorry, but you can&apos;t continue without Signing In.
              </p>
            </div>
          </div>
        </div>
        <br />
      </div>
      <div className="flex justify-center mt-5">
        <button 
        onClick={() => signIn()}
        className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Sign In
          </span>
        </button>
      </div>
    </>
  );
}

export default AccessDenied;
