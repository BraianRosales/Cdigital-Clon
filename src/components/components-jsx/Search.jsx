import React from "react";

const Search = () => {
  return (
    <div id="search">
      <input
        type="text"
        placeholder="¿Qué querés comprar hoy?"
        id="input-search"
      ></input>
      <span id="search-for">
        <i className="fas fa-search"></i>
      </span>
    </div>
  );
};

export default Search;
