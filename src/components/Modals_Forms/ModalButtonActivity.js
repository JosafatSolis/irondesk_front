import React, { useState } from "react";
import Modal from "react-modal";
import FormikFormActivity from "./FormikFormActivity";
import AppContext from "../../AppContext";

const customStyles = {
  content: {
    top: "25%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    width: "40%",
    height: "30%",
    transform: "translate(-40%, -20%)",
    border: "solid 1px #f07e1c",
  },
};

function ModalButton(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <AppContext.Consumer>
      {(value) => {
        return (
          <section className="uk-margin-top uk-text-center ">
            <button
              uk-icon="icon: plus-circle"
              onClick={() => {
                setModalIsOpen(true);
              }}
            ></button>

            <Modal
              isOpen={modalIsOpen}
              onRequestClose={() => {
                setModalIsOpen(false);
              }}
              style={customStyles}
              ariaHideApp={false}
            >
              <div>
                <button
                  href="#"
                  onClick={() => {
                    setModalIsOpen(false);
                  }}
                  className="uk-button-muted uk-align-right"
                >
                  <span uk-icon="icon: close"> </span>
                </button>
                <br />
              </div>

              <br />
              <FormikFormActivity ticketId={props.ticketId} setModalIsOpen={setModalIsOpen} />
            </Modal>
          </section>
        );
      }}
    </AppContext.Consumer>
  );
}

export default ModalButton;
