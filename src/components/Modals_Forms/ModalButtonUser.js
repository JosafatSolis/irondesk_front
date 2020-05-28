import React, {useState} from "react";
import Modal from "react-modal"
import FormikFormUser from "./FormikFormUser";

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
      <div className="uk-margin-top uk-text-center ">

        <button 
          onClick= { ()=>{setModalIsOpen(true)}  }
          className="uk-button uk-button-primary"
        > 
            New "COMPONENT"
        </button>

          <Modal 
            isOpen={modalIsOpen}
            onRequestClose={()=>{setModalIsOpen(false)}}
            style={customStyles}>

          <div>
            <a 
              href="#"
              onClick= {()=>{setModalIsOpen(false)}  }
              className="uk-button uk-button-muted uk-align-right">
              <span uk-icon="icon: close"> </span>     
            </a> 
            <br/>
          </div>
            
            <br/>
              <FormikFormUser/>

             
          </Modal>
      </div>
    );
  }


export default ModalButton;
