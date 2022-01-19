import React from "react";

function Loading() {
  return (
    <div className=" flex justify-center items-center">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-900"></div>
    </div>
  );
}

export default Loading;