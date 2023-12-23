import React from "react";
import "./Quiz.css";
import data from "./Assets/data";

function Quiz() {
  let [index, setIndex] = React.useState(0);
  let [question, setQuestion] = React.useState(data[index]);

  return (
    <div className="container">
      <h1>Quiz App</h1>
      <hr />
      <h2>
        {index + 1}. {question.question}
      </h2>
      <ul>
        <li>{question.option1}</li>
        <li>{question.option2}</li>
        <li>{question.option3}</li>
        <li>{question.option4}</li>
      </ul>
      <button>Next</button>
      <div className="index">1 of 5 questions</div>
    </div>
  );
}

export default Quiz;
