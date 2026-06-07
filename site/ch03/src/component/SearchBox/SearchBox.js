// LISTING 3-2: Using a user-defined React component in JSX

import { useState } from "react";
import SearchInput from "./SearchInput";
import SearchResult from "./SearchResults";

function SearchBox() {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <>
            <div id="search-box">
                <SearchInput term={searchTerm} onChange={setSearchTerm} />
                <SearchResult term={searchTerm} />
            </div>
        </>
    );
}

export default SearchBox;