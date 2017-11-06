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
          todos: [

          ]
        }
        this._handleAdd = this._handleAdd.bind(this);
        this._handleRemove = this._handleRemove.bind(this);
        this._handleToggle = this._handleToggle.bind(this);
    }

    //add the todo item
    _handleAdd(data){
      this.setState({
        todos: update(this.state.todos,
          {
            $push: [data]
          }
        ),
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
        numOfTodo: tmp ? this.state.numOfTodo + 1 : this.state.numOfTodo - 1
      });
    }

    render() {
        return(
            <div>
              <InputTodo onAdd={this._handleAdd} />
              <TodoList todos={this.state.todos}
                        onToggle={this._handleToggle}
                        onRemove={this._handleRemove}
                        numOfTodo={this.state.numOfTodo}/>
            </div>
        );
    }
}

TodoApp.propTypes = propTypes;
TodoApp.defaultProps = defaultProps;

export default TodoApp;
