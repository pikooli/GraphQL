const Form = ({displayAuthors, onChange, submitForm}) => {

  return (
    <form id="add-book" onSubmit={submitForm}>
      
      <div className="field">
        <label>Book name:</label>
        <input type="text" onChange={(e) => onChange('name', e.target.value)}/>
      </div>

      <div className="field">
        <label>Genre:</label>
        <input type="text" onChange={(e) => onChange('genre', e.target.value)}/>
      </div>

      <div className="field">
        <label>Author:</label>
        <select onChange={(e) => onChange('authorId', e.target.value)}>
          <option>Select author </option>
          {displayAuthors()}
        </select>
      </div>

      <button>+</button>

    </form>
  )
}

export default Form;