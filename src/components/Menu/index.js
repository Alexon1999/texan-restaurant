import { useState } from "react";
import menu from "../../images/menu.png";

import "./menu.css";

const Menu = ({ setActive, active }) => {
  const [menus, setMenus] = useState([
    "Entrées",
    "Burgers",
    "Poutines",
    "Sides",
    "Desserts",
    "Boissons",
  ]);

  return (
    <div className='menu'>
      <div className='menu__image-container'>
        <img src={menu} alt='menu_img' />
      </div>

      <div className='menu__items'>
        {menus.map((menu) => (
          <p
            key={menu}
            className={`menu__item ${active === menu ? "active" : ""}`}
            onClick={() => setActive(menu)}>
            {menu}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Menu;
