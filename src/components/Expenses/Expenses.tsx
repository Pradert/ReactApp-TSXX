import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "../Expenses/Expenses.css";
import React from "react";

function Expenses(props: any) {
  return (
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
  );
}

export default Expenses;
