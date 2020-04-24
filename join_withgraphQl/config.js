const { Client } = require('pg')
const client = new Client({
  host: "localhost",
  user: "root",
  password: "root",
  database: "tournament"
})
module.exports={
    client
}