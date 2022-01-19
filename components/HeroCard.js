import React, { useState } from "react";
import "./HeroCard.css";

const HeroCard = ({ characters = [],  data }) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <React.Fragment>
      <input
        type="text"
        className="input"
        placeholder="Search for Character..."
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      <br />
      
        <div className="square">
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
              <div className="card">
                <div className="card-image--wrapper">
                  <img
                    className="card-image"
                    src={item.image}
                    alt="rick and morty pictures"
                  />
                </div>
                <div className="card-body">
                  <h2>{item.name}</h2>
                  <p>
                     Gender: {item.gender} - Specie: {item.species} - Status: {item.status}
                  </p>
                  <p>Location: {item.location.name}</p>
                  
                </div>
              </div>
            ))}
          
        </div>
        
      
        
    </React.Fragment>
  );
};

export default HeroCard;
