import React from 'react';
import '../coreStyles/Searchbox.css';

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div>
      <div className="bg-white shadow-sm border-2">
        <input type="search" 
        placeholder="SEARCH"  
        aria-describedby="button-addon1" 
        className="form-control border-1 bg-white"
        id="searchbutton"
        onChange={searchChange} />
      </div>
    </div>
  );
}

export default SearchBox;