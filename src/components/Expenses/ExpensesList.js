import ExpenseItem from "./ExpenseItem";

import "./ExpensesList.css";

const ExpensesList = ({ items }) => {
  const expenseList = (
    <ul className="expenses-list">
      {items.map(({ id, title, amount, date }) => (
        <ExpenseItem key={id} title={title} amount={amount} date={date} />
      ))}
    </ul>
  );
  const noExpensesMessage = <h2 class="expenses-list__fallback">No expenses found.</h2>;
  const expensesContent = items.length > 0 ? expenseList : noExpensesMessage;

  return expensesContent;
};

export default ExpensesList;
