import React, { Component } from 'react';
import { Grid, Button, Glyphicon } from 'react-bootstrap'
import CardTable from '../cardTable'
import CardModal from '../cardModal'

class Card extends Component {
  render() {
    return (<div>
        <Grid>
          <h1>Meus cartões</h1>
          
          <Button bsStyle="primary" onClick={this.handleShowModal} style={{ marginBottom: '5px' }}>
              <Glyphicon glyph="plus" /> Novo cartão
          </Button>
          
          <CardModal show={true}/>
          
          <CardTable />
        </Grid>
      </div>)
  
  }
}

export default Card;
