import React, { useEffect, useState } from "react";
import { IconButton, makeStyles } from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import { db, auth } from "../../config/firebase";
import ContactTable from "./ContactTable";

const useStyles = makeStyles({
  root: {
    position: "absolute",
    top: 0,
    right: 50,
  },
});

const AdminPage = () => {
  const classes = useStyles();
  const [contacts, setContacts] = useState(null);

  const seDeconnecter = () => {
    auth.signOut();
  };

  useEffect(() => {
    // db.collection("contact").onSnapshot((snapshot) => {
    //   setContacts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    // });
    db.collection("contact")
      .orderBy("createdAt", "desc")
      .get()
      .then((snapshot) => {
        setContacts(
          snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      });
  }, []);

  const deleteContact = (id) => ()=> {
    db.collection('contact').doc(id).delete()
    setContacts(contacts.filter(contact => contact.id !== id))
  }

  return (
    <div
      style={{
        position: "relative",
        margin: "1rem",
        padding: "1rem",
        minHeight: "80vh",
      }}>
      <IconButton className={classes.root} onClick={seDeconnecter}>
        <ExitToAppIcon style={{ fontSize: 40 }} />
      </IconButton>

      <ContactTable contacts={contacts} deleteContact={deleteContact} />
    </div>
  );
};

export default AdminPage;
