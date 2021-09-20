import { useState } from 'react';
import {
  useQuery,
  useMutation
} from "@apollo/client";
import Form from './AddBookForm';
import { getAuthorsQuery, addBooksMutation, getBooksQuery} from '../../queries/queries';

const AddBook = () => {
  const [form, setForm]  = useState(null);
  const { loading, error, data, refetch } = useQuery(getAuthorsQuery);
  const [addBook, {data: mutateData, loading: mutateLoading, error: mutateError} ] = useMutation(addBooksMutation)

  const displayAuthors = () => {
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    return data.authors.map((author) => {
          return (<option key={author.id} value={author.id}>{author.name}</option>)
    })
  }

  const onChange = (field, value) => { setForm((state) => ({...state, [field]: value })) }

  const submitForm = (e) => {
    e.preventDefault()
    addBook({variables:{
      name :form.name,
      genre: form.genre,
      authorId: form.authorId
    }, refetchQueries:[{ query: getBooksQuery }]
  })
    mutateError && console.log(mutateError);
    mutateData && console.log(mutateData)
  }

  return (
    <Form displayAuthors={displayAuthors} form={form} onChange={onChange} submitForm={submitForm}/>
  );
}

export default AddBook;
