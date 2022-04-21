const { MongoClient, ServerApiVersion } = require('mongodb');

const express = require('express')
const app = express()
const port = process.env.PORT || 5000

//use middleware
// app.use(cors());
app.use(express.json())

//mongodb user name : dbuser1 
//mongodb user password : hcWPwqiCrwH2jzYd



const uri = "mongodb+srv://dbuser1:hcWPwqiCrwH2jzYd@cluster0.c59qt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run(){
  try{
    await client.connect()
    const userCollection = client.db("foodExpress").collection

    app.post('/user',(req, res)=>{
      const newUser = req.body;
      console.log('adding new user', newUser);
      res.send({result:'success'})
    })
  }
  finally{
    // await client.close()
  }

}

run().catch(console.dir)


app.get('/', (req, res)=> {
    res.send('Running My Node CRUD Server')
})

app.listen(port,()=>{
    console.log('CRUD Server is running');
})