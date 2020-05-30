import React, { useState } from "react";
import Modal from "react-modal";
import FormikFormTenant from "./FormikFormTenant";

const customStyles = {
  content: {
    top: "25%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    width: "30%",
    height: "45%",
    transform: "translate(-40%, -20%)",
    border: "solid 1px #f07e1c",
  },
};

function ModalButton() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <section
      className="uk-margin-top uk-text-center">
      {/*BOTON QUE ABRE EL MODAL */}

      <button
        style={{ backgroundColor: "#E5E4E2" }}
        className="uk-button "
        onClick={() => { setModalIsOpen(true); }}>
        Nuevo Cliente [+]
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => { setModalIsOpen(false); }}
        style={customStyles}>

        <div>
          <button
            href="#"
            onClick={() => {
              setModalIsOpen(false);
            }}
            className="uk-button-muted uk-align-right">
            <span uk-icon="icon: close"> </span>
          </button>

          <br />
        </div>

        <br/>
        <FormikFormTenant />

      </Modal>
    </section>
  );
}

export default ModalButton;
