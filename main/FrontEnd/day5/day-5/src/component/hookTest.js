import React, {useState} from "react";

function HookTest(){
    // declare a new state variable
    const [count, setCount ] = useState(0)


    return (
        <div>
            <p>You Clicked {count}</p>
            <button onClick={()=> setCount(count +1)}>Click Me !</button>
        </div>
    )

}

export default HookTest;