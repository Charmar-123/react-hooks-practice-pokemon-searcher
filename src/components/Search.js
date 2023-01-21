import { useState } from "react";

function Search({handleSearch}) {

  const [currentSearch, setCurrentSearch] = useState("")

  handleSearch(currentSearch)

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input onChange={(e) => setCurrentSearch(e.target.value)} className="prompt" />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
