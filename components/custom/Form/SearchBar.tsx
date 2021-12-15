import React from 'react'
import { useDebounce } from 'react-use'

interface SearchBarProps {
    searchState : string;
    setSearch : React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar = ({setSearch, searchState} : SearchBarProps) => {
    return (
        <div>
            
        </div>
    )
}

export default SearchBar
