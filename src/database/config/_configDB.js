const {Client} = require('pg');

const client = new Client({
user: 'postgres',
host: 'localhost',
database:'postgres',
password:'pkl0411',
port:'5432',
})

client.connect((err)=>console.log(err))

module.exports = client;