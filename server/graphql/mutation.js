const graphql = require('graphql');
const { 
  GraphQLObjectType, 
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLID,
  GraphQLNonNull,
  GraphQLList
} = graphql;
const { BookType, AuthorType } = require('./types');
const Book = require('../models/Book');
const Author = require('../models/Author');

const Mutation = new GraphQLObjectType({
  name : 'Mutation',
  fields: {
    addAuthor : {
      type: AuthorType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        age: { type: new GraphQLNonNull(GraphQLInt)  }
      },
      resolve(parent, args) {
        const author = new Author({
          name: args.name,
          age: args.age
        });
        return author.save();
      }
    },
    addBook : {
      type: BookType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString)  },
        genre: { type: new GraphQLNonNull(GraphQLString) },
        authorId: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve(parent, args) {
        const book = new Book({
          name: args.name,
          genre: args.genre,
          authorId: args.authorId,
        });
        return book.save();
      }
    }
  }
}); 

module.exports = Mutation;