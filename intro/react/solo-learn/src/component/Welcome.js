
// import react anda component from library
import React, {Component} from 'react'


class Welcome extends Component {
    render(){

// exp destructuring in class
const {name, heroName} = this.props


        // calling props in class within this
        // return <h1>Welcome {this.props.name} a.k.a {this.props.heroName}</h1>

        // after destructuring
        return <h1>Welcome {name} a.k.a {heroName}</h1>
    }
}

export default Welcome
