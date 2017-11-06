import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

const propTypes = {
  todos: PropTypes.array,
  onToggle: PropTypes.func,
  onRemove: PropTypes.func,
  numOfTodo: PropTypes.number
};
const defaultProps = {
  todos: [],
  onToggle: () => {console.error("onToggle not defined");},
  onRemove: () => {console.error("onRemove not defined");},
  numOfTodo: -1
};
class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <div>
              <span>할 일이 {this.props.numOfTodo}개 남았습니다.</span>
            <div class="todoList">
              <ul>
                {
                  this.props.todos.map((data, i) => {
                    return (<Todo
                              text={data.text}
                              completed={data.completed}
                              key={i}
                              onToggle={() => this.props.onToggle(i)}
                              onRemove={() => this.props.onRemove(i)}
                            />);
                  })
                }
              </ul>
            </div>
            </div>
        );
    }
}

class Todo extends Component {
  render() {
    const completedStyle={
      textDecoration: "line-through",
      color: "gray"
    }
    return(
        <div class="todo z-depth-4">
          <div onClick={this.props.onToggle}>
            <li style={this.props.completed ? completedStyle : {} }>
              {this.props.text}
            </li>
          </div>
          <div>
            <a class="waves-effect waves-light btn" onClick={this.props.onRemove}>X</a>
          </div>
        </div>
    )
  }
}

TodoList.propTypes = propTypes;
TodoList.defaultProps = defaultProps;

export default TodoList;
