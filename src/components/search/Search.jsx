import React, { useRef, useState } from "react";
import { BsSearch } from "react-icons/bs";

const Search = ({ stateSearchText }) => {
  const inputSearch = useRef(null);
  const [value, setValue] = useState("");
  const [textSearch, setTextSearch] = useState("");

  function onChangeTextSearch(e) {
    e.preventDefault();
    const text = inputSearch.current.value;
    setTextSearch(text.toLowerCase());
    setValue(text);
  }

  return (
    <form
      id="search"
      onSubmit={(e) => {
        e.preventDefault();
        stateSearchText(textSearch);
        setValue("");
      }}
    >
      <input
        type="text"
        placeholder="¿Qué querés comprar hoy?"
        id="input-search"
        ref={inputSearch}
        onChange={onChangeTextSearch}
        value={value}
      ></input>
      <button id="search-for">
        <BsSearch className="fa-search" />
      </button>
    </form>
  );
};

export default Search;
