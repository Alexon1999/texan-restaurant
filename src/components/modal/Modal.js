import { Modal, Button } from "react-bootstrap";

const ModalBootsrap = ({ children, show, handleClose, title, img }) => {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <div>
              <h2>{title}</h2>
              <img src={img} alt='' />
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        <Modal.Footer>
          {/* <Button variant='primary' onClick={handleClose}>
            Fermer
          </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalBootsrap;