import "../Expenses/ExpenseItem.css";
import ExpensDate from "./ExpenseDate";
import Card from "../UI/Card";
import React from "react";

function ExpenseItem(props: any) {
  return (
    <li>
      <Card className="expense-item">
        <ExpensDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
        </div>
        <div className="expense-item__price">Rs {props.amount}</div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
