const express = require('express')
const app = express()
const mongoose = require("mongoose")
const port = 3003

const mongoDB = require("./db")
mongoDB();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use()

app.listen(port, () => {
  console.log("\n")
  console.log(`Example app listening on port ${port}`)
})