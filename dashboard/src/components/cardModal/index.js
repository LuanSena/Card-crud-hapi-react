import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap'

class CardModal extends Component {
  render() {
    return (<Modal show={this.props.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Text in a modal</h4>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>)
  
  }
}

export default CardModal;
