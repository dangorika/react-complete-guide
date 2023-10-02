import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

const Expenses = ({ expenses }) => {
  const expenseList = expenses.map(({ id, title, amount, date }) => (
    <ExpenseItem key={id} title={title} amount={amount} date={date} />
  ));
  return (
    <Card className="expenses">{expenseList}</Card>
  );
}

export default Expenses;
