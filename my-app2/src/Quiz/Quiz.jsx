import React, { useRef } from "react";
import "./Quiz.css";
// import data from "./assets/Data";

function Quiz() {
  const data = [
    {
      question: "Which device is required for the Internet connection?",
      option1: "Modem",
      option2: "Router",
      option3: "LAN Cable",
      option4: "Pen Drive",
      ans: 1,
    },
    {
      question: "Which continent has the highest number of countries?",
      option1: "Asia",
      option2: "Europe",
      option3: "North America",
      option4: "Africa",
      ans: 4,
    },
    {
      question: "Junk e-mail is also called?",
      option1: "Spam",
      option2: "Fake",
      option3: "Archived",
      option4: "Bin",
      ans: 1,
    },
    {
      question: "A computer cannot BOOT if it does not have the?",
      option1: "Application Software",
      option2: "Internet",
      option3: "Operating System",
      option4: "Mouse",
      ans: 3,
    },
    {
      question: "First page of Website is termed as?",
      option1: "Index Page",
      option2: "Homepage",
      option3: "Sitemap",
      option4: "Pen Drive",
      ans: 2,
    },
  ];
  let [index, setIndex] = React.useState(0);
  let [question, setQuestion] = React.useState(data[index]);
  let [lock, setLock] = React.useState(false);
  let [score, setScore] = React.useState(0);
  let [result, setResult] = React.useState(false);
  let Option1 = useRef(null);
  let Option2 = useRef(null);
  let Option3 = useRef(null);
  let Option4 = useRef(null);

  let option_array = [Option1, Option2, Option3, Option4];

  const checkAns = (e, ans) => {
    if (lock === false) {
      if (ans === question.ans) {
        e.target.classList.add("correct");
        setLock(true);
        setScore((prev) => prev + 1);
      } else {
        e.target.classList.add("wrong");
        setLock(true);
        option_array[question.ans - 1].current.classList.add("correct");
      }
    }
  };

  const next = () => {
    if (lock === true) {
      if (index === data.length - 1) {
        setResult(true);
        return 0;
      }
      setIndex(++index);
      setQuestion(data[index]);
      setLock(false);
      option_array.map((option) => {
        option.current.classList.remove("correct");
        option.current.classList.remove("wrong");
        return null;
      });
    }
  };
  const reset = () => {
    setIndex(0);
    setQuestion(data[0]);
    setLock(false);
    setScore(0);
    setResult(false);
  };

  return (
    <div className="container">
      <h1>Quiz App</h1>
      {result ? (
        <></>
      ) : (
        <>
          <hr />
          <h2>
            {index + 1}. {question.question}
          </h2>
          <ul>
            <li
              ref={Option1}
              onClick={(e) => {
                checkAns(e, 1);
              }}
            >
              {question.option1}
            </li>
            <li
              ref={Option2}
              onClick={(e) => {
                checkAns(e, 2);
              }}
            >
              {question.option2}
            </li>
            <li
              ref={Option3}
              onClick={(e) => {
                checkAns(e, 3);
              }}
            >
              {question.option3}
            </li>
            <li
              ref={Option4}
              onClick={(e) => {
                checkAns(e, 4);
              }}
            >
              {question.option4}
            </li>
          </ul>
          <button onClick={next}>Next</button>
          <div className="index">
            {index + 1} of {data.length} questions
          </div>
        </>
      )}
      {result ? (
        <>
          <h2>
            You Scored {score} out of {data.length}
          </h2>
          <button onClick={reset}>Reset</button>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Quiz;