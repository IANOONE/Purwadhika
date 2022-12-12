import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message: 'Hello'
      }


// 3. binding in class constructor
      this.clickHandler =this.clickHandler.bind(this)
    }
     
    clickHandler(){
        this.setState({
            message : 'Clicked'
        })
        console.log(this)
    }


    // 4. 
    // clickHandler = () => {
    //     this.setState({
    //         message: "Clicked !"
    //     })
    // }


  render() {
    return (
      <div>
            <div>{this.state.message}</div>


            {/* 1. using binding method */}
            {/* <button onClick={this.clickHandler.bind(this)}>Click !</button> */}
            
            {/* 2. using arrow function to render the method */}
            {/* <button onClick={() => this.clickHandler()}>Click !</button> */}
            <button onClick={this.clickHandler}>Click !</button>
      </div>
    )
  }
}

export default EventBind
