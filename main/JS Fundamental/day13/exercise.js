// create class with queue
// create file to handle and execute queue class
// each queue process takes a random interval from 1 - 10 seconds


// const printQueue (interval, iteration){

// }

let timeOrder = Math.floor(Math.random() * 10+ 2)
console.log(timeOrder);




class orderFood{

    constructor(){
        this.food = []
    }

    // add element
    enqueue(element){
        return this.food.push(element);
    }
} 

let foodOrder = new orderFood()
foodOrder.enqueue("Bakso")
// foodOrder.enqueue("Bakso")

console.log(foodOrder.food);








class Queue {
    constructor (){
        this.queue = []
    }


    addQueue(values){
        let newData = {
            "nama_makanan" : values
        }

        this.queue.push(newData)
    }
}



