import React from "react";
import PropTypes from "prop-types";

// components

import TableDropdown from "components/Dropdowns/TableDropdown.js";
import { Card } from "react-bootstrap";

export default function CardCredit({ color }) {
  return (
    <>
   


      
    </>
  );
}

CardCredit.defaultProps = {
  color: "light",
};

CardCredit.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
