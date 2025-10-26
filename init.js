import databaseConnection from "./connection.js"
import student from "./models/studentmodel.js"

const url = "mongodb://127.0.0.1:27017/student"

databaseConnection(url).then(()=>{
  console.log("connection successful with database")
})

let user =new student({
    username:"umar",
    email:"umarshah@gmail.com",
    phoneNumber:3079106115,
})

let password="123"

await student.register(user,password).then(()=>{
  console.log(user)
})

// console.log(user)