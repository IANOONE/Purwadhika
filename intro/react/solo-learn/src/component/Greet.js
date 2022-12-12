import React from 'react'


// function class example

// export const Greet = () => <h1>Holla Hello</h1>

// export default const Greet = () => <h1>Holla Hello</h1>


// function Greet(props) {

    // with function expression
    // const Greet = () => <h1>Holla Hello</h1>


    // return <h1>Hello Holla</h1>




    // with js rules exp

    // return React.createElement(
    // create div element with id 'hello' and class 'helloClass'

    // 'div', {id: 'hello', className: 'helloClass'},

    // to create html element in this, we should creating with react createElement again like this
    // second paramater means atribute of html
    // if we set the params with null, it's will not have the atribulte html

    // React.createElement('h1', null ,'Hello Holla')
    // )



    
    // props
    // console.log(props);
    // returning with calling the props
    // return ( 

/* jsx should have only one wrapper element or parent element 
   we can return only one html element
*/
//     <div>
//     <h1> Hello {props.name} a.k.a {props.heroName} </h1>

//     {props.children}
//     </div>
    
//     )



// }


// Destructuring props and state
// extracting name and heroName from the props object


//  1. exp destructuring props in parameter
// const Greet = ({name, heroName}) =>{
    
const Greet = props  =>{
    // 2. exp destructuring props in function body
 const {name, heroName} = props
//  destructuring state, same like props
//  const {state1, state2} = state
return(

<div>
{/* so we can call only the value name after destructuring */}
<h1> Hello {name} a.k.a {heroName} </h1>
</div>

)



}




export default Greet