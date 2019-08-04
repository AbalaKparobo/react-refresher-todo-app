import React,{ Component } from 'react';

import PropTypes from 'prop-types';

import TodoItems from './TodoItem'

class Todos extends Component {
    render() {
        return this.props.todos.map(todo => ( 
            <TodoItems key={todo.id} todo={todo} checboxEvent={this.props.checboxEvent} delTodo={this.props.delTodo }/>
        ));
    }
}

// *** PROPTYPES ***
Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    checkboxEvent: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

export default Todos;
