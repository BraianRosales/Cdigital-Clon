import React from "react";
import { Link } from "react-router-dom";

const textBrand = "CotoDigitalclon";

const Logo = () => {
  return (
    <Link id="brand" to="/">
      {textBrand}
    </Link>
  );
};

export default Logo;
