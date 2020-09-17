import React, { useState, useRef } from 'react'

// Icons
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { 
  StyledSearchBar, 
  StyledSearchBarContent 
} from './SearchBar.styles'

const SearchBar = ({ callback }) => {
  const [state, setState] = useState('')
  const timeOut = useRef(null)

  const doSearch = event => {
    const { value } = event.target
    clearTimeout(timeOut.current)
    setState(value)

    timeOut.current = setTimeout(() => {
      callback(value)
    }, 500)
  }

  return (
    <StyledSearchBar>
      <StyledSearchBarContent>
      <FontAwesomeIcon icon={faSearch} />
        <input 
          type="text"
          placeholder="Search for a plant"
          onChange={doSearch}
          value={state}
        />
      </StyledSearchBarContent>
    </StyledSearchBar>

  )
}

export default SearchBar