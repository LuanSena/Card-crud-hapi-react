import React, { Component } from 'react';
import { Modal, Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap'

class CardModal extends Component {
  render() {
    return (<Modal show={this.props.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cadastro do cartão</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form className="form-inline">
        <FormGroup
          controlId="formBasicText"
          validationState={() => console.log("this.getValidationState(")}
        >
          <FormControl
            style={{width: '50%', borderRadius: 0}}
            type="text"
            // value={this.state.value}
            placeholder="Número do cartão"
            // onChange={this.handleChange}
          />
          <FormControl
            style={{width: '50%', borderRadius: 0}}
            type="text"
            // value={this.state.value}
            placeholder="Nome do portador"
            // onChange={this.handleChange}
          />
          <FormControl
            style={{width: '30%', borderRadius: 0}}
            type="text"
            // value={this.state.value}
            placeholder="Data de vencimento"
            // onChange={this.handleChange}
          />
          <FormControl
            style={{width: '30%', borderRadius: 0}}
            type="text"
            // value={this.state.value}
            placeholder="CVV"
            // onChange={this.handleChange}
          />
          <Button
            style={{width: '40%', borderRadius: 0}}
            bsStyle="primary"
            className="form-control"
          >Enviar</Button>
          <FormControl.Feedback />
        </FormGroup>
      </form>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button onClick={this.handleClose}>Close</Button>
        </Modal.Footer> */}
      </Modal>)
  
  }
}

export default CardModal;
