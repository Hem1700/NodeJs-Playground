// Object Property shorthand

const name = 'Hem'
const  userAge = 20
const user = {
    name,
    age:userAge,
    location:'Pune'

}

console.log(user)


//Object Destructering

const product = {
    label:'Red Notebook',
    price:3,
    stock:330,
    salePrice: undefined
}

// const label = product.label
// const stock = product.stock
// const {label:productlabel , stock , rating = 5} = product
// console.log(productlabel)
// console.log(stock)
// console.log(rating)

const transaction =(type , {label , stock}={})=>{
    console.log(type , label , stock)
}

transaction('order' , product)