import React from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "TV",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const addExpenseHandler = (expense: any) => {
    console.log('app.tsx');
    console.log(expense)
  }

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}/>
      <div className="expenses">
        <Expenses data={expenses} />
      </div>
    </div>
  );
}

export default App;
