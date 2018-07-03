import React, { Component } from 'react'

class HomePage extends Component {
    constructor (props){
        super(props);

        this.redirectToAbout = this.redirectToAbout.bind(this)
    }

    redirectToAbout () {
        this.props.history.push('/about');
    }

    render () {
        return (
            <div>
                <h1> I am the home page, dude! ;)</h1>
                <button onClick={this.redirectToAbout}> Go to about page.</button>
            </div>
        )
    }
} 

export default HomePage;
