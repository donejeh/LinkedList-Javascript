
 const sample  = [1,3,2,0,44,5]
 const sample2  = ['a','c','d','b','Y','Z']

// //const a = sample
// const [a,b,,...c] = sample

// const rest = c.forEach(element => {
//     console.log(element * 2)  
// });
// //console.log(c)

//const newArray = sample.join(sample2)

// function sumAndMul(a,b){
//     return  [a+b, a*b]
// }

// const [sum, multiply, div ="no div" ] = sumAndMul(2,3)
// console.log(sum)
// console.log(multiply)
// console.log(div)

const personOne = {
    age : 32,
    favFood: "samaru",
}

const personTwo = {
    name : 'DONEJEH',
    age : 10,
    wawa: "samaru",
    address : {
        city : "zaria",
        state : "Kaduna"
    }

}

const { name: fullname, age, wawa ="adams" , address: {city} } = personTwo

// console.log(fullname)
// console.log(age)
// console.log(city)
//console.log(rest.address.city)

const personThree = {...personOne,...personTwo}

//console.log(personThree)

// function printUser(user){
//     console.log(`Name is: ${user.name}. Age : ${user.age}`)
// }

// console.log(printUser(personTwo))

function printUser({name , age,favFood}){
    console.log(`Name is: ${name}. Age : ${age} and he likes ${favFood}`)
}

console.log(printUser(personThree))