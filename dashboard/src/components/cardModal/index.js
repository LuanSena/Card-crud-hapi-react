import React, { Component } from 'react';
import { Modal, Button, FormGroup, FormControl } from 'react-bootstrap'
import CardRepresentation from '../cardRepresentation'

class CardModal extends Component {
  constructor (props) {
    super(props)
    this.state = { 
      company: '',
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
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillReceiveProps (next){
    if (this.props.edit){
    const card = next.editingCard
    this.setState({
      ID: card.ID,
      company: card.company,
      expiration: card.expiration,
      cvv: card.cvv,
      number: card.number,
    })
   }
  }

  async handleChangeCvv (event) {
    await this.setState({ cvv: event.target.value })
  }

  async handleChangeExpiration (event) {
    await this.setState({ expiration: event.target.value })
  }

  async handleChangeName (event) {
    await this.setState({ company: event.target.value })
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
        company: '',
        expiration: '',
        cvv: '',
        number: '',
        showFront: true
      })
      this.props.close()
  }

  async handleSubmit () {
   const card = {
       company: this.state.company,
       number: this.state.number,
       expiration: this.state.expiration,
       cvv: this.state.cvv
   }
   if (this.props.edit){
       await this.props.saveUpdatedCard(this.state.ID, card)
   } 
   else {
       console.log(card)
     await this.props.insertCard(card)
   }
   this.handleClose()
  }

  render() {
    return (<Modal show={this.props.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cadastro do cartão</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <CardRepresentation
          showFront={this.state.showFront}
          name={this.state.company}
          number={this.state.number} 
          cvv={this.state.cvv}
          expiration={this.state.expiration}
        />
        <form className="form-inline">
        <FormGroup
          controlId="formCard"
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
            value={this.state.company}
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
            onClick={this.handleSubmit}
          >Enviar</Button>
          <FormControl.Feedback />
        </FormGroup>
      </form>
        </Modal.Body>
      </Modal>)
  
  }
}

export default CardModal;
