import React, { useEffect, useState } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
  const [questions,setQuestions] = useState([]) 

  useEffect(() => {
    fetch("http://localhost:3000/questions")
    .then(response => response.json())
    .then(data => setQuestions(data))
  },[]) 

  console.log(questions) 

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions.map(question => {
          return <QuestionItem question={question}/> 
      })}
        
      </ul>
    </section>
  );
}

export default QuestionList;
