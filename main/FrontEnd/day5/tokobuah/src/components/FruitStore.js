import { useState } from "react";
import  "../style/fruitstore.css"


export default function FruitStore(){

// destructuring

// const[listData, setListData] = useState([])

// const[objData, setObjData] = useState({
//     fruit:"",
//     img:"",
//     price:0
// })


// function inputFruit(event){

// }

    // 

    return(
        <>
        
        {/* list side */}
        <div className="fruit-list">
            <div className="searchFruit">
            <div className="searchBar"></div>
            </div>
            <div className="listFruit"></div>
        </div>




        {/* input side */}
        <div className="fruit-input">
            <div className="row-input">
                <h1 className="title">Fruit's Input</h1>
            </div>
            <div className="row-input">
            <input type="text" name="name" className="inputFruit" placeholder="Name"/>
            </div>
            <div className="row-input">
            <input type="text" name="img" className="inputFruit" placeholder="URL Image"/>
            </div>
            <div className="row-input">
            <input type="text" name="price" className="inputFruit" placeholder="Price"/>
            </div>
            <div className="row-input">
            <button className="button-add">Submit</button>
            </div>
        </div>

        </>
    )
}