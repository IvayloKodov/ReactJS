import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
    render () {
        let id = 3;

        return (
            <div>
                <Link to='/home'> Home </Link>
                <Link to='/about'> About </Link>
                <Link to='/contacts'> Contacts </Link>
                <Link to={'/params/' + id}> Params </Link>
            </div>
        )
    }
}

export default Header;