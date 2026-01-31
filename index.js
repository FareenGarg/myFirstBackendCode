require('dotenv').config
const express = require('express')
const app = express()
const port = 1200

app.get('/', (req, res) => {
  res.send('SP')
})
app.get('/login', (req,res)=>{
    res.send("mummy papa i love you")
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})