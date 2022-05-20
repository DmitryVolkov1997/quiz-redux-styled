import {useSelector} from "react-redux";
import styled from "styled-components";
import ActiveQuiz from "../ActiveQuiz/ActiveQuiz";
import FinishedQuiz from "../FinishedQuiz/FinishedQuiz";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 1;
  padding-top: 10rem;
  background-color: var(--colors-bg);
`;

const QuizTitle = styled.h1`
  font-size: var(--fs-md);
  font-weight: var(--fw-bold);
  margin: 0rem 0rem 2rem 0rem;
`;

const Box = styled.div`
  max-width: 75rem;
  width: 100%;
  text-align: center;
`;

const Quiz = () => {
    const {quiz = [], activeQuestion, answerState, isFinishedQuiz, results} = useSelector(state => state.quiz);

    return (
      <Wrapper>
          <Box>
              <QuizTitle>Ответьте на все вопросы</QuizTitle>
              {
                  !isFinishedQuiz ?
                    <ActiveQuiz answers={quiz[activeQuestion].answers} question={quiz[activeQuestion].question}
                                quizLength={quiz.length}
                                answerNumber={activeQuestion + 1} state={answerState}/> :
                    <FinishedQuiz results={results} quiz={quiz}/>
              }
          </Box>
      </Wrapper>
    );
};

export default Quiz;
