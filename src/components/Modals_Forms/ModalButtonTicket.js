import React, {useState} from "react";
import Modal from "react-modal"
import FormikFormTicket from "./FormikFormTicket"


function ModalButton () {
    const [modalIsOpen, setModalIsOpen] = useState(false)
  
    return (
      <div className="uk-grid uk-text-center ">

        <button
          onClick= { ()=>{setModalIsOpen(true)}  }
          className="uk-button uk-button-primary"
        > 
            New "COMPONENT"
        </button>

          <Modal 
            isOpen={modalIsOpen}
            onRequestClose={()=>{setModalIsOpen(false)}}
            style={{
              overlay: {backgroundColor: "grey"},
              content: {color:"blue"},
                  }}
          >
          
                  <FormikFormTicket/>
              {/*INSERTAR AQUI CONTENIDO DEL MODAL  */}

                <div>
                  <button 
                    onClick= {()=>{setModalIsOpen(false)}  }
                    className="uk-button uk-button-primary"
                  >   
                    CLOSE
                  </button>
                </div>
        

          </Modal>
      </div>
    );
  }


export default ModalButton;
