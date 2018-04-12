import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'
import './style.css';

class CardTable extends Component {
  render() {
    return (<div>
          <BootstrapTable>
            <TableHeaderColumn dataField="id" isKey dataSort width="20" >#</TableHeaderColumn>
            <TableHeaderColumn dataField="company" dataSort width="20" >Nome</TableHeaderColumn>
            <TableHeaderColumn dataField="number" dataSort width="20" >Número</TableHeaderColumn>
            <TableHeaderColumn dataField="expiration" dataSort width="20" >Expiração</TableHeaderColumn>
            <TableHeaderColumn dataField="cvv" dataSort width="20" >CVV</TableHeaderColumn>
            <TableHeaderColumn dataField="actions" dataSort width="20" >Ações</TableHeaderColumn>
          </BootstrapTable>
      </div>)
  
  }
}

export default CardTable;
