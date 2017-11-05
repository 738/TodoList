import React, { Component, PropTypes } from 'react';

const propTypes = {

};
const defaultProps = {

};
class TodoList extends Component {
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
    }

    render() {
        return(
            <ul>
              {
                this.state.todos.map((data, i) => {
                  return (<Todo text={data.text} completed={data.completed} key={i}/>);
                })
              }
            </ul>
        );
    }
}

class Todo extends Component {
  render() {
    return(
        <li style={{textDecoration: this.props.completed ? "line-through" : "none"}}>{this.props.text}</li>
    )
  }
}

TodoList.propTypes = propTypes;
TodoList.defaultProps = defaultProps;

export default TodoList;
