import { useState } from "react";
import burger from "../../images/menu-burger.png";
import ModalBootsrap from "../modal/Modal";
import "./card.css";

import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { addProduct } from "../../app/Redux-slices/basketsSlice";
import { addAlert } from "../../app/Redux-slices/alertsSlice";
import { AnimatePresence, motion } from "framer-motion";

import { Button, IconButton } from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { splitPrix } from "../../utilities";

import Modal from "../MyModal/Modal";

const Card = ({ title = "Frenchies", img = burger, prix = 11.99, id }) => {
  const [show, setShow] = useState(false);
  const dispath = useDispatch();
  const [showButton, setShowButton] = useState(false);
  // const baskets = useSelector(selectBaskets)

  const handleClose = (e) => {
    if (
      e.target.classList.contains("myModal__backdrop") ||
      e.target.classList.contains("MuiIconButton-root") ||
      e.target.classList.contains("fa-times") ||
      e.target.classList.contains("MuiIconButton-label")
    ) {
      setShow(false);
      setShowButton(false);
    }
  };

  // const Prix = splitPrix(prix);

  return (
    <div
      className='card__item'
      onMouseEnter={() => setShowButton(true)}
      onMouseLeave={() => setShowButton(false)}>
      <h1 className='card__item__heading'>{title}</h1>
      <div className='card__item__image-container'>
        <img src={img} alt={title} />
      </div>
      <div className='card__item__details'>
        <p>
          {/* {Prix[0]}€{Prix[1]} */}
          {splitPrix(prix)}
        </p>

        <AnimatePresence>
          {showButton && (
            <motion.div
              variants={ajoutBtn}
              initial='from'
              animate='to'
              exit='exit'
              className='card__item__shopping-btn'
              onClick={() => {
                dispath(addProduct({ title, img, prix, id, quantite: 1 }));
                dispath(addAlert({ title, img, id: uuidv4() }));
              }}>
              <OverlayTrigger
                placement='top'
                delay={{ show: 250, hide: 300 }}
                trigger={["hover", "focus"]}
                overlay={<Tooltip>Ajouter au panier</Tooltip>}>
                <IconButton
                  color='secondary'
                  style={{ padding: 0 }}
                  aria-label='add to shopping cart'>
                  <AddShoppingCartIcon style={{ fontSize: "25px" }} />
                </IconButton>
              </OverlayTrigger>
            </motion.div>
          )}
        </AnimatePresence>

        <i className='fas fa-eye' onClick={() => setShow(true)}></i>
      </div>

      <Modal showModal={show} setShowModal={setShow} handleClose={handleClose}>
        <Modal.Header>
          <h1>{title}</h1>
          <img src={img} alt={title} />
        </Modal.Header>
        <Modal.Body>
          <Modal.Body.Heading>Ingredients utilisés</Modal.Body.Heading>
          <p>Boeuf</p>
          <p>Cheddar</p>
          <p>Salade</p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() => {
              dispath(addProduct({ title, img, prix, id, quantite: 1 }));
              dispath(addAlert({ title, img, id: uuidv4() }));
            }}
            variant='contained'
            color='secondary'
            className='card__item__commander-btn'
            endIcon={<AddShoppingCartIcon style={{ fontSize: "25px" }} />}>
            Commander
          </Button>
        </Modal.Footer>
      </Modal>
      {/* <ModalBootsrap
        title={title}
        img={img}
        show={show}
        handleClose={() => {
          setShow(false);
          setShowButton(false);
        }}>
        <h2>Ingredients</h2>
        <p>Boeuf</p>
        <p>Cheddar</p>
        <p>Salade</p>
      </ModalBootsrap> */}
    </div>
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
