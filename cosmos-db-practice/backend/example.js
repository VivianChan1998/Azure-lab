const config = {
    endpoint:'', //Fill in your URI string
    key: '' //Fill in your PRIMARY key or SECONDARY key string
}
const CosmosClient = require("@azure/cosmos").CosmosClient;
const client = new CosmosClient(config);
const database = client.database('example');
const container = database.container('Container1');

async function getData(){
    const querySpec = {
        query: "SELECT * from c"
    };
    const items = await container.items
    .query(querySpec)
    .fetchAll();
    
    return items
}

const express = require('express')
const app = express()
const port = 4000
var cors = require('cors')

app.use(cors());

app.get('/', async (req, res) => {
    var data = await getData()
    var response = {
        data: data.resources
    }
    res.send(response)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})