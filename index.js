const express = require ('express');
const bodyParser = require ('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json())

const port = 3008;

app.get('/', (req,res) =>{
    res.send('Hello')
});

app.post ('/register', (req,res) =>{
    res.send('Hello Post')
})


app.listen(port,()=>{
   console.log(`server is running on port ${port}`) 
})