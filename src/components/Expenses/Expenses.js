import { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

import "./Expenses.css";

const Expenses = ({ expenses }) => {
  const [selectedYear, setSelectedYear] = useState("2020");

  const filteredList = expenses.filter((item) => item.date.getFullYear().toString() === selectedYear);
  
  const yearChangeHandler = (year) => {
    setSelectedYear(year);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={selectedYear}
        onYearChange={yearChangeHandler}
      />
      <ExpensesChart expenses={filteredList} />
      <ExpensesList items={filteredList} />
    </Card>
  );
};

export default Expenses;
