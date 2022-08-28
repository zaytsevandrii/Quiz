import { useState } from 'react';
import './index.scss';

const questions = [
  {
    title: 'React - is ... ?',
    variants: ['library', 'framework', 'application'],
    correct: 0,
  },
  {
    title: 'The component is ... ',
    variants: ['application', 'part of an application or page', 'part of an application'],
    correct: 1,
  },
  {
    title: 'What is JSX?',
    variants: [
      'This is plain HTML',
       'This is a function',
       'This is the same HTML, but with the ability to execute JS code',
    ],
    correct: 2,
  },
];

function Result({correctAnswer}) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>You guessed {correctAnswer} correct {correctAnswer==1?'answer':'answers'} out of {questions.length}</h2>
      <a href='/'> <button>Try again</button></a>
    </div>
  );
}

function Game({question,checkOptions,step}) {
  const percentage=(step/questions.length)*100
  console.log(percentage)
  return (
  
    <>
      <div className="progress">
        <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((text,index)=>
          <li onClick={()=>checkOptions(index)} key={index}>{text}</li>
          )}
      </ul>
    </>
  );
}

function App() {
const [step,setStep]=useState(0)
const [correctAnswer,setCorrectAnswer]=useState(0)
const question=questions[step]
const checkOptions=(index)=>{
  setStep(step+1)
  if(index===question.correct){
    setCorrectAnswer(correctAnswer+1)
  }
}

  return (
    <div className="App">
      {step!==questions.length?
        <Game question={question} step={step} checkOptions={checkOptions}/>
      :
      <Result correctAnswer={correctAnswer}/>}
    </div>
  );
}

export default App;
