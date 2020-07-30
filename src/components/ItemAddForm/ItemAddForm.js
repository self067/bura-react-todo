import React, { PureComponent } from 'react';
import './ItemAddForm.css';

export default class ItemAddForm extends PureComponent {
  render() {
    return (
      <div className="item-add-form">
        <button 
          className="btn btn-outline-secondary"
          onClick={() => this.props.onItemAdded('HELLO')}>
          Add Item
        </button>
      </div>
    );
  }
}
