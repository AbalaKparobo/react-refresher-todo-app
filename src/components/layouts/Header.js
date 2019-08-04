import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header style={headerStyle}>
            <h3>TodoList</h3>
            <Link to='/' style={linkStyle} >Home  </Link>| <Link to='/about' style={linkStyle}>  About</Link>
        </header>
    )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '5px 10px'
}

const linkStyle = {
    color: '#fff',
    textDecoraion: 'none'
}

export default Header;