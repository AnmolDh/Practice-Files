import { useState } from "react";
import "./ExpenseForm.css";

export default function (props) {
  // const [enteredTitle, setEnteredTitle] = useState("");
  // const [enteredAmount, setEnteredAmount] = useState("");
  // const [enteredDate, setEnteredDate] = useState("");
  // const titleChangeHandler = (e) => {
  //   const val = e.target.value;
  //   setEnteredTitle(val);
  // };
  // const amountChangeHandler = (e) => {
  //   const val = e.target.value;
  //   setEnteredAmount(val);
  // };
  // const dateChangeHandler = (e) => {
  //   const val = e.target.value;
  //   setEnteredDate(val);
  // };
  const [enteredInput, setEnteredInput] = useState({
    title: "",
    amount: "",
    date: ""
  });

  const inputHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setEnteredInput((prev) => {
      return {
        ...prev,
        [name]: value
      };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    props.onSaveExpense(enteredInput);
    setEnteredInput({
      title: "",
      amount: "",
      date: ""
    });
    props.handleShowForm();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__contorls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={inputHandler}
            name="title"
            value={enteredInput.title}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={inputHandler}
            name="amount"
            value={enteredInput.amount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-01-01"
            onChange={inputHandler}
            name="date"
            value={enteredInput.date}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={props.handleShowForm}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
