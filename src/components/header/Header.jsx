import React from "react";
import Search from "./../search/Search";

const Header = ({stateSearchText}) => {
  return (
    <div id="header">
      <Search stateSearchText={stateSearchText}/>
    </div>
  );
};

export default Header;
