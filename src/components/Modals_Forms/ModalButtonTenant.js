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
    <section className=" uk-text-center uk-margin-top">

        <button 
          style={{backgroundColor: "#E5E4E2", color:"black" }}
          className="uk-button uk-button-primary"
          onClick={() => {setModalIsOpen(true);}}>
            NUEVO TENANT [+]
        </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => {setModalIsOpen(false);}}
        style={customStyles}>

        <div>
            <button
              className="uk-button-muted uk-align-right"
              onClick={() => {setModalIsOpen(false);}}>
                <span   uk-icon="icon: close">    </span>
            </button>   
            <br/>   
        </div>

        <br/>
        <FormikFormTenant />

      </Modal>
    </section>
  );
}

export default ModalButton;
