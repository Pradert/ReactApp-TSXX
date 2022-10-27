import Card from "../UI/Card";
import "../Expenses/Expenses.css";
import React, { useState } from "react";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props: any) {
  const [filteredYear, setfilteredYear] = useState('2020');

  const selectedYear = (year: any) => {
    setfilteredYear(year)
    console.log(`Selected Year Is ${year}`)
  }

  const filteredExpenses = props.data.filter((x: any) => x.date.getFullYear().toString() === filteredYear);

  return (
    <div>
      <Card>
        <ExpensesFilter selected={filteredYear} onSelectYear={selectedYear} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
