import React from "react";
import { IconButton, makeStyles } from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import "./adminPage.css";
import AdminNav from "./Menu";
import HistoriqueTable from "./HistoriqueTable";
import NouvelleCommande from "./NouvelleCommande";

import { Route, Switch, useRouteMatch } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { selectAdmin, changePage } from "../../app/Redux-slices/adminSlice";
import CommandeEnCours from "./CommandeEnCours";
import Suivi from "./Suivi";
import Disponibilte from "./Disponibilite";

const useStyles = makeStyles({
  root: {
    position: "absolute",
    top: 0,
    right: 10,
  },
});

const AdminPage = () => {
  const admin = useSelector(selectAdmin);

  const classes = useStyles();
  const { path, url } = useRouteMatch();
  console.log(path, url);
  return (
    <div className='adminPage'>
      <IconButton className={classes.root}>
        <ExitToAppIcon style={{ fontSize: 40 }} />
      </IconButton>

      <div className='adminPage__container'>
        <AdminNav />
        <div style={{ flex: 1, padding: "1rem", width: "100%" }}>
          {/* TODO:  */}
          <Switch>
            <Route exact path={path + "/nouvelles-commandes"}>
              <NouvelleCommande />
            </Route>
            <Route exact path={path + "/commande-en-cours"}>
              <CommandeEnCours />
            </Route>
            <Route exact path={path + "/historiques"}>
              <HistoriqueTable />
            </Route>
            <Route exact path={path + "/suivi-activites"}>
              <Suivi />
            </Route>
            <Route exact path={path + "/disponibles-plats"}>
              <Disponibilte />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
