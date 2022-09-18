import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

const Fibonacci = () => {
  const [firstNum, firstNumInput] = useState(0);
  const [secondNum, secondNumInput] = useState(1);
  const [fibonacci, fibonacciNumbers] = useState([]);

  const getFibonacciSeries = (event) => {
    event.preventDefault();
    let n1 = Number(firstNum);
    let n2 = Number(secondNum);
    let sum = 0;
    let fibonacciArray = [];
    fibonacciArray.push(n1, n2);

    for (let i = 1; i <= 10; i++) {
      sum = n1 + n2;
      fibonacciArray.push(sum);
      n1 = n2;
      n2 = sum;
    }
    fibonacciNumbers(fibonacciArray);
  };

  let NavigateTo = useNavigate();

  const onClickLogout = () => {
    localStorage.removeItem("userLoggedIn");
    NavigateTo("login");
  };

  return (
    <div className="fib-container">
      <form className="fib-form" onSubmit={getFibonacciSeries}>
        <h1 className="fib-heading">Fibonacci Series</h1>
        <div className="inputContainer">
          <label htmlFor="firstNumber" className="fib-label">
            FIRST NUMBER
          </label>
          <input
            type="number"
            id="firstNumber"
            className="fib-input"
            onChange={(event) => {
              firstNumInput(event.target.value);
            }}
            placeholder="Enter First Number"
            required
          />
        </div>
        <div className="inputContainer">
          <label htmlFor="secondNumber" className="fib-label">
            SECOND NUMBER
          </label>
          <input
            type="number"
            id="secondNumber"
            className="fib-input"
            onChange={(event) => {
              secondNumInput(event.target.value);
            }}
            placeholder="Enter Second Number"
            required
          />
        </div>
        <button type="submit" className="fib-button">
          Get Fibonacci Series
        </button>
      </form>
      <div className="output-container">
        {fibonacci.length === 0 ? (
          ""
        ) : (
          <p className="fib-series">
            Fibonacci Sequence Starting from {firstNum} , {secondNum} is :{" "}
            <br />
            <span className="fib-span">{fibonacci.toString()}</span>
          </p>
        )}
        <button className="logout-btn" onClick={onClickLogout}>
          Log Out
        </button>
      </div>
    </div>
  );
};
export default Fibonacci;
