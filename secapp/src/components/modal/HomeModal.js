import React, { Component } from 'react'
import Modal from 'react-modal';
Modal.setAppElement('body')

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
 const HomeModal = (props)=> {
  console.log(props)

    return (
      <Modal
          isOpen={props.modalIsOpen}
          onAfterOpen={props.afterOpenModal}
          onRequestClose={props.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
 
          <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
          <button onClick={props.closeModal}>close</button>
          <div style={{width:'800px',height:'120px'}}>I am a modal</div>
         
        </Modal>
    )
  
}
export default HomeModal;
