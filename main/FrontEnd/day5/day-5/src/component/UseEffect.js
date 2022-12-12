import React, {useState, useEffect} from "react";

function UseEffect(){


    // state                //setState
    const [count, setCount] = useState(5)


// componentWillMount
// karena 1 argument
    // useEffect(()=> {
    //     document.title = `You clicked ${count} times | This is WillMount`
    // })

// componentWillUnMount
// more than 1 argument
//  useEffect(()=>{   
//  },)

// Focus on this

// componentDidmount
// useEffect(()=>{
//     alert('this is componentDidMount')
// }, [])


// componentDidUpdate
// argument, with state
useEffect(()=>{ 
    document.title = `You clicked ${count} times`
    alert(`You clicked ${count} times | This is DidUpdate`)
}, [count])
// if count berubah maka jalan Effect



    return (
        <div>
                <p>You clicked {count}</p>            
                <button onClick={()=>setCount(count + 1)}>
                    Click Me !
                </button>
        </div>
    )
}

export default UseEffect