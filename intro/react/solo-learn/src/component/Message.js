import React, {Component} from 'react'

export default class Message extends Component{
    constructor(){
        super()
        // create state
        this.state = {
            message: 'Welcome'
        }
    }

// the method to change the text
// in this.state.message
    changeMessage(){
        // we can change the element with using the setState
        this.setState({
            message: 'Thankyou for subscribing'
        })
    }

    render() {
        return (
            <>
            <h1>{this.state.message}</h1>
            {/* when button clicking call the function / method */}
        <button onClick={ () => this.changeMessage() }>Subscribe</button>
        </>
        )
    }
} 