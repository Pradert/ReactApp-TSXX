import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "../Expenses/Expenses.css";
import React, { useState } from "react";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";

function Expenses(props: any) {
  const [filteredYear, setfilteredYear] = useState('2020');

  const selectedYear = (year: any) => {
    setfilteredYear(year)
    console.log(`Selected Year Is ${year}`)
  }

  return (
    <div>
      <ExpensesFilter selected={filteredYear} selectYear={selectedYear} />
      <Card>
        {props.data.map((item: any) => {
          return (
            <ExpenseItem
              key={item.id}
              title={item.title}
              amount={item.amount}
              date={item.date}
            />
          );
        })}
      </Card>
    </div>
  );
}

export default Expenses;
