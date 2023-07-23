import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });
  // const [enteredTitle, setEnteredTitle] = useState("");
  // const [enteredAmount, setEnteredAmount] = useState("");
  // const [enteredDate, setEnteredDate] = useState("");
  const titleChangeHandler = (event) => {
    console.log(userInput);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });

    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    });
  };

  const amountChangeHandler = (event) => {
    console.log(userInput);
    setUserInput((prevState) => {
      return { ...prevState, enteredAmount: event.target.value };
    });
  };

  const dateChangeHandler = (event) => {
    console.log(userInput);
    setUserInput((prevState) => {
      return { ...prevState, enteredDate: event.target.value };
    });
  };

  const inputChangeHandler = (identifier, value) => {
    console.log(userInput);
    if (identifier == "title") {
      setUserInput((prevState) => {
        return { ...prevState, enteredTitle: value };
      });
    } else if (identifier == "amount") {
      setUserInput((prevState) => {
        return { ...prevState, enteredAmount: value };
      });
    } else if (identifier == "date") {
      setUserInput((prevState) => {
        return { ...prevState, enteredDate: value };
      });
    }
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={(event) =>
              inputChangeHandler("title", event.target.value)
            }
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={(event) =>
              inputChangeHandler("amount", event.target.value)
            }
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={(event) => inputChangeHandler("date", event.target.value)}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expence</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
