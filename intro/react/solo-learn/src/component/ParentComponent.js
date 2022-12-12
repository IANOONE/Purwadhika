import React, { Component } from 'react'
import ChildComponent from './ChildComponent'


class ParentComponent extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         parentName : 'Parent'
      }


      this.greetParent = this.greetParent.bind(this)
    }
    

    // menampung value yang dikirim oleh childComponent
    greetParent(childName){
        alert(`Hello ${this.state.parentName} from ${childName}`)
    }

  render() {
    return (
      <div>
      {/* mengirim method ke childParent dengan props dengan nama greetHandler */}
    <ChildComponent greetHandler={this.greetParent}/>
      </div>
    )
  }
}

export default ParentComponent
