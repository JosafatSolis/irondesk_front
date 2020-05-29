import React, {useState} from "react";
import Modal from "react-modal"
import FormikFormTicket from "./FormikFormTicket"

const customStyles = {
  content: {
    top: '25%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    width: "40%",
    height: '50%',
    transform: 'translate(-40%, -20%)',
    border: 'solid 1px #f07e1c'
  },
};

function ModalButton () {
    const [modalIsOpen, setModalIsOpen] = useState(false)
  
    return (
      <section className="uk-margin-top uk-text-center ">

        <button 
          style={{backgroundColor: "#E5E4E2", color:"black" }}
          className="uk-button uk-button-primary"
          onClick={() => {setModalIsOpen(true);}}>
            NUEVO TICKET [+]
        </button>

          <Modal 
            isOpen={modalIsOpen}
            onRequestClose={()=>{setModalIsOpen(false)}}
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
            <FormikFormTicket/>

          </Modal>
      </section>
    );
  }


export default ModalButton;
