import React from 'react';

import PropTypes from 'prop-types';

class AddTodo extends React.Component {
    state= {
        title: ''
    }

    updateInput = (e) => {
        this.setState({ [e.target.name]: e.target.value})
    }

    submitForm = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ''});
    }

    render() {
        return (
           <form onSubmit={this.submitForm} style={{display: 'flex'}}>
               <input type="text" style={{flex: '10', padding: '5px'}} name="title" placeholder="Add Todo..." value={this.state.title} onChange={this.updateInput}/>
               <input type="submit" className="btn" style={{flex: '1'}} value="Add Todo" />
           </form>
        )
    }
}

// *** PROPTYPES ***
AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
}

export default AddTodo;