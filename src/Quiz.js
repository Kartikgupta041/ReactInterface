import React, { useState } from 'react'

const questionData = [{questionText:'What is the capital of France?',
answerOptions:[
    {answerText:'New York' , isCorrect: false},
    {answerText:'London' , isCorrect: false},
    {answerText:'Paris' , isCorrect: true},
    {answerText:'Dublin' , isCorrect: false},]},
{questionText:'Who is CEO of Tesla?',
answerOptions:[
    {answerText:'Jeff Bezos' , isCorrect: false},
    {answerText:'Elon Musk' , isCorrect: true},
    {answerText:'Bill Gates' , isCorrect: false},
    {answerText:'Tony Stark' , isCorrect: false},]},
{questionText:'What is 2 times 3',
answerOptions:[
        {answerText:'9' , isCorrect: false},
        {answerText:'4' , isCorrect: false},
        {answerText:'8' , isCorrect: false},
        {answerText:'6' , isCorrect: true},]}]

export default function Quiz() {
    const[currentQuestion, setCurrentQuestion] = useState(0)
    const[score, setScore] = useState(0)

    const checkAnswer = (ans) =>{
        if(ans){
            setScore(score+1)
        }
        if(currentQuestion + 1 < questionData.length)
        {
            setCurrentQuestion(currentQuestion + 1)
        }
        else{
            alert('You have Finished the Quiz! Your score is: ' + (score + (ans? 1:0)))
        }
    }
        
  return (
    <div>
        <h2>Question {currentQuestion + 1}/{questionData.length}</h2>
        <h1>{questionData[currentQuestion].questionText}</h1>
        {questionData[currentQuestion].answerOptions.map((m,i) => (
            <button key ={i} onClick ={()=>checkAnswer(m.isCorrect)}> {m.answerText} </button>
            
        ))}
    </div>
  )
}
