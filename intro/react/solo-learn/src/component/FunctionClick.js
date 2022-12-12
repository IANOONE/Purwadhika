// react snippet to create function
// rfce
import React from 'react'

// Event Handling


function FunctionClick() {

function clickHandler(){
    console.log("Button Clicked");
}

  return (
    <div>
    {/* make event onClick with the function handler */}
    {/* to execute the code */}
    <button onClick={clickHandler}>Click</button>
    {/* if we using the parantheses "()" it will call the function, that will give another result */}
    {/* <button onClick={clickHandler()}>Click</button> */}
    </div>
  )
}

export default FunctionClick
