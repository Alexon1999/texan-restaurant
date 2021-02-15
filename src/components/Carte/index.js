import { IconButton } from "@material-ui/core";
import { useState } from "react";
import carteImg from "../../images/menu.png";

import "./carte.css";

const Carte = ({ setActive, active, activeCarte, setActiveCarte }) => {
  const [carte, setCarte] = useState([
    "Entrées",
    "Burgers",
    "Poutines",
    "Sides",
    "Desserts",
    "Boissons",
  ]);

  return (
    <div className={"carte " + (activeCarte ? "active" : null)}>
      <div className='carte__image-container'>
        <img src={carteImg} alt='carte_img' />
      </div>

      <div className='carte__items'>
        {carte.map((carte) => (
          <p
            key={carte}
            className={`carte__item ${active === carte ? "active" : ""}`}
            onClick={() => {
              setActive(carte);
              setActiveCarte(false);
            }}>
            {carte}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Carte;
