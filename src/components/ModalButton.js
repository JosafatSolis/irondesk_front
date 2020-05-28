import React, {useState} from "react";
import Modal from 'react-uikit-modal';


export default class ModalButton extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      show: false
    };
  }

  animateIn (modal, dialog) {
    this.setState({show: true});
   
  }

  animateOut (modal, dialog) {
    this.setState({show: false});
  
  }

  render() {
    return (
    <Modal
      close
      show={this.state.show}
      trigger={{
        body: 'Open',
        animate: {
          'in': (modal, dialog) => this.animateIn(modal, dialog),
          'out': (modal, dialog) => this.animateOut(modal, dialog)
        }
      }}
    >
      <h2>Headline</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
        ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
        sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </Modal>
    )
  }
}

