import React, { useState } from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

const CurrencyDropDown = ({ onSelectCurrency }) => {
  const [selectedCurrency, setSelectedCurrency] = useState("£");

  const handleCurrencyChange = (currency) => {
    setSelectedCurrency(currency);
    onSelectCurrency(currency);
  };

  return (
    <div style={{ marginRight: "1rem" }}>
      <DropdownButton title={selectedCurrency} onSelect={handleCurrencyChange}>
        <Dropdown.Item eventKey='$'>$ Dollar</Dropdown.Item>
        <Dropdown.Item eventKey='£'>£ Pound</Dropdown.Item>
        <Dropdown.Item eventKey='€'>€ Euro</Dropdown.Item>
        <Dropdown.Item eventKey='₹'>₹ Rupee</Dropdown.Item>
      </DropdownButton>
    </div>
  );
};

export default CurrencyDropDown;
