import {
  categoryOne,
  categoryTwo,
  categoryThree,
  categoryFour,
} from "../../assets";
/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: 1,
    categoryName: "Product",
    description: "Test your Product Accumen",
    categoryImage: categoryOne,
  },
  {
    _id: 2,
    categoryName: "Tech",
    categoryDescription: "Test your Tech Accumen",
    categoryImage: categoryThree,
  },
  // {
  //   _id: 3,
  //   categoryName: "Science and Technology",
  //   categoryDescription: "Quizzes based on History",
  //   categoryImage: categoryTwo,
  // },
  // {
  //   _id: 4,
  //   categoryName: "Sports",
  //   categoryDescription: "Quizzes based on Sports",
  //   categoryImage: categoryFour,
  // },
];
