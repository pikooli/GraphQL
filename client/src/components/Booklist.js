import {
  useQuery,
  gql,
} from "@apollo/client";
const GET_BOOKS = gql` {
  books {
    name,
    genre
  }
}`;

function Booklist() {
  const { loading, error, data } = useQuery(GET_BOOKS);
  const displayBook = () => {
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    return (
      <ul id="book-list">
        {
          data.books.map((book, i) => {
          return (<li key={i}><b>{book.name}</b></li>)
        })}
      </ul>
      )

  }
  return (
    <div>
      {displayBook()}
     </div>
  );
}

export default Booklist;
