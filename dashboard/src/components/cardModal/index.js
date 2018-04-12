import React, { Component } from 'react';
import { Modal, Button, FormGroup, FormControl } from 'react-bootstrap'
import CardRepresentation from '../cardRepresentation'

class CardModal extends Component {
  constructor (props) {
    super(props)
    this.state = { 
      name: '',
      expiration: '',
      cvv: '',
      number: '',
      showFront: true
    }
    this.handleChangeCvv = this.handleChangeCvv.bind(this)
    this.handleChangeExpiration = this.handleChangeExpiration.bind(this)
    this.handleChangeName = this.handleChangeName.bind(this)
    this.handleChangeNumber = this.handleChangeNumber.bind(this)
    this.handleFocusCvv = this.handleFocusCvv.bind(this)
    this.handleBlurCvv = this.handleBlurCvv.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  async handleChangeCvv (event) {
    await this.setState({ cvv: event.target.value })
  }

  async handleChangeExpiration (event) {
    await this.setState({ expiration: event.target.value })
  }

  async handleChangeName (event) {
    await this.setState({ name: event.target.value })
  }

  async handleChangeNumber (event) {
    await this.setState({ number: event.target.value })
  }

  async handleFocusCvv () {
    await this.setState({ showFront: false })
  }

  async handleBlurCvv () {
    await this.setState({ showFront: true })
  }

  async handleClose () {
      this.setState({ 
        name: '',
        expiration: '',
        cvv: '',
        number: '',
        showFront: true
      })
      this.props.close()
  }

  render() {
    return (<Modal show={this.props.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cadastro do cartão</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <CardRepresentation
          showFront={this.state.showFront}
          name={this.state.name}
          number={this.state.number} 
          cvv={this.state.cvv}
          expiration={this.state.expiration}
        />
        <form className="form-inline">
        <FormGroup
          controlId="formBasicText"
        >
          <FormControl
            style={{width: '40%', borderRadius: 0}}
            type="text"
            value={this.state.number}
            placeholder="Número do cartão"
            onChange={this.handleChangeNumber}
          />
          <FormControl
            style={{width: '40%', borderRadius: 0}}
            type="text"
            value={this.state.name}
            placeholder="Nome do portador"
            onChange={this.handleChangeName}
          />
          <FormControl
            style={{width: '20%', borderRadius: 0}}
            type="text"
            value={this.state.expiration}
            placeholder="Data de vencimento"
            onChange={this.handleChangeExpiration}
          />
          <FormControl
            style={{width: '20%', borderRadius: 0}}
            type="text"
            value={this.state.cvv}
            onFocus={this.handleFocusCvv}
            onBlur={this.handleBlurCvv}
            placeholder="CVV"
            onChange={this.handleChangeCvv}
          />
          <Button
            style={{width: '30%', borderRadius: 0}}
            bsStyle="primary"
            className="form-control"
          >Enviar</Button>
          <FormControl.Feedback />
        </FormGroup>
      </form>
        </Modal.Body>
      </Modal>)
  
  }
}

export default CardModal;
