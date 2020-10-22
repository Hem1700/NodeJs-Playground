
const add = (a,b)=>{
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
      if(a<0 || b<0){
          return reject('Number must be positive')
      }


         resolve(a+b)
      } , 2000)
    })
 }
const doWork  = async ()=>{
  const value = await add(1,99)
  const sum2 =  await add(value  , -50)
  const sum3 = await add(sum2 , 3)
  return sum3

}

doWork().then((result)=>{
   console.log('Result' , result)
}).catch((e)=>{
    console.log('Error',e)

})


