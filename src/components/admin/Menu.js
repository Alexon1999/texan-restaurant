import Logo from "../../images/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { selectAdmin, changePage } from "../../app/Redux-slices/adminSlice";
import { useState } from "react";

import "./menu.css";
import { IconButton } from "@material-ui/core";

const AdminNav = () => {
  const admin = useSelector(selectAdmin);
  const dispatch = useDispatch();

  const [active, setActive] = useState(false);

  return (
    <div className={"adminNav " + (active ? "active" : "")}>
      <div className='adminNav__header'>
        <img src={Logo} alt='' />
      </div>

      <div className='adminNav__links'>
        {admin.pages.map((page) => (
          <button
            className={
              "adminNav__link " +
              (admin.currentPage === page.name ? "active" : "")
            }
            onClick={() => {
              if (admin.currentPage !== page.name) {
                dispatch(changePage(page.name));
              }
            }}>
            <i className={"fas adminNav__link__icone " + page.icone}></i>{" "}
            <p>{page.libelle}</p>
          </button>
        ))}
      </div>

      <div className='adminNav__close'>
        <IconButton onClick={() => setActive(!active)}>
          <i
            className={
              "fas fa-" + (active ? "chevron-right" : "chevron-left")
            }></i>
        </IconButton>
      </div>
    </div>
  );
};

export default AdminNav;
