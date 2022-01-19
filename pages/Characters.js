import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Loading from "../components/Loading";
import AccessDenied from "../components/AccessDenied";
import Pagination from "../components/Pagination";

const Characters = () => {
  const { status } = useSession();
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

  if (status === "loading") {
    return <Loading />;
  }

  if (status === "unauthenticated") {
    return <AccessDenied />;
  }

  return (
    <div className="pb-20">
      <Pagination
        prev={info.prev}
        next={info.next}
        onPrevious={onPrevious}
        onNext={onNext}
      />
      <br />
      <div class="flex justify-center relative">
        <input
          type="text"
          class="bg-white shadow rounded border-0 p-3"
          placeholder="Search character..."
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
        <div class="absolute pin-r pin-t mt-3 mr-4 text-purple-lighter"></div>
      </div>
      <br />
      <br />
      <section className="flex flex-wrap justify-center">
        <div class="container">
          <div class="flex flex-wrap justify-center">
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
                <div class="justify-center text-center w-64 mx-3">
                  <div class="bg-zinc-800 rounded-lg overflow-hidden mb-10">
                    <img src={item.image} class="rounded-t-lg" />
                    <div class="mt-5 pb-8 text-center">
                      <h3 className="font-semibold text-gray-400">
                        {item.name}
                      </h3>
                      <br />
                      <p class="text-base text-body-color mb-5 text-gray-400">
                        Gender: {item.gender} - Specie: {item.species} - Status:{" "}
                        {item.status}
                      </p>
                      <p class="text-base text-body-color text-gray-400">
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
  );
};

export default Characters;
