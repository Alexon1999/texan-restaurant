import "./product.css";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import { useDispatch } from "react-redux";
import {
  incrementQauntite,
  decrementQauntite,
} from "../../app/Redux-slices/basketsSlice";
import { IconButton } from "@material-ui/core";
import { splitPrix } from "../../utilities";

const Product = ({ img, title, prix, id, quantite }) => {
  const dispatch = useDispatch();

  return (
    <div className='product'>
      <img src={img} alt='' />
      <div className='product--info'>
        <p className='product--info-title'>{title}</p>
        <p className='product--info-prix'>{splitPrix(prix)}</p>
      </div>

      <div className='product--quantite'>
        <IconButton
          onClick={() => {
            dispatch(decrementQauntite({ id }));
          }}>
          <RemoveIcon />
        </IconButton>

        <span>{quantite}</span>

        <IconButton onClick={() => dispatch(incrementQauntite({ id }))}>
          <AddIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Product;
