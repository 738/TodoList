import React, { Component } from 'react';
import './App.css';
import TodoApp from './components/TodoApp';
import { createStore } from 'redux';
import todoApp from './reducers';
import * as actions from './actions';

const store = createStore(todoApp);

console.log(store.getState());
let unsubscribe = store.subscribe(() => {console.log(store.getState())});
store.dispatch(actions.addTodo("hello"));
store.dispatch(actions.addTodo("good bye"));
store.dispatch(actions.toggleTodo(0));
unsubscribe();
store.dispatch(actions.removeTodoCompleted());


class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoApp />
      </div>
    );
  }
}

export default App;
