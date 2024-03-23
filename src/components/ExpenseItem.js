import React, { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { AppContext } from "../context/AppContext";

const ExpenseItem = ({ selectedCurrency, id, name, cost }) => {
  console.log(selectedCurrency);
  const { dispatch } = useContext(AppContext);

  const handleDeleteExpense = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: id,
    });
  };

  const increaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: 10,
    };

    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
  };

  const decreaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: 1,
    };

    dispatch({
      type: "RED_EXPENSE",
      payload: expense,
    });
  };

  return (
    <tr>
      <td>{name}</td>
      <td>
        {selectedCurrency}
        {cost}
      </td>
      <td>
        <button
          className='increase-button'
          onClick={(event) => increaseAllocation(name)}
        >
          +
        </button>
      </td>
      <td>
        <button
          className='decrease-button'
          onClick={(event) => decreaseAllocation(name)}
        >
          -
        </button>
      </td>
      <td>
        <TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete>
      </td>
    </tr>
  );
};

export default ExpenseItem;
