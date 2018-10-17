import React, { Component } from 'react';
import InputTodo from './InputTodo';
import TodoList from './TodoList';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { bindActionCreators } from 'redux'

class TodoApp extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return(
            <div>
              <InputTodo onAdd={this.props.addTodo} />
              <TodoList todos={this.props.todos}
                        onToggle={this.props.toggleTodo}
                        onRemove={this.props.removeTodo}
                        onRemoveCompleted={this.props.removeTodoCompleted}
                        numOfTodo={this.props.numOfTodo}/>
            </div>
        );
    }
}

TodoApp.propTypes = propTypes;
TodoApp.defaultProps = defaultProps;

const mapStateToProps = (state) => {
  return {
    todos: state.todos.todos,
    numOfTodo: state.todos.numOfTodo
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
  /*return {
    handleAdd: (text) => { dispatch(actions.addTodo(text)) },
    handleToggle: (index) => { dispatch(actions.toggleTodo(index)) },
    handleRemove: (index) => { dispatch(actions.removeTodo(index)) },
    handleRemoveCompleted: () => { dispatch(actions.removeTodoCompleted()) }
  };*/
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
