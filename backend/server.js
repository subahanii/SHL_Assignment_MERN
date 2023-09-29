const CONN = require("./DB")
const app = require("./app")
const dotenv = require("dotenv")
const data = require("./parseExcel/parsedJson.json")
const project = require("./models/project")

//config env
dotenv.config({path:"./config/config.env"})
//DB Connection
CONN();

app.listen(PORT =8000, ()=>{
    console.log("connected on PORT:",PORT)
})

// below code is responsible for dump json data to DB.
// console.log(data)
let resp = null
const add = async ()=>{
    await project.deleteMany({})// delete all data from table first ther insert
    resp = await project.insertMany(data)
    console.log("sent")
}
add()
console.log(resp)
