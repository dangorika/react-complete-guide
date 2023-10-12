import { useState } from "react";

import NewExpenseButton from "./NewExpenseButton";

import "./ExpenseForm.css";

const ExpenseForm = ({ onSaveExpenseData, onCancelExpenseData }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title,
      amount: +amount,
      date: new Date(date),
    };

    onSaveExpenseData(expenseData);

    setTitle('');
    setAmount('');
    setDate('');
  };

  const cancelHandler = () => {
    onCancelExpenseData();

    setTitle('');
    setAmount('');
    setDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={title} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            value={date}
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <NewExpenseButton type="button" text="Cancel" onClick={cancelHandler} />
        <NewExpenseButton type="submit" text="Add Expense" />
      </div>
    </form>
  );
};

export default ExpenseForm;
