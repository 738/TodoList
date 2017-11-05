import React, { Component, PropTypes } from 'react';
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
    }

    _handleAdd(data){
      this.setState({
        todos: update(this.state.todos,
          {
            $push: [data]
          }
        )
      });
      console.log(this.state.todos);
    }

    _handleRemove(){

    }

    render() {
        return(
            <div>
              <InputTodo onAdd={this._handleAdd}/>
              <TodoList todos={this.state.todos} />
            </div>
        );
    }
}

TodoApp.propTypes = propTypes;
TodoApp.defaultProps = defaultProps;

export default TodoApp;
