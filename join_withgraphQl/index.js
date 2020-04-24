const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema=require('./schema');
const cors = require('cors');

schema.client;
  const app = express();
  app.use(cors());
  app.use('/api', graphqlHTTP({
    schema: schema.schema,
    graphiql: true,
  }));
  port=process.env.PORT||3000;
  app.listen(port,()=>{

    console.log(`Running on port ${port}`);
  });