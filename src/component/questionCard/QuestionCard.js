import React, { useState, useEffect } from "react";
import "./questionCard.css";
import axios from "axios";
import { useAuth } from "../../context/auth-context";
import { useQuiz } from "../../context/quiz-context";
import { ErrorToast } from "../../component";
import { Link, useParams, useNavigate } from "react-router-dom";

const QuestionCard = ({ quiz }) => {
  const { quizId, questionId } = useParams();
  const Navigate = useNavigate();
  const {
    quizDispatch,
    quizState: { currentQuestion, isLoading, questionAnswers },
  } = useQuiz();
  const { token } = useAuth();

  const { question, options, answer } = currentQuestion;

  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          `/api/quizzes/${quizId}/${questionId}`,
          {
            headers: { authorization: token },
          }
        );
        quizDispatch({ type: "SET_QUESTION", payload: response.data.question });
      } catch (error) {
        Navigate("/");
        ErrorToast("Seems like error", error);
      }
    })();
  }, [Navigate, quizDispatch, quizId, questionId, token]);

  const scoreHandler = () => {
    if (questionAnswers[questionId] === answer) {
      quizDispatch({ type: "SET_SCORE" });
    }
    setSelectedOption(null);
  };

  return (
    <>
      {isLoading ? (
        <div className="loading">
          <i className="fas fa-sync fa-spin fa-5x"></i>
        </div>
      ) : (
        <>
          <div className="questions-container">
            <div className="questions-wrapper-container">
              <p className="question">{question}</p>
              <ul className="option-container">
                {options.map((option, index) => (
                  <li
                    key={index}
                    className={`option-btn-style btn-lg
                    ${
                      selectedOption === index
                        ? "option-btn-style-selected"
                        : "option-background-color"
                    }
                    `}
                    onClick={() =>
                      quizDispatch(
                        {
                          type: "SET_QUESTION_ANSWERS",
                          payload: {
                            questionId: questionId,
                            value: option,
                          },
                        },
                        setSelectedOption(index)
                      )
                    }
                  >
                    {option}
                  </li>
                ))}
              </ul>
            </div>

            {Number(questionId) === quiz.mcqs.length ? (
              <Link to={`/result/${quizId}`} onClick={() => scoreHandler()}>
                <button className="btn">Result</button>
              </Link>
            ) : (
              <Link to={`/questions/${quizId}/${Number(questionId) + 1}`}>
                <button className="btn" onClick={() => scoreHandler()}>
                  Next
                </button>
              </Link>
            )}
          </div>
        </>
      )}
    </>
  );
};

export { QuestionCard };
