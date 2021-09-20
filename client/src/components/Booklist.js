import {
  useQuery,
} from "@apollo/client";
import { getBooksQuery } from "../queries/queries";
import BookDetails from "./BookDetails";

const Booklist = () => {
  const { loading, error, data } = useQuery(getBooksQuery);
  const displayBooks = () => {
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
      {displayBooks()}
      <BookDetails />
     </div>
  );
}

export default Booklist;
