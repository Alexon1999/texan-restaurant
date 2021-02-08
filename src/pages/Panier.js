import React from "react";

import { useSelector } from "react-redux";
import { selectBaskets } from "../app/Redux-slices/basketsSlice";

const Panier = () => {
  const baskets = useSelector(selectBaskets);

  return (
    <div className='panier'>
      <h1>
        Détail de votre panier ({baskets.length} article
        {baskets.length > 1 && "s"})
      </h1>
      {/* TODO: faire la page panier */}
      {baskets.map((basket) => (
        <div key={basket.title}>
          <img src={basket.img} alt='' />
          {basket.title}
        </div>
      ))}
    </div>
  );
};

export default Panier;
