import React from 'react'


// child component function menampung props
function ChildComponent(props) {
  return (
    <div>
    {/* onClick event menjalankan method greetHandler yg dikirim melalui props */}
    {/* jika kita ingin mengirim balik parameter ke ParentComponent, kita menggunakan arrow function dan kemudian menambahkan paranthesis "()" dan mengirim value di dalamnya  */}
        <button onClick={()=> props.greetHandler('child')}>Greet Parent</button>      
    </div>   
  )
}

export default ChildComponent
