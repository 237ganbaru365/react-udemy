import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const [isShown, setIsShown] = useState(false);

  const isShownHandler = (event) => {
    setIsShown(true);
  };

  const isHiddenHandler = (event) => {
    setIsShown(false);
  };

  return (
    <div className="new-expense">
      {!isShown && <button onClick={isShownHandler}>Add New Expense</button>}
      {isShown && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancele={isHiddenHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
