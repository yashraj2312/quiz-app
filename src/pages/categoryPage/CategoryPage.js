import React, { useEffect } from "react";
import "./categoryPage.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ErrorToast } from "../../component";
import { useQuiz } from "../../context/quiz-context";

const CategoryPage = () => {
  const Navigate = useNavigate();
  const {
    quizDispatch,
    quizState: { category },
  } = useQuiz();

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/categories");
        quizDispatch({
          type: "SET_CATEGORY",
          payload: response.data.categories,
        });
      } catch (error) {
        Navigate("/");
        ErrorToast("Seems like error", error);
      }
    })();
  }, [Navigate, quizDispatch]);

  return (
    <>
      <div className="category-title">Select Category</div>
      <div className="category-container">
        {category.map((category) => (
          <div
            key={category._id}
            className="category-card"
            onClick={() => Navigate(`/category/${category._id}`)}
          >
            <img
              className="image-responsive"
              src={category.categoryImage}
              alt="category"
            />
            <div className="category-name">
              <div className="container-text">{category.categoryName}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export { CategoryPage };
