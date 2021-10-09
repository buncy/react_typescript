import React, { useState } from "react";
import { AnswerObject } from "../../App";
import Card from "../styled/card";
import CardBTN from "../styled/cardBTN";
import CardsContainer from "../styled/cardsContainer";
import StyledP from "../styled/p";
import QuestionContainer from "../styled/questionCard";
import StyledSpan from "../styled/span";

type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNo: number;
  totalQuestions: number;
  color: string;
};

const QuestionCard: React.FC<Props> = ({
  answers,
  callback,
  question,
  questionNo,
  totalQuestions,
  userAnswer,
  color,
}) => {
  return (
    <QuestionContainer>
      <StyledP className="number">
        Question:{questionNo}/{totalQuestions}
      </StyledP>
      <StyledP margin={1.2} dangerouslySetInnerHTML={{ __html: question }} />
      <CardsContainer>
        {answers.map((answer) => (
          <Card color={color} key={answer}>
            <CardBTN
              disabled={userAnswer ? true : false}
              value={answer}
              onClick={callback}
            >
              <StyledSpan dangerouslySetInnerHTML={{ __html: answer }} />
            </CardBTN>
          </Card>
        ))}
      </CardsContainer>
    </QuestionContainer>
  );
};

export default QuestionCard;
