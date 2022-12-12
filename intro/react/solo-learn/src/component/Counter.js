import React, { Component } from 'react'

// setState

// always make use of setState and never modify directly
// code has to be execute after the state has been update ? Place that code in the callback function which is the second argument to the setState method
// when you have to update state based on the previous state value, pass in a function as an argument instead of the regular object




class Counter extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
count: 0
      }
    }
    
increment(){
// modify the value with usign setState
// this.setState({
//     count: this.state.count + 1
// },
// use the callback 
// if you want to execute some code after the state has been change
// () => {
//     console.log('Callback value', this.state.count);
// })
// do not place that code right after the said state


// take the previous State
this.setState((prevState, props)=>(
    // the different is we're not using the current state
    // instead
  {  count: prevState.count + 1
}), () =>{ console.log(this.state.count)}
)}

incrementFive(){
    this.increment()
    this.increment()
    this.increment()
    this.increment()
    this.increment()
}




    // should not do this because the value that will show, doesnt change
    // this.state.count = this.state.count + 1
    
    // if we modify the state directly, react will not rerender the component



  render() {
    return (
      <div>
      <div>        count - {this.state.count}
</div>
        <button onClick={()=> this.incrementFive()}>Increment</button>
      </div>
    )
  }
}

export default Counter

