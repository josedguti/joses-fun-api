import React, { useEffect, useState, Fragment } from "react";
import { useSession } from "next-auth/react";
import Loading from "../components/Loading";
import AccessDenied from "../components/AccessDenied";
import Pagination from "../components/Pagination";
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";

const Characters = () => {
  const { status } = useSession();
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [info, setInfo] = useState({});

  let [isOpen, setIsOpen] = useState(false);

  
  const API = "https://rickandmortyapi.com/api/character/";
  
  const getCharacters = (url) => {
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      setCharacters(data.results);
      setInfo(data.info);
      console.log(data);
    })
    .catch((error) => console.log(error));
  };
  
  const onPrevious = () => {
    getCharacters(info.prev);
  };
  
  const onNext = () => {
    getCharacters(info.next);
  };
  
  useEffect(() => {
    getCharacters(API);
  }, []);
  
  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
    console.log(setCharacters)
  };

  if (status === "loading") {
    return <Loading />;
  }
  
  if (status === "unauthenticated") {
    return <AccessDenied />;
  }

  return (
    <>
      <div className="mb-8">
        <Pagination
          prev={info.prev}
          next={info.next}
          onPrevious={onPrevious}
          onNext={onNext}
        />
        <br />
        <div className="flex justify-center relative">
          <input
            type="text"
            className="bg-white shadow rounded border-0 p-3"
            placeholder="Search character..."
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
          <div className="absolute pin-r pin-t mt-3 mr-4 text-purple-lighter"></div>
        </div>
        <br />
        <br />
        <section className="flex flex-wrap justify-center">
          <div className="container">
            <div className="flex flex-wrap justify-center">
              {characters
                .filter((item) => {
                  if (searchTerm === "") {
                    return item;
                  } else if (
                    item.name.toLowerCase().includes(searchTerm.toLowerCase())
                  ) {
                    return item;
                  }
                  return false;
                })
                .map((item, index) => (
                  <div
                    key={index}
                    className="justify-center text-center w-64 mx-3"
                    onClick={() => {openModal();}}
                  >
                    <div
                      className="bg-zinc-800/70 hover:shadow-2xl rounded-lg overflow-hidden mb-10"
                    >
                      <Image
                        width={400}
                        height={400}
                        src={item.image}
                        className="rounded-t-lg"
                        alt="rick and morty photos"
                      />
                      <div className="mt-5 pb-8 text-center">
                        <h3 className="font-extrabold text-white">
                          {item.name}
                        </h3>
                        <br />
                        <p className="text-base text-body-color mb-5 text-white">
                          Gender: {item.gender} - Specie: {item.species} -
                          Status:
                          {item.status}
                        </p>
                        <p className="text-base text-body-color text-white">
                          {item.location.name}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>
      </div>
      <Transition appear show={isOpen} as={Fragment} backdrop="static">
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto bg-zinc-900/50"
          onClose={closeModal}
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
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Working on Modal
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Working on Modal
                  </p>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Characters;
