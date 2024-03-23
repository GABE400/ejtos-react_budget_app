import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Budget = ({ selectedCurrency }) => {
  const { budget, setBudget } = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget);
  const handleBudgetChange = (event) => {
    setNewBudget(event.target.value);
    if (newBudget > 2000) {
      // Display error message for exceeding 2000
      alert("Budget cannot exceed 2000");
    } else if (newBudget < 1660) {
      // Display error message for being lower than 1660
      alert("Budget cannot be lower than 1660");
    } else {
      // Update budget if it meets criteria
      setBudget(newBudget);
    }
  };
  return (
    <div className='alert alert-secondary'>
      <span>
        Budget: {selectedCurrency}
        {budget}
      </span>
      <input
        type='number'
        step='10'
        value={newBudget}
        onChange={handleBudgetChange}
      ></input>
    </div>
  );
};
export default Budget;
