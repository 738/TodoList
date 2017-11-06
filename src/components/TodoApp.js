import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import InputTodo from './InputTodo';
import TodoList from './TodoList';
import update from 'react-addons-update';

const propTypes = {

}
const defaultProps = {

};
class TodoApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
          numOfTodo: 0,
          todos: []
        }
        this._handleAdd = this._handleAdd.bind(this);
        this._handleRemove = this._handleRemove.bind(this);
        this._handleToggle = this._handleToggle.bind(this);
        this._handleRemoveCompleted = this._handleRemoveCompleted.bind(this);
    }

    //add the todo item
    _handleAdd(data){
      this.setState({
        todos: update(this.state.todos,
          {
            $push: [data]
          }
        ),
        //남은 일의 개수 증가
        numOfTodo: this.state.numOfTodo + 1
      });
    }

    //remove the todo item
    _handleRemove(index){
      let tmp = this.state.todos[index].completed;
      this.setState({
        todos: update(this.state.todos,
          {
            $splice: [[index, 1]]
          }
        ),
        //남은 일의 개수 조정
        numOfTodo: tmp ? this.state.numOfTodo : this.state.numOfTodo - 1
      });
    }

    //toggle the completed value (true, false)
    _handleToggle(index){
      let tmp = this.state.todos[index].completed;
      this.setState({
        todos: update(
          this.state.todos,
            {
              [index]:{
                completed: {
                  $set: !tmp
                }
              }
            }
        ),
        //남은 일의 개수를 토글에 따라 증가하고 감소한다.
        numOfTodo: tmp ? this.state.numOfTodo + 1 : this.state.numOfTodo - 1
      });
    }

    //완료된 일 모두 삭제
    _handleRemoveCompleted(){
      let arr = [];
      let finalArr = [];
      for(let i=0; i<this.state.todos.length;i++){
        if(this.state.todos[i].completed){
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
      this.setState({
        todos: update(
          this.state.todos,
          {
            $splice: finalArr
          }
        )
      });
    }

    render() {
        return(
            <div>
              <InputTodo onAdd={this._handleAdd} />
              <TodoList todos={this.state.todos}
                        onToggle={this._handleToggle}
                        onRemove={this._handleRemove}
                        onRemoveCompleted={this._handleRemoveCompleted}
                        numOfTodo={this.state.numOfTodo}/>
            </div>
        );
    }
}

TodoApp.propTypes = propTypes;
TodoApp.defaultProps = defaultProps;

export default TodoApp;
