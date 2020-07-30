import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from '../AppHeader';
import SearchPanel from '../SearchPanel';
import TodoList from '../TodoList';
import ItemStatusFilter from '../ItemStatusFilter';

import './App.css';


// const isLoggedIn = false;
// const loginBox = <span>Log in please</span>;
const App = () => {
  const todoData = [
    { label: 'Drink', important: false, id: 1},
    { label: 'Make some', important: true, id: 2},
    { label: 'Have a Lunch', important: false, id: 3},
  ];

  return (
    <div className="todo-app">
      {/* {isLoggedIn ? null : loginBox } */}
      {/* <span>{(new Date()).toString()}</span> */}

      <AppHeader toDo={1} done={3} />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>

      <TodoList todos={todoData} />
    </div>
  );
};

export default App;
