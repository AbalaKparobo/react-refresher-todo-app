import React,{ Component } from 'react';

import PropTypes from 'prop-types';

class TodoItem extends Component {
    getStyle() {
        return {
            padding: '5px 10px',
            backgroundColor: '#f9f9f9',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }
    render() {
        const { id, title } = this.props.todo;
        return <p style={this.getStyle()}>
            <input type="checkbox" onChange={this.props.checboxEvent.bind(this, id)}/>{' '}{' '}
            {title}
            <button style={delBtn} onClick={this.props.delTodo.bind(this, id)}>X</button>
        </p>
    }
}

const delBtn = {
    background: '#ff0000',
    color: '#fff',
    cursor: 'pointer',
    borderRadius: '40%',
    float: 'right',
    padding: '5px 8px',
    outline: 'none',
    border: 'none'
}
// *** PROPTYPES ***
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    checkboxEvent: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}
export default TodoItem;
