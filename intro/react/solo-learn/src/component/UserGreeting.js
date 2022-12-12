import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         
        isLoogedIn: false
      }
    }
    

  render() {


// 4.


// if the isloogedIn true and message will show
return this.state.isLoogedIn && <div>Welcome User</div>



        // 3. with ternary operator

        return this.state.isLoogedIn ?
        (<div>Welcome User</div>) :
        (<div>Welcome Guest</div>)




        // 2. with element variable
    // let message    // store the message

    // if(this.state.isLoogedIn){
    //     message = <div>Welcome User</div>
    // } else {
    //     message = <div>Welcome Guest</div>
    // }

    // return the message
    // return <div>{message}</div>

 

        // 1. with create class component 
    // if(this.state.isLoogedIn){
    //     return <div>Welcome User</div>
    // } else {
    //     return <div>Welcome Guest</div>
    // }
    // return (
    //   <div>
    //     <div>Welcome User</div>
    //     <div>Welcome Guest  </div>
    //   </div>
    // )
  }
}

export default UserGreeting
