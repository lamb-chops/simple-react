import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
//allows us to define state to reflect changes
import { useState } from "react";

function ExpenseItem(props) {
  //react hook, set init value, returns 2 value array that contains value itself and func to update
  const [title, setTitle] = useState(props.title);
  const clickHandler = () => {
    setTitle('Updated')
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
