import React from "react";
import { signIn } from "next-auth/react";
function AccessDenied() {
  return (
    <div className="text-center mt-10">
      <p className="text-2xl">
        Access Denied
        </p>
        <p className="text-2xl">
        Sign In to see the content.
        </p>
        <br />
      <button
        onClick={() => signIn("github")}
        type="button"
        class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Sign In with GitHub
      </button>
    </div>
  );
}

export default AccessDenied;
