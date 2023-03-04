import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = (props) => {
  /*
    useState tells react to rerender the component which shows new values
    called a hook (all hooks start with 'use')
    cannot be called in nested component functions
    returns array, first value is value and second is function to update that value 

    init to empty string because event.target.value is a string
  */
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  //event object sent automatically from onChange
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  //auto get event object
  const submitHandler = (event) => {
    //prevents default, page doesnt reload or actually send req over web
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    //how to pass data to parent, cant skip components and go up 2
    props.onSaveExpenseData(expenseData);
    //resets data fields to empty, 2 way binding, good with forms
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  //onSubmit={} = listens for form submission, built in
  //two way binding value={enteredDate}
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
