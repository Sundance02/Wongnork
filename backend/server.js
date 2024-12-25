const express = require('express')

const app = express()

app.use((req, res, next) =>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
})

app.get('/', (req, res) => {
    const test = { name: "orange-cat", text: "อยากถูกหวย" };
    res.json(test); // ส่ง response เป็น JSON
  });

app.listen(5000, ()=>{
    console.log('server started!!!')
})