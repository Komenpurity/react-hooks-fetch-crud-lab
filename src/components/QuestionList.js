import React, { useEffect, useState } from "react";
import QuestionItem from "./QuestionItem";
import QuestionForm from "./QuestionForm";

function QuestionList() {
  const [questions,setQuestions] = useState([]) 

  useEffect(() => {
    fetch("http://localhost:3000/questions")
    .then(response => response.json())
    .then(data => setQuestions(data))
  },[]) 

  function handleForm(itemData){
      setQuestions([...questions, itemData]) 
  }

  return (
    <section>
      <h1>Quiz Questions</h1>
      <QuestionForm onAddItem={handleForm}/>
      <ul>{questions.map(question => {
          return <QuestionItem question={question}/> 
      })}
        
      </ul>
    </section>
  );
}

export default QuestionList;
