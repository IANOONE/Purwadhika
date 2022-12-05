// sync
// console.log(1);
// console.log(2);
// console.log(3);

// async
// console.log("task 1");
// setTimeout(()=> console.log("task 2"), 3000)
// console.log("task 3");



const tryPromise = new Promise ((resolve, reject) => {
    let isError = false
    if(isError) reject("Error")
    else reject ("Success")
})

// tryPromise
// .then((res) => console.log(res))
// .catch((err) => console.log(err))
// .finally(() => console.log("finally done"))


// exp create asyn function
// async function myAsyncFunc(){}

// const myAsyncFunc2 = async () => {}
// 


// async await

const asyncAwait = () => {
    console.log('satu');
    tryPromise
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err))
    .finally(()=> console.log("finally done"))
}

