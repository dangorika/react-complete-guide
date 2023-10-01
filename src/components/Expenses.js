import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";

function Expenses({ expenses }) {
  const expenseList = expenses.map(({ id, title, amount, date }) => (
    <ExpenseItem key={id} title={title} amount={amount} date={date} />
  ));
  return (
    <div className="expenses">{expenseList}</div>
  );
}

export default Expenses;
