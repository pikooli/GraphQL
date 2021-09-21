import { useState } from "react";
import {
  useQuery,
} from "@apollo/client";
import { getBooksQuery } from "../queries/queries";
import BookDetails from "./BookDetails";

const Booklist = () => {
  const [selected, setSelected] = useState(null);
  const { loading, error, data } = useQuery(getBooksQuery);
  const displayBooks = () => {
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    return (
      <ul id="book-list">
        {
          data.books.map((book, i) => {
          return (<li key={i} onClick={(e) => setSelected(book.id)}><b>{book.name}</b></li>)
        })}
      </ul>
      )

  }
  return (
    <div>
      {displayBooks()}
      <BookDetails bookId={selected} />
     </div>
  );
}

export default Booklist;
