import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { calculTotal } from "../../utilities";

import "./commade-en-cours.css";
import CommandeEnCoursProduct from "./CommandeEnCoursProduct";
const CommandeEnCours = () => {
  return (
    <div className='commande-en-cours'>
      {[
        {
          numRef: "zez545",
          nomClient: "Jack William",
          tel: "0155444313",
          email: "jack@gmail.com",
          adresse: "75 rue besson ",
          ville: "paris",
          code_postale: "75546",
          commentaire: "pas de salade",
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
          email: "mary@gmail.com",
          adresse: "45 avenue boulevard",
          ville: "paris",
          code_postale: "75136",
          commentaire: "",
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
            <CommandeEnCoursProduct {...produit} key={produit.id} />
          ))}
          <h2 className='commande-en-cours__card-totale'>
            Totale <span>{calculTotal(commande.panier)} €</span>
          </h2>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: "black" }} />}
              aria-controls='panel1a-content'
              id='panel1a-header'>
              <h6>Information et Adresse de Livraison</h6>
            </AccordionSummary>
            <AccordionDetails>
              <div>
                {commande.commentaire && (
                  <p className='commande-en-cours__card-commentaire'>
                    Commentaire : {commande.commentaire}
                  </p>
                )}
                <p>Nom: {commande.nomClient}</p>
                <p>Email: {commande.email}</p>
                <p>Téléphone: {commande.tel}</p>
                <p>
                  Adresse: {commande.adresse} {commande.code_postale}{" "}
                  {commande.ville}
                </p>
              </div>
            </AccordionDetails>
          </Accordion>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "10px",
            }}>
            <Button variant='contained' color='primary'>
              Terminer
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommandeEnCours;
