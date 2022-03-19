import React from "react";
import Search from "./../search/Search";

const Header = ({stateSearchText}) => {
  return (
    <div id="header">
      <Search stateSearchText={stateSearchText}/>
      <img src="https://static.cotodigital3.com.ar/sitios/cdigi/static/content/images/cdigi/chango18.png" alt="chango" id="header-img"></img>
    </div>
  );
};

export default Header;
