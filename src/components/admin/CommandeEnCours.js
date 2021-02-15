import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import "./commade-en-cours.css";
const CommandeEnCours = () => {
  return (
    <div className='commande-en-cours'>
      {[
        {
          numRef: "zez545",
          nomClient: "Jack William",
          tel: "0155444313",
          adresse: "75 rue besson ",
          ville: "paris",
          code_postale: "75546",
          panier: [
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
          ],
        },
        {
          numRef: "isji9",
          nomClient: "Mary Drake",
          tel: "0155444313",
          adresse: "45 avenue boulevard",
          ville: "paris",
          code_postale: "75136",
          panier: [
            {
              title: "Hot Wings",
              img: "/static/media/wings.f5a363a6.png",
              prix: 7.99,
              id: 11,
              quantite: 1,
            },
            {
              title: "Frites",
              img: "/static/media/frites.581a7fd1.png",
              prix: 3.99,
              id: 10,
              quantite: 1,
            },
            {
              title: "Texas Ranger",
              img: "/static/media/texas-ranger.219de773.png",
              prix: 15.99,
              id: 3,
              quantite: 1,
            },
          ],
        },
      ].map((commande) => (
        <div key={commande.numRef} className='commande-en-cours__card'>
          <h2 className='commande-en-cours__card-heading'>
            Commande Ref:{" "}
            <span className='commande-en-cours__card-ref'>
              {commande.numRef}
            </span>
          </h2>
          {commande.panier.map((produit) => (
            <div key={produit.id} className='commande-en-cours__card-product'>
              <img src={produit.img} alt={produit.title} />
              <h2>{produit.title}</h2>
              <h2>{produit.quantite}</h2>
            </div>
          ))}
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: "black" }} />}
              aria-controls='panel1a-content'
              id='panel1a-header'>
              <Typography>Information et Adresse de Livraison</Typography>
            </AccordionSummary>
            <AccordionDetails></AccordionDetails>
          </Accordion>
        </div>
      ))}
    </div>
  );
};

export default CommandeEnCours;
