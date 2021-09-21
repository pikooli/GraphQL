import {
  gql,
} from "@apollo/client";

const getAuthorsQuery = gql` {
  authors {
    id
    name,
  }
}`;

const getBooksQuery = gql` {
  books {
    id,
    name,
    genre
  }
}`;

const getBookQuery = gql`
  query ($id: ID)
  {
    book(id: $id){
      id,
      name,
      genre,
      author {
        id,
        name,
        age,
        books {
          id,
          name
        }
      }
    }
  }
`;


const addBooksMutation = gql`
  mutation($name: String!, $genre: String!, $authorId: String!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
        name,
        id
    }
  }
`;

export {
  getAuthorsQuery,
  getBooksQuery,
  getBookQuery,
  addBooksMutation
}