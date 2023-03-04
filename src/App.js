import Expenses from "./components/Expenses/Expenses.js";
import NewExpense from "./components/NewExpense/NewExpense.js";
import { useState } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
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


function App() {
  //sets init array values to hardcoded ones above then we add to that array with state
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)
  //how to update state when dependent on prev value in state
  const addExpenseHandler = (expense) => {
    //prevState var is latest snapshot (values) of the variables, use if state depends on previous state, spread operator ...prevState
    //pass in anony func to setFunction ex: setAmount((prevState)=>{...prevState, updateExpressionHere })
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
