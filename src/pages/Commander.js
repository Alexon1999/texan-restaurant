import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Carte from "../components/Carte";
import Card from "../components/Carte/card";

import "./commander.css";

import frenchies from "../images/menu-burger.png";
import CosaNostra from "../images/cosa-nostra.png";
import TexasRanger from "../images/texas-ranger.png";
import Frites from "../images/frites.png";
import Wings from "../images/wings.png";
import { IconButton } from "@material-ui/core";
const Commander = () => {
  const [active, setActive] = useState("Burgers");
  const [activeCarte, setActiveCarte] = useState(true);

  // activeCarte && (window.document.body.style.overflow = "hidden")

  activeCarte
    ? (window.document.body.style.overflow = "hidden")
    : (window.document.body.style.overflow = "auto");

  return (
    <div className='commander'>
      <div className='commander__container'>
        <Carte
          active={active}
          setActive={setActive}
          activeCarte={activeCarte}
          setActiveCarte={setActiveCarte}
        />
        <div className='commander__container__cards'>
          {datas
            .filter((data) => data.categ === active.toLowerCase())
            .map((data) => {
              return <Card key={data.id} {...data} />;
            })}
          {/* <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card /> */}
        </div>

        <div className={"commander__carte " + (activeCarte ? "white" : null)}>
          <IconButton onClick={() => setActiveCarte(() => !activeCarte)}>
            <i
              className={
                "fas fa-arrow-" + (activeCarte ? "left" : "right")
              }></i>
          </IconButton>
        </div>
      </div>
    </div>
  );
};

const datas = [
  {
    id: 1,
    title: "Frenchies",
    prix: 11.99,
    img: frenchies,
    categ: "burgers",
  },
  {
    id: 2,
    title: "Cosa Nostra",
    prix: 11.99,
    img: CosaNostra,
    categ: "burgers",
  },
  {
    id: 3,
    title: "Texas Ranger",
    prix: 15.99,
    img: TexasRanger,
    categ: "burgers",
  },
  {
    id: 4,
    title: "Frenchies",
    prix: 11.99,
    img: frenchies,
    categ: "burgers",
  },
  {
    id: 5,
    title: "Frenchies",
    prix: 11.99,
    img: frenchies,
    categ: "burgers",
  },
  {
    id: 6,
    title: "Frenchies",
    prix: 11.99,
    img: frenchies,
    categ: "burgers",
  },
  {
    id: 7,
    title: "Frenchies",
    prix: 11.99,
    img: frenchies,
    categ: "burgers",
  },
  {
    id: 8,
    title: "Frenchies",
    prix: 11.99,
    img: frenchies,
    categ: "burgers",
  },
  {
    id: 9,
    title: "Frenchies",
    prix: 11.99,
    img: frenchies,
    categ: "burgers",
  },
  {
    id: 10,
    title: "Frites",
    prix: 3.99,
    img: Frites,
    categ: "sides",
  },
  {
    id: 11,
    title: "Hot Wings",
    prix: 7.99,
    img: Wings,
    categ: "sides",
  },
];

export default Commander;
