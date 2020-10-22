// setTimeout(()=>{
//     console.log('2 seconds are up')
// }, 2000)

// const name = ['HEM' , 'ISHIKA' , 'TOM']
// const shortNames = name.filter((name)=>{
//    return name.length<=4
// })

// const geoCode = (address , callback)=>{
//     setTimeout(()=>{
//         const data = {
//             latitude:0,
//             longitude:0,
//         }
//        callback(data)

//     } , 2000)
// }

// geoCode('Pune' , (data)=>{
//   console.log(data)
// })

// const add = (num1 , num2 , callback)=>{
//     setTimeout(()=>{
//         const data = num1+num2
//         callback(data)
//     } , 2000)
// } 


// add(1, 4, (sum) => {
//     console.log(sum) // Should print: 5
// })
// Callback and Promises

const doWorkCallBack = (callback)=>{
    setTimeout(()=>{
       //callback('This is my error!' , undefined)
       callback(undefined , [1,4,7])
    } , 2000)
}

doWorkCallBack((error , result)=>{
        if(error){
            return console.log(error)
        } 
        console.log(result)
})