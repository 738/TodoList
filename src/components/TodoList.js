import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

const propTypes = {
  todos: PropTypes.array,
  onToggle: PropTypes.func,
  onRemove: PropTypes.func,
  onRemoveCompleted: PropTypes.func,
  numOfTodo: PropTypes.number
};
const defaultProps = {
  todos: [],
  onToggle: () => {console.error("onToggle not defined");},
  onRemove: () => {console.error("onRemove not defined");},
  onRemoveCompleted: () => {console.error("onRemoveCompleted not defined");},
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
              <span>할 일이 {this.props.numOfTodo}개 남았습니다.</span><br></br>
              <a className="waves-effect waves-light btn" onClick={this.props.onRemoveCompleted}>완료된 일 모두 삭제</a>
              <div className="todoList">
                <ul>
                  {
                    this.props.todos.map((data, i) => {
                      return (<Todo
                                text={data.text}
                                completed={data.completed}
                                color={data.color}
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
    const completedStyle = {
      textDecoration: "line-through",
      color: "gray"
    }
    return(
        <div className="todo z-depth-4" style={{backgroundColor: this.props.color}}>
          <div onClick={this.props.onToggle}>
            <li style={this.props.completed ? completedStyle : {} }>
              {this.props.text}
            </li>
          </div>
          <div>
            <a className="waves-effect waves-light btn" onClick={this.props.onRemove}>X</a>
          </div>
        </div>
    )
  }
}

TodoList.propTypes = propTypes;
TodoList.defaultProps = defaultProps;

export default TodoList;
