import React, { PureComponent} from 'react';

import AppHeader from '../AppHeader';
import SearchPanel from '../SearchPanel';
import TodoList from '../TodoList';
import ItemStatusFilter from '../ItemStatusFilter';
import ItemAddForm from '../ItemAddForm';

import './App.css';

export default class App extends PureComponent {

  maxId = 100;

  state = {
    todoData: [
    { label: 'Drink', important: false, id: 1},
    { label: 'Make some', important: true, id: 2},
    { label: 'Have a Lunch', important: false, id: 3},
    ]
  };

deleteItem = (id) => {
  this.setState(({ todoData }) => {
    const idx = todoData.findIndex((el) => el.id === id);
    const newArr = [...todoData.slice(0, idx), ...todoData.slice(idx+1)];
    return { todoData: newArr };
  });
}

addItem = (text) => {
  console.log(text);
  const newItem = {
    label: text,
    important: false,
    id: this.maxId++,
  };
  this.setState(({todoData}) => {
    return {
      todoData: [...todoData, newItem],
    };
  });
}

render() {
  return (
    <div className="todo-app">
      {/* {isLoggedIn ? null : loginBox } */}
      {/* <span>{(new Date()).toString()}</span> */}

      <AppHeader toDo={1} done={3} />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>

      <TodoList 
        todos={this.state.todoData} 
        onDeleted={ this.deleteItem }/>
      <ItemAddForm onItemAdded={this.addItem}/>
    </div>
  );
}
}
