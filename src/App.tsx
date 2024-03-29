import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Difficulty, FetchQuizQuestions, QuestionState } from "./API";

//components

import QuestionCard from "./components/questionCard/questionCard";
import { GlobalStyle } from "./App.styles";
import { StartBTN, StyledH1 } from "./components/styled/h1";
import StyledP from "./components/styled/p";
import NextBtn from "./components/styled/nextBTN";

const TOTAL_QUESTIONS = 10;

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

function App() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const [color, setColor] = useState<string>("#b5deff");

  console.log(questions);
  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);
    const newQuestions = await FetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY
    );

    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      //change color
      setColor("#EB92BE");
      //users answer
      const answer = e.currentTarget.value;
      //check answer against current answer
      const correct = questions[number].correct_answer === answer;
      //add score if answer is correct
      if (correct) setScore((prevScore) => prevScore + 1);
      //save answer in the array for user answers
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };

  const nextQuestion = () => {
    //move on to the next question if not the last question
    const nextQuestion = number + 1;
    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
    }
  };

  return (
    <>
      <GlobalStyle />
      <div className="App">
        <StyledH1>React Quiz</StyledH1>
        {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
          <StartBTN className="start" onClick={startTrivia}>
            Start
          </StartBTN>
        ) : null}
        {!gameOver ? <StyledP className="score">Score:{score}</StyledP> : null}
        {loading && <StyledP>Loading Questions ....</StyledP>}
        {!loading && !gameOver && (
          <QuestionCard
            color={color}
            questionNo={number + 1}
            totalQuestions={TOTAL_QUESTIONS}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer}
          />
        )}
        {!gameOver &&
        !loading &&
        userAnswers.length === number + 1 &&
        number !== TOTAL_QUESTIONS - 1 ? (
          <NextBtn className="next" onClick={nextQuestion}>
            Next Question
          </NextBtn>
        ) : null}
      </div>
    </>
  );
}

export default App;
