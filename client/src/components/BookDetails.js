import {
  useQuery,
} from "@apollo/client";
import { getBookQuery } from "../queries/queries";

const BookDetails = () => {
  const { loading, error, data } = useQuery(getBookQuery, {variables: {id: "614739d1d1a55015a5c60bd1"}});
  data && console.log(data)
  error && console.log(error)
  return (
    <div id="bookdetails">
      <p>Output book details here</p>
     </div>
  );
}

export default BookDetails;
