import React, {useState} from "react";
import Modal from "react-modal"
import FormikFormTenant from "./FormikFormTenant";

const customStyles = {
  content: {
    top: '25%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    width: "30%",
    height: '45%',
    transform: 'translate(-40%, -20%)',
    border: 'solid 1px #f07e1c'
  
  },
};

function ModalButton () {
    const [modalIsOpen, setModalIsOpen] = useState(false)
  
    return (
      <div className=" uk-text-center">

        <button 
          onClick= { ()=>{setModalIsOpen(true)}  }
          className="uk-button uk-button-primary"> 
            New "COMPONENT"
        </button>

          <Modal 
            isOpen={modalIsOpen}
            onRequestClose={()=>{setModalIsOpen(false)}}
            style={customStyles}>

                  <FormikFormTenant/>    
                  <button 
                    onClick= {()=>{setModalIsOpen(false)}  }
                    className="uk-button uk-button-primary uk-align-left">   
                    CLOSE
                  </button> 

          </Modal>
      </div>
    );
  }

export default ModalButton;
