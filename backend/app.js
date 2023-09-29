const express = require("express")
const cors = require("cors")

const app = express()
//json parser
app.use(express.json())
app.use(cors())

//adding routes
const project = require("./routes/projectRoute")
app.use("/api/v1/",project)

module.exports = app