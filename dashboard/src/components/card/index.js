import React, { Component } from 'react';
import { Grid, Button, Glyphicon } from 'react-bootstrap'
import CardTable from '../cardTable'
import CardModal from '../cardModal'
import WebService from '../../services/webService';

class Card extends Component {
    constructor (props) {
        super(props)
        this.state = {
          showModal: false,
          editingCard: {},
          editMode: false,
          cards: []
        }
        this.webService = new WebService()
        this.handleShowModal = this.handleShowModal.bind(this)
        this.handleDeleteCard = this.handleDeleteCard.bind(this)
        this.handleInsertCard = this.handleInsertCard.bind(this)
        this.handleUpdateCard = this.handleUpdateCard.bind(this)
        this.handleSaveUpdatedCard = this.handleSaveUpdatedCard.bind(this)
      }
  async componentWillMount () {
    const result = await this.webService.getCards()
    await this.setState({cards: result})
  }

  async handleDeleteCard (cardId) {
    // await this.webService.deleteCard(cardId)
    const result = this.state.cards.filter(card => card.ID !== cardId)
    this.setState({cards: result})
  }

  async handleInsertCard (card) {
    // const result = await this.webService.postCard(card)
    const newCards = this.state.cards
    newCards.push(card)
    this.setState({cards: newCards})
  }

  async handleUpdateCard (card) {
    await this.setState({editingCard: card, editMode: true})
    await this.handleShowModal()
  }

  async handleShowModal () {
      await this.setState({showModal: !this.state.showModal})
  }

  async handleSaveUpdatedCard (cardId, card) {
    await this.webService.patchCard(cardId, card)
    this.setState({editMode: false})
  }


  render() {
    return (<div>
        <Grid>
          <h1>Meus cartões</h1>
          
          <Button bsStyle="primary" onClick={this.handleShowModal} style={{ marginBottom: '5px' }}>
              <Glyphicon glyph="plus" /> Novo cartão
          </Button>
          
          <CardModal
            edit={this.state.editMode}
            editingCard={this.state.editingCard}
            saveUpdatedCard={this.handleSaveUpdatedCard}
            show={this.state.showModal}
            close={this.handleShowModal}
            insertCard={this.handleInsertCard}
          />
          
          <CardTable 
            cards={this.state.cards}
            deleteCard={this.handleDeleteCard}
            updateCard={this.handleUpdateCard} />
        </Grid>
      </div>)
  
  }
}

export default Card;
