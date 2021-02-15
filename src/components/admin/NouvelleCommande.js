import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  makeStyles,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import logo from "../../images/logo.png";
import Product from "./Product";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "80%",
    margin: "3rem auto",
  },
  heading: {
    fontSize: theme.typography.pxToRem(18),
    fontWeight: theme.typography.fontWeightMedium,
    color: "rgb(94, 92, 243)",
  },

  color: {
    color: "black",
  },
}));

const NouvelleCommande = () => {
  const classes = useStyles();

  return (
    <div className={"nouvelleCommande " + classes.root}>
      <h1
        style={{
          textAlign: "center",
          marginBottom: "2rem",
          color: "rgb(86 85 85)",
        }}>
        Vos Nouvelles Commandes
      </h1>
      <Accordion className={classes.color}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "black" }} />}
          aria-controls='panel1a-content'
          id='panel1a-header'>
          <Typography className={classes.heading}>
            Commande Ref: kahe55{" "}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
            }}>
            {[
              {
                title: "Frenchies",
                img: "/static/media/menu-burger.39797681.png",
                prix: 11.99,
                id: 1,
                quantite: 1,
              },
              {
                title: "Cosa Nostra",
                img: "/static/media/cosa-nostra.b9ed184b.png",
                prix: 11.99,
                id: 2,
                quantite: 2,
              },
            ].map((product) => (
              <Product {...product} key={product.id} />
            ))}
            <Button variant='contained' color='primary'>
              {" "}
              OK{" "}
            </Button>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default NouvelleCommande;
