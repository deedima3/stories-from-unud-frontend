import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useDebounce } from 'react-use'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

interface SearchBarProps {
    searchState : string;
    setSearch : React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar = ({setSearch, searchState} : SearchBarProps) => {
    const handleChange = (e :any) => {
        setSearch(e.target.value)
    }
    return (
        <div className='transition transform duration-500 hover:scale-110 hover:translate-y+5 flex shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'>
            <input 
                className="w-full focus:outline-none" 
                id="passwords" 
                placeholder="Search" 
                onChange={handleChange}
            />
            <FontAwesomeIcon icon={faSearch} size="1x"/>
        </div>
    )
}

export default SearchBar
