const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./graphql/schema');
const cors = require('cors');
const app = express();

const mongoose = require('mongoose');

const uri = "mongodb+srv://test:test@cluster0.ae9xk.mongodb.net/GRAPHQL?retryWrites=true&w=majority";
mongoose.connect(uri, (err) => {
  err && console.log(err)
});

mongoose.connection.once('open', () => {
  console.log('connected to the database')
})

app.use(cors());
app.use('/graphql', (req, res, next) => {
  console.log(req)
  next();
},
graphqlHTTP({
  schema,
  graphiql: true
}))

app.listen(4000, () => {
  console.log('listen to port 4000');
}); 