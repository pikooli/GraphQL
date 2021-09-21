import {
  useQuery,
} from "@apollo/client";
import { getBookQuery } from "../queries/queries";

const BookDetails = ({bookId}) => {
  const { loading, error, data } = useQuery(getBookQuery, {variables: {id: bookId}});
  data && console.log(data)
  error && console.log(error)
  const displayBookDetails = () => {
    const { book } = data || {};
    if (!book) {
      return <p>No book selected</p>
    }
    return (
      <div>
        <h2>{book.name}</h2>
        <p>{book.genre}</p>
        <p>{book.author.name}</p>
        <p>All books by this author:</p>
        <ul className="other-books">
          {book.author.books.map(book => {
            return <li key={book.id}>{book.name}</li>
          })}
        </ul>
      </div>
    )
  }
  return (
    <div id="bookdetails">
      {displayBookDetails()}
     </div>
  );
}

export default BookDetails;
