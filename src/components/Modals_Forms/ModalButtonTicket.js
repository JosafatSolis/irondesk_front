import React, { useState } from "react";
import Modal from "react-modal";
import FormikFormTicket from "./FormikFormTicket";
import AppContext from "../../AppContext";

const customStyles = {
  content: {
    top: "25%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    width: "40%",
    height: "50%",
    transform: "translate(-40%, -20%)",
    border: "solid 1px #f07e1c",
  },
};

function ModalButton() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <AppContext.Consumer>
      {(value) => {
        return (
          <div className="uk-margin-top uk-text-center ">
            <button
              style={{backgroundColor: "#E5E4E2"}}
              onClick={() => {
                setModalIsOpen(true);
              }}
              className="uk-button uk-button-primary"
            >
              NUEVO TICKET [+]
            </button>

            <Modal
              isOpen={modalIsOpen}
              onRequestClose={() => {
                setModalIsOpen(false);
              }}
              style={customStyles}
            >
              <div>
                <a
                  href="#"
                  onClick={() => {
                    setModalIsOpen(false);
                  }}
                  className="uk-button uk-button-muted uk-align-right"
                >
                  <span uk-icon="icon: close"> </span>
                </a>
                <br />
              </div>

              <br />
              <FormikFormTicket />
            </Modal>
          </div>
        );
      }}
    </AppContext.Consumer>
  );
}

export default ModalButton;
