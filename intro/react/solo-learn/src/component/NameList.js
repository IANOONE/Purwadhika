import React from 'react'

function NameList() {

const names = ['Bruce','Clark','Diana']

const product = [
    {
        id: 1,
        name: "book",
        price: 5000
    },
    {
        id: 2,
        name: "pencil",
        price: 2000
    },
    {
        id: 3,
        name: "eraser",
        price: 2000
    }
]



const listProduct = product.map(barang => <div>I am buy a {barang.name} with the price Rp. {barang.price} </div>)
const listName = names.map(name => <h2>{name}</h2>) 

return <div>{listProduct}</div>




// return (
//     <div>
//     {
//         {/* names.map(name => <h2>{name}</h2>) */}
//     }
//     </div>
//   )



}

export default NameList
