import React, { useEffect, useState, Fragment } from "react";
import { useSession } from "next-auth/react";
import Loading from "../components/Loading";
import AccessDenied from "../components/AccessDenied";
import Pagination from "../components/Pagination";
import Image from "next/image";
import Modal from "../components/Modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Characters = () => {
  const { status, data: session } = useSession();
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [info, setInfo] = useState({});

  const API = "https://rickandmortyapi.com/api/character/";

  const getCharacters = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
        setInfo(data.info);
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

  if (status === "loading") {
    return <Loading />;
  }

  if (status === "unauthenticated") {
    return <AccessDenied />;
  }

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
    <>
      <div className="pb-20">
      <ToastContainer />
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
                  >
                    <div className="bg-zinc-800/70 hover:shadow-2xl rounded-lg overflow-hidden mb-10">
                      <Image
                        width={400}
                        height={410}
                        src={item.image}
                        className="rounded-t-lg"
                        alt="rick and morty photos"
                      />
                      <div className="mt-3 pb-3 text-center">
                        <h3 className="font-extrabold text-white">
                          {item.name}
                        </h3>
                        <Modal
                          name={item.name}
                          gender={item.gender}
                          location={item.location.name}
                          specie={item.species}
                          status={item.status}
                          image={item.image}
                          origin={item.origin.name}
                        />
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Characters;
