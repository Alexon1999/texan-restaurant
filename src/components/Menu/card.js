import { useState } from "react";
import burger from "../../images/menu-burger.png";
import ModalBootsrap from "../modal/Modal";
import "./card.css";

import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { addProduct } from "../../app/Redux-slices/basketsSlice";
import { addAlert } from "../../app/Redux-slices/alertsSlice";
import { AnimatePresence, motion } from "framer-motion";

import { IconButton } from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const Card = ({ title = "Frenchies", img = burger, prix = "11€99" }) => {
  const [show, setShow] = useState(false);
  const dispath = useDispatch();
  const [showButton, setShowButton] = useState(false);
  // const baskets = useSelector(selectBaskets)

  const toggleShowButton = () => setShowButton((prev) => !prev);

  return (
    <>
      <div
        className='card__item'
        onMouseEnter={toggleShowButton}
        onMouseLeave={toggleShowButton}>
        <h1 className='card__item__heading'>{title}</h1>
        <div className='card__item__image-container'>
          <img src={img} alt={title} />
        </div>
        <div className='card__item__details'>
          <p>{prix}</p>

          <AnimatePresence>
            {showButton && (
              <motion.div
                variants={ajoutBtn}
                initial='from'
                animate='to'
                exit='exit'
                onClick={() => {
                  dispath(addProduct({ title, img, prix }));
                  dispath(addAlert({ title, img, id: uuidv4() }));
                }}>
                <OverlayTrigger
                  placement='top'
                  overlay={<Tooltip>Ajouter au panier</Tooltip>}>
                  <IconButton
                    color='secondary'
                    style={{ padding: 0 }}
                    aria-label='add to shopping cart'>
                    <AddShoppingCartIcon style={{ fontSize: "20px" }} />
                  </IconButton>
                </OverlayTrigger>
              </motion.div>
            )}
          </AnimatePresence>

          <i className='fas fa-eye' onClick={() => setShow(true)}></i>
        </div>
      </div>

      <ModalBootsrap
        title={title}
        img={img}
        show={show}
        handleClose={() => setShow(false)}>
        <h2>Ingredients utilisés</h2>
      </ModalBootsrap>
    </>
  );
};

const ajoutBtn = {
  from: {
    opacity: 0,
    y: 20,
  },
  to: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },

  exit: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.3,
    },
  },
};

export default Card;
