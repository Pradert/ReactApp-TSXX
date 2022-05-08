import "../Expenses/ExpenseItem.css";
import ExpensDate from "./ExpenseDate";
import Card from "../UI/Card";
import { useState } from "react";
import React from "react";

function ExpenseItem(props: any) {
  const [title, setTilte] = useState(props.title)
  const clickEvent = () => {
    setTilte('Updated!!!!')
    console.log('Updated!!!')
  }


  return (
    <Card className="expense-item">
      <ExpensDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
      </div>
      <div className="expense-item__price">Rs {props.amount}</div>
      <button onClick={clickEvent}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
