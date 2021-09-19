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

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  console.log(data);
  return (
    <div>
      <ul id="book-list">
        <li>Book name</li>
      </ul>
     </div>
  );
}

export default Booklist;
