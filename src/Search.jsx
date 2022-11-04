import { useState } from "react";
import SearchIcon from './search.svg';



const Search = ( {searchOnClick} ) => {

    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div className="search">
            <input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search"
            />
            <img
                src={SearchIcon}
                alt="search"
                onClick={() => searchOnClick(searchTerm)}
            />
        </div>
    )
}

export default Search;