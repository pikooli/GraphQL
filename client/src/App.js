import Booklist from "./components/Booklist";
import AddBook from "./components/AddBook/AddBook";
import './index.css';

function App() {
  return (
    <div id="main">
      <h1>Book Reading List</h1>
      <Booklist />
      <AddBook />
     </div>
  );
}

export default App;
