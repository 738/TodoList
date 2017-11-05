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
          selectedKey: -1,
          todos: [
            {
              text: "study javascript",
              completed: false
            },
            {
              text: "study C",
              completed: true
            }
          ]
        }
        this._handleAdd = this._handleAdd.bind(this);
        this._handleRemove = this._handleRemove.bind(this);
        this._handleToggle = this._handleToggle.bind(this);
    }

    _handleAdd(data){
      this.setState({
        todos: update(this.state.todos,
          {
            $push: [data]
          }
        )
      });
    }

    _handleRemove(){

    }

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
        })
      });
    }

    render() {
        return(
            <div>
              <InputTodo onAdd={this._handleAdd} />
              <TodoList todos={this.state.todos}
                        onToggle={this._handleToggle}/>
            </div>
        );
    }
}

TodoApp.propTypes = propTypes;
TodoApp.defaultProps = defaultProps;

export default TodoApp;
