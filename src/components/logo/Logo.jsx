import React from "react";
import { Link } from "react-router-dom";

const textBrand = "CotoDigiclon";

const Logo = () => {
  return <Link id="brand" to='/'>{textBrand}</Link>;
};

export default Logo;
