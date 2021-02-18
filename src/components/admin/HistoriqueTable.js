import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
    margin: "3rem auto",
    maxWidth: 1200,
  },

  heading: {
    fontWeight: "bold",
  },
});

export default function HistoriqueTable({ contacts, deleteContact }) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.root}>
      <Table className={classes.table} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell className={classes.heading}>Client</TableCell>
            <TableCell className={classes.heading} align='right'>
              Commande
            </TableCell>
            <TableCell className={classes.heading} align='right'>
              Date Commande
            </TableCell>
            <TableCell className={classes.heading} align='right'>
              Réglé
            </TableCell>
            <TableCell className={classes.heading} align='right'>
              Détails Commande
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {contacts?.map((contact) => (
            <TableRow key={contact.id}>
              <TableCell component='th' scope='row'>
                {contact.nom}
              </TableCell>
              <TableCell align='right'>{contact.nomSociete}</TableCell>
              <TableCell align='right'>{contact.numTel}</TableCell>
              <TableCell align='right'>{contact.email}</TableCell>
              <TableCell align='right'>{contact.message}</TableCell>
              <TableCell
                align='right'
                className='text-light bg-danger text-center'
                onClick={deleteContact(contact.id)}>
                X
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
