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

    //why not remove??????
    _handleRemove(index){
      this.setState({
        todos: update(this.state.todos,
          {
            $splice:[[index, 1]]
          }
        )
      });
    }

    //toggle the completed value (true, false)
    _handleToggle(index){
      this.setState({
        todos: update(
          this.state.todos,
          {
            [index]:{
              completed: {
                $set: !this.state.todos[index].completed
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
                        onToggle={this._handleToggle}
                        onRemove={this._handleRemove}/>
            </div>
        );
    }
}

TodoApp.propTypes = propTypes;
TodoApp.defaultProps = defaultProps;

export default TodoApp;
