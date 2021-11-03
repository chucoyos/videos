import React, { useState } from 'react'

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState('')

  const onSubmit = e => {
      e.preventDefault()
      onFormSubmit(term)
  }

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <label>Video Search {term}</label>
          <input
            value={term}
            type="text"
            onChange={e => setTerm(e.target.value)}
            placeholder="Enter Search Term"
          />
        </div>
      </form>
    </div>
  )
}
export default SearchBar