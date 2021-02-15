import { Button } from "@material-ui/core";
import React from "react";

import "./product.css";

const Product = ({ title, img, prix, id, quantite }) => {
  return (
    <div className='nouvelle__commande__product'>
      <h1>{title}: </h1>
      <h1 className='nouvelle__commande__product-quantite'>{quantite}</h1>
    </div>
  );
};

export default Product;
