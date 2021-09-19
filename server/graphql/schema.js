const graphql = require('graphql');
const { 
  GraphQLObjectType, 
  GraphQLSchema,
  GraphQLID,
  GraphQLList
 } = graphql;
const { BookType, AuthorType } = require('./types');
const Mutation = require('./mutation');
const Book = require('../models/Book');
const Author = require('../models/Author');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLID }},
      resolve(parent, args) {
        return Book.findById(args.id);
      } 
    }, author: {
      type: AuthorType,
      args: { id: { type: GraphQLID }},
      resolve(parent, args) {
        return Author.findById(args.id);
      } 
    },
    books: {
      type: GraphQLList(BookType),
      resolve(parent, args){
        return Book.find({});
      }
    },
    authors: {
      type: GraphQLList(AuthorType),
      resolve(parent, args){
        return Author.find({});
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
}) 