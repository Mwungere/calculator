const express = require("express")
const bodyparser = require("body-parser")
const app = express()
const dotenv = require("dotenv")
dotenv.config()
app.use(bodyparser.urlencoded({extended: false}))

app.get("/", (req,res) => {
    res.sendFile("./html.html", {root:__dirname})
})


app.post("/calcAdd",(req,res)=> {
    let data = req.body
    let sign = data.sign
    let numbers = data.numbers
    let array = []; 
    let sum = 0;
    if (sign == "add") {
      
        
        array = numbers.split(",")
        for (let i = 0; i < array.length; i++) {

            sum += array[i];
            console.log(sum);
            
        }

        
        
    } else {
       
       
        
    }
})



app.post("/calcMultiply",(req,res)=> {
    let data = req.body
    let sign = data.sign
    let numbers = data.numbers
    let array = []; 
    let product = 1;
    if (sign = "*") {
     
        array = numbers.split(",")
        for (let i = 0; i < array.length; i++) {
            product *= array[i];
            
        }
      
    } else {
        res.send("Sign is not multiplication")
        
    }
})

module.exports=app

app.listen(process.env.PORT, (err) => {
    if(err) throw err
    console.log("app running..");
})

