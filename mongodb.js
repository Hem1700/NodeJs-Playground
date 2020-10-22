//CRUD - CREATE READ UPDATE DELETE

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID
 const {MongoClient , ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL , {useNewUrlParser:true , useUnifiedTopology:true}  , (error , client)=>{
    if(error){
     return console.log('Unable to connect to database')
        }
    const db =  client.db(databaseName)
//    db.collection('users').findOne({ _id: new ObjectID("5f524b99e7b1d44241e8a6cf") },(error , user)=>{
//        if(error){
//          return console.log('Unable to fetch data')
//        }
//        console.log(user)
//    })
//    db.collection('users').find({age:20}).toArray((error , users)=>{
//        if(error){
//        return console.log('Unable to finf')
//        }
//        console.log(users)

//    })
    // db.collection('taskscollection').findOne({_id:new ObjectID("5f5247c5ff5642061704f6da")}, (error , users)=>{
    //     if(error){
    //     return console.log('Unable to find the user')
    //     }
    //    console.log(users)
    // })
    // db.collection('taskscollection').find({completed:true}).toArray((error , users)=>{
    //     if(error){
    //         return console.log('Unable to find users')
    //     }
    //     console.log(users)
    // })  

    // db.collection('users').updateOne({
    //     _id:new ObjectID("5f524b99e7b1d44241e8a6cf")
    // }, {
    //     $inc:{
    //         age: 8
    //     }
    //  }).then((result)=>{
    //     console.log(result)
    //    }).catch((error)=>{
    //     console.log(error)  
    //    })

    // db.collection('taskscollection').updateMany({
    //     completed:false 
    // },{
    //     $set:{
    //         completed:true
    //     }
    // }).then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })

//   db.collection('users').deleteMany({
//       age:21
//   }).then((result)=>{
//   console.log(result)
//   }).catch((error)=>{
//       console.log(error)
//   })
      
   db.collection('taskscollection').deleteOne({
       description:'Task 3'
   }).then((result)=>{
       console.log(result)
   }).catch((error)=>{
       console.log(error)
   })
   
 })
