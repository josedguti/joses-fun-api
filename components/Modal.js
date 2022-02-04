import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";

const Modal = ({ name, gender, location, specie, image, origin, status }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
       <button 
       onClick={() => setIsOpen(true)}
       className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800 mt-5">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
           More Info
          </span>
        </button>
      {isOpen ? (
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 z-10 overflow-y-auto bg-zinc-800/70"
            onClose={() => setIsOpen(false)}
            static={true}
          >
            <div className="min-h-screen px-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="fixed inset-0" />
              </Transition.Child>

              {/* This element is to trick the browser into centering the modal contents. */}
              <span
                className="inline-block h-screen align-middle"
                aria-hidden="true"
              >
                &#8203;
              </span>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <div className="inline-block w-full max-w-md p-6 my-7 overflow-hidden text-center align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Image
                        width={400}
                        height={350}
                        src={image}
                        className="rounded-t-lg"
                        alt="rick and morty photos"
                      />
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-bold leading-6 text-gray-900 mt-2"
                  >
                    {name}
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500"><strong>Gender:</strong> {gender}</p>
                  </div>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500"><strong>Specie:</strong> {specie}</p>
                  </div>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500"><strong>Status:</strong> {status}</p>
                  </div>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500"><strong>Location:</strong> {location}</p>
                  </div>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500"><strong>Origin:</strong> {origin}</p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                      onClick={() => setIsOpen(false)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition>
      ) : (
        ""
      )}
    </>
  );
};

export default Modal;
