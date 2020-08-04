import React from "react";

function SearchBar() {
  return (
    <>
      <input style={styleSearchBar} type="text" placeholder="Search" />
    </>
  );
}

const styleSearchBar = {
  height: "30px",
  borderRadius: "5px",
  padding: "5px 2.5px",
  width: "95%",
};

export default SearchBar;
