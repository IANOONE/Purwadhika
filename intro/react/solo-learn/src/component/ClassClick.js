import React, { Component } from 'react'

class ClassClick extends Component {

  clickHandler() {
      console.log('this button clicked');
    }
  render() {
    return (
      <div>
      {/* dont forget to use this */}
        <button onClick={this.clickHandler}>Click Me !</button>
      </div>
    )
  }
}

export default ClassClick
