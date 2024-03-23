import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

//Code to import Budget.js
import Budget from "./components/Budget";
import Remaining from "./components/Remaining";
import ExpenseTotal from "./components/ExpenseTotal";
import ExpenseList from "./components/ExpenseList";
import ExpenseItem from "./components/ExpenseList";
import AllocationForm from "./components/AllocationForm";

// Add code to import the other components here under

import { AppProvider } from "./context/AppContext";
import CurrencyDropDown from "./components/CurrencyDropDown";
const App = () => {
  const [selectedCurrency, setSelectedCurrency] = useState("£");

  const handleCurrencyChange = (currency) => {
    setSelectedCurrency(currency);
  };

  return (
    <AppProvider>
      <div className='container'>
        <h1 className='mt-3'>Company's Budget Allocation</h1>
        <div className='row mt-3'>
          {/* Add Budget component here under */}
          <Budget selectedCurrency={selectedCurrency} />

          {/* Add Remaining component here under */}
          <Remaining selectedCurrency={selectedCurrency} />

          {/* Add ExpenseTotal component here under */}
          <ExpenseTotal selectedCurrency={selectedCurrency} />

          <CurrencyDropDown onSelectCurrency={handleCurrencyChange} />

          {/* Add ExpenseList component here under */}
          <ExpenseList selectedCurrency={selectedCurrency} />

          {/* Add ExpenseItem component here under */}
          <ExpenseItem selectedCurrency={selectedCurrency} />

          {/* Add AllocationForm component here under */}
          <AllocationForm selectedCurrency={selectedCurrency} />
        </div>
      </div>
    </AppProvider>
  );
};
export default App;
