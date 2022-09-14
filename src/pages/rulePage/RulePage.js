import React from "react";
import "./rulePage.css";
import { useNavigate, useParams } from "react-router-dom";

const RulePage = () => {
  const Navigate = useNavigate();
  const { quizId } = useParams();

  return (
    <>
      <div>
        <div className="category-title">Note</div>
        <div className="rule-container">
          <div className="rule-wrapper-container">
            <ul className="list-style">
              <li className="list-element">
                Total 5 questions.
              </li>
              <li className="list-element">
                Right answer fetch you 15 marks.
              </li>
              <li className="list-element">
                There ain't any negative marking.
              </li>
            </ul>

            <button
              onClick={() => Navigate(`/questions/${quizId}/${1}`)}
              className="btn btn-primary"
            >
              Let's Tunnel !
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export { RulePage };
