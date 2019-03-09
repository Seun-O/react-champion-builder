import React from "react";

const SearchBar = (props: any) => {
  const onSearch = (e: any) => {
    props.onSearch(e.target.value);
  };
  return (
    <div>
      <input type="text" placeholder="search" onChange={onSearch} />
    </div>
  );
};

export default SearchBar;
