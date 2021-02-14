import React, { useState } from "react";
import { IconButton, makeStyles } from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import "./adminPage.css";
import AdminNav from "./Menu";
import HistoriqueTable from "./HistoriqueTable";

const useStyles = makeStyles({
  root: {
    position: "absolute",
    top: 0,
    right: 10,
  },
});

const AdminPage = () => {
  const classes = useStyles();

  return (
    <div className='adminPage'>
      <IconButton className={classes.root}>
        <ExitToAppIcon style={{ fontSize: 40 }} />
      </IconButton>

      <div className='adminPage__container'>
        <AdminNav />
        <div style={{ flex: 1, padding: "1rem", width: "100%" }}>
          <HistoriqueTable />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
