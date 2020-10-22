require('../src/db/mongoose')
const Tasks = require('../src/models/task')

// Tasks.findByIdAndDelete('5f536469e923712f5f9bed4b').then((task)=>{
//    console.log(task)
//    return Tasks.countDocuments({completed:false}).then((result)=>{
//        console.log(result)
//    }).catch((e)=>{
//        console.log(e)
//    })
// })

const deleteTaskAndCount =async (id)=>{
   const task = await  Tasks.findByIdAndDelete(id)
   const count = await Tasks.countDocuments({completed:false})

   return count
}

deleteTaskAndCount("5f53624b27391e2e16b0b67d").then((count)=>{
    console.log(count)
}).catch((e)=>{
    console.log(e)
})