import React, { Component } from 'react';
import { Glyphicon } from 'react-bootstrap'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'

class CardTable extends Component {
  constructor (props) {
    super(props)
    this.state = { }
    this.cellButton = this.cellButton.bind(this)
    this.deleteCard = this.deleteCard.bind(this)
    this.updateCard = this.updateCard.bind(this)
  }
  cellButton (cell, row, enumObject, rowIndex) {
    const actions = (
    <div>
      <a onClick={() => this.updateCard(cell, row, rowIndex)} style={{marginRight: '10px'}}>
      <Glyphicon glyph="pencil" />
    </a>
    <a onClick={() => this.deleteCard(cell, row, rowIndex)}>
      <Glyphicon glyph="remove" />
    </a>
    </div>)
    return actions
  }

  updateCard (cell, row, rowIndex) {
    this.props.updateCard(row)
  }

  deleteCard (cell, row, rowIndex) {
    this.props.deleteCard(row.ID)
  }

  render() {
    return (
    <div>
      <BootstrapTable data={this.props.cards}>
        <TableHeaderColumn dataField="ID" isKey dataSort width="20" >#</TableHeaderColumn>
        <TableHeaderColumn dataField="company" width="100" >Nome</TableHeaderColumn>
        <TableHeaderColumn dataField="number" width="20" >Número</TableHeaderColumn>
        <TableHeaderColumn dataField="expiration" width="20" >Expiração</TableHeaderColumn>
        <TableHeaderColumn dataField="cvv" width="20" >CVV</TableHeaderColumn>
        <TableHeaderColumn dataField="actions" dataFormat={this.cellButton} width="15" >Ações</TableHeaderColumn>
      </BootstrapTable>
    </div>)
  
  }
}

export default CardTable;
