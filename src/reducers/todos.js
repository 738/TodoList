import * as types from '../actions/ActionTypes';
import update from 'react-addons-update';

const initialState = {
  todos: [],
  numOfTodo: 0
};

export default function todos(state = initialState, action){
  switch(action.type){
    case types.ADD_TODO:
      //랜덤 색깔 부여
      const color1 = Math.floor(Math.random()*55+200);
      const color2 = Math.floor(Math.random()*55+200);
      const color3 = Math.floor(Math.random()*55+200);
      const rgbcolor = `rgb(${color1},${color2},${color3})`
      return {
        ...state,
        todos: update(state.todos,
          {
            $push: [{
              text: action.text,
              completed: false,
              color: rgbcolor
            }]
          }
        ),
        numOfTodo: state.numOfTodo + 1
      }
    case types.TOGGLE_TODO:
      let tmp = state.todos[action.index].completed;
      return {
        ...state,
        todos: update(state.todos,
        {
          [action.index]:{
            completed:{
              $set: !tmp
            }
          }
        }),
        numOfTodo: tmp ? state.numOfTodo + 1 : state.numOfTodo - 1
      }
    case types.REMOVE_TODO:
      let tmp2 = state.todos[action.index].completed;
      return {
        ...state,
        todos: update(state.todos,
        {
          $splice: [[action.index, 1]]
        }),
        numOfTodo: tmp2 ? state.numOfTodo : state.numOfTodo - 1
      }
    case types.REMOVE_TODO_COMPLETED:
      let arr = [];
      let finalArr = [];
      for(let i=0; i<state.todos.length;i++){
        if(state.todos[i].completed){
          arr.push(i);
        }
      }
      if(arr.length === 0){
        alert("완료된 일이 없습니다.");
        return;
      }
      for(let i=0; i<arr.length;i++){
        finalArr.push([arr[i]-i,1]);
      }
      return {
        ...state,
        todos: update(state.todos,
        {
          $splice: finalArr
        })
      }
    default:
      return state;
  }
}
