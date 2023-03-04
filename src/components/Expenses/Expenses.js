import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpenseList from "./ExpensesLIst";
import ExpensesChart from "./ExpensesChart"

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2022");

  const filterChangeHandler = (yearSelected) => {
    setFilteredYear(yearSelected);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear
  })

//Expense controls ExpenseFilter state as in ExpenseFilter just shows the current state
//but the parent (Expense) handles setting and changing, called controlled/stateful/smart components
//{...} used to run js in html, map makes new array from original array with something applied to each elem
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpenseList items={filteredExpenses}/>
      </Card>
    </div>
  );
}

export default Expenses;
