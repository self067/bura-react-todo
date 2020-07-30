import React, { PureComponent } from 'react';
import './TodoListItem.css';

export default class TodoListItem extends PureComponent {

  constructor() {
    super();
    this.onLabelClick = () => {
      // console.log(`${this.props.label}`);
      this.setState(({done}) => {
        return {
          done: !done,
        };
      });
    };
    this.state = {
      done: false,
      important: false,
    };
  }

  onBasketClick = () => {
    this.setState((state) => {
      return {
        done: !state.done,
      };
    });
  };

  onImportantClick = () => {
    this.setState((state) => {
      return {
        important: !state.important,
      };
    });
  };

  render() {
    const {label, onDeleted} = this.props;
    const {done, important = false } = this.state;
    let classNames = 'todo-list-item';
    if (done) classNames += ' done';
    if (important) classNames += ' important';

    // const style = {
    //   color: important ? 'steelblue' : 'black',
    //   fontWeight: important ? 'bold' : 'normal',
    // };




    return (
      <span className={classNames}>
        <span
          className="todo-list-item-label"
          onClick={ this.onLabelClick} >
          {label}
        </span>

        <button
          type="button"
          className="btn btn-outline-success btn-sm float-right"
          onClick={this.onImportantClick}
        >
          <i className="fa fa-exclamation" />
        </button>

        <button 
          type="button"
          className="btn btn-outline-danger btn-sm float-right"
          onClick={onDeleted}
        >
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  }
}
