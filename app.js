const Express = require('express');
const expressGraphQL = require('express-graphql');
const {
  GraphQLID,
  GraphQLString,
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLNonNull
} = require('graphql');
const Mongoose = require('mongoose')

var app = Express();

Mongoose.connect('mongodb+srv://Tucker:Tucker@cluster0-tihhu.mongodb.net/test?retryWrites=true')

const PersonModel = Mongoose.model("person", {
  lastname: String,
  firstname: String
})

app.listen(3000, () => {
  console.log("Listening at :3000 .... ")
})