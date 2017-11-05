import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InputTodo from './components/InputTodo';
import TodoList from './components/TodoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <InputTodo />
        <TodoList />
      </div>
    );
  }
}

export default App;
