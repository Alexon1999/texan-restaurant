import { useState } from "react";
import Menu from "../components/Menu";
import Card from "../components/Menu/card";

import "./commander.css";

import frenchies from "../images/menu-burger.png";
import CosaNostra from "../images/cosa-nostra.png";
import TexasRanger from "../images/texas-ranger.png";
import Frites from "../images/frites.png";
import Wings from "../images/wings.png";

const datas = [
  {
    title: "Frenchies",
    prix: "11€99",
    img: frenchies,
    categ: "burgers",
  },
  {
    title: "Cosa Nostra",
    prix: "11€99",
    img: CosaNostra,
    categ: "burgers",
  },
  {
    title: "Texas Ranger",
    prix: "15€99",
    img: TexasRanger,
    categ: "burgers",
  },
  {
    title: "Frenchies",
    prix: "11€99",
    img: frenchies,
    categ: "burgers",
  },
  {
    title: "Frenchies",
    prix: "11€99",
    img: frenchies,
    categ: "burgers",
  },
  {
    title: "Frenchies",
    prix: "11€99",
    img: frenchies,
    categ: "burgers",
  },
  {
    title: "Frenchies",
    prix: "11€99",
    img: frenchies,
    categ: "burgers",
  },
  {
    title: "Frenchies",
    prix: "11€99",
    img: frenchies,
    categ: "burgers",
  },
  {
    title: "Frenchies",
    prix: "11€99",
    img: frenchies,
    categ: "burgers",
  },
  {
    title: "Frites",
    prix: "3€99",
    img: Frites,
    categ: "sides",
  },
  {
    title: "Hot Wings",
    prix: "7€99",
    img: Wings,
    categ: "sides",
  },
];

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
            .map((data, i) => {
              return <Card key={i} {...data} />;
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

export default Commander;
