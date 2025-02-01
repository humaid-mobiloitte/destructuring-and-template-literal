const user={
    name:"Chintu",
    age:25,
    address:{
        city:"Delhi", 
        country:"India"
    }
}

const {name:userName,age:userAge,address:{city:userCity,country:userCountry}}=user

console.log(userName)
console.log(userAge)
console.log(userCity)
console.log(userCountry)