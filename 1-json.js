const fs  = require('fs')
/* const book = {
    title: 'xyz' ,
    author: 'abc',
}


const bookJSON= JSON.stringify(book)
fs.writeFileSync('1-Json.json' , bookJSON) */

const dataBuffer = fs.readFileSync('1-Json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)


data.name = "Hem"
data.age = '20'

const userdata = JSON.stringify(data)
fs.writeFileSync('1-Json.json' , userdata)
console.log(userdata)

