import { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import NewExpenseButton from "./NewExpenseButton";

import "./NewExpense.css";

const NewExpense = ({ onAddExpense }) => {
  const [formOpened, setFormOpened] = useState(false);

  const newExpenseButtonClickHandler = () => setFormOpened(true);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    onAddExpense(expenseData);
  };

  const cancelExpenseDataHandler = () => setFormOpened(false);

  return (
    <div className="new-expense">
      {formOpened && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancelExpenseData={cancelExpenseDataHandler}
        />
      )}
      {!formOpened && (
        <NewExpenseButton
          type="button"
          text="Add New Expense"
          onClick={newExpenseButtonClickHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
