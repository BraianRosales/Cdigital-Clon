import React from "react";
import {BsSearch} from "react-icons/bs";

const Search = () => {
  return (
    <div id="search">
      <input
        type="text"
        placeholder="¿Qué querés comprar hoy?"
        id="input-search"
      ></input>
      <span id="search-for">
        <BsSearch className="fa-search"/>
      </span>
    </div>
  );
};

export default Search;
