import * as types from './ActionTypes';

export function addTodo(text){
  return {
    type: types.ADD_TODO,
    text
  }
}

export function toggleTodo(index){
  return {
    type: types.TOGGLE_TODO,
    index
  }
}

export function removeTodo(index){
  return {
    type: types.REMOVE_TODO,
    index
  }
}

export function removeTodoCompleted(){
  return {
    type: types.REMOVE_TODO_COMPLETED
  }
}
