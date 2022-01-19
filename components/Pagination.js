import React from "react";

const Pagination = (props) => {
  const handlePrevious = () => {
    props.onPrevious();
  };

  const handleNext = () => {
    props.onNext();
  };

  return (
    <nav>
      <br />
      <ul className="flex justify-center">
        {props.prev ? (
          <li>
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800"
            onClick={handlePrevious}
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Previous
              </span>
            </button>
          </li>
        ) : null}
        {props.next ? (
          <li>
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800"
            onClick={handleNext}
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Next
              </span>
            </button>
          </li>
        ) : null}
      </ul>
    </nav>
  );
};

export default Pagination;
