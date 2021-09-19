
const graphql = require('graphql');
const _ = require('lodash');
const { 
  GraphQLObjectType, 
  GraphQLString, 
  GraphQLInt,
  GraphQLSchema,
  GraphQLID,
  GraphQLList
 } = graphql;
const Book = require('../models/Book');
const Author = require('../models/Author');

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id : {type: GraphQLString},
    name : {type: GraphQLString},
    genre : {type: GraphQLString},
    author: {
      type: AuthorType,
      resolve(parent, args){
        return Author.find({id: parent.authorId})
      }
    }
  })
});

const AuthorType = new GraphQLObjectType({
  name: 'Author',
  fields: () => ({
    id : {type: GraphQLString},
    name : {type: GraphQLString},
    age : {type: GraphQLInt},
    books: {
      type: GraphQLList(BookType),
      resolve(parent, args){
        return Book.find({authorId: parent.id});
      }
    }
  })
});

module.exports = {
  BookType,
  AuthorType
}