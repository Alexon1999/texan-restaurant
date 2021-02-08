import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Menu from "../components/Menu";
import Card from "../components/Menu/card";

import "./commander.css";

import frenchies from "../images/menu-burger.png";
import CosaNostra from "../images/cosa-nostra.png";
import TexasRanger from "../images/texas-ranger.png";
import Frites from "../images/frites.png";
import Wings from "../images/wings.png";

const Commander = () => {
  const [active, setActive] = useState("Burgers");

  return (
    <div className='commander'>
      <div className='commander__container'>
        <Menu active={active} setActive={setActive} />
        <div></div>
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
