import {
  productOp,
  techOp,
} from "../../assets";
/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const quizzes = [
  {
    _id: "1",
    title: "Product Quiz",
    totalScore: 75,
    quizImage: productOp,
    categoryName: "Product",
    description: "Test your Product Accumen",
    mcqs: [
      {
        _id: "1",
        question: "What does North Star mean in Product?",
        options: ["The Product Vision", "The Star Polaris in Ursae Minoris", "A type of data collection tool"],
        answer: "The Product Vision",
      },
      {
        _id: "2",
        question:
          "What does MLP stand for?",
        options: [
          "Minimum Likable Project",
          "Maximum Lean Product",
          "Minimum Lovable Product",
        ],
        answer: "Minimum Lovable Product",
      },
      {
        _id: "3",
        question: "Designing aesthetic elements and overall layouts of a Product is a job generally done by a ____",
        options: [
          "UX Designer",
          "UI Designer",
          "Product Designer",
        ],
        answer: "UI Designer",
      },
      {
        _id: "4",
        question:
          "A diagram that shows visually the stages a customer goes through when using your product, from the trigger all the way through to resolution” is the definition of:",
        options: ["User Flow", "Product Roadmap", "Customer Journey Map"],
        answer: "Customer Journey Map",
      },
      {
        _id: "5",
        question: "Which of these is not a type of tech debt?",
        options: ["Bit rot tech debt", "Accidental design debt", "Market fit debt"],
        answer: "Market fit debt",
      },
    ],
  },

  {
    _id: "2",
    title: "Tech",
    totalScore: 75,
    quizImage: techOp,
    categoryName: "Tech",
    description: "Test your Tech Accumen",
    mcqs: [
      {
        _id: "1",
        question: "What does the 'toLocateString()' method do in JS?",
        options: ["Returns a localised object representation.",
        "Returns a parsed string.",
        "Returns a localized string representation of an object.",
        "None of the above."],
        answer: "Returns a localized string representation of an object.",
      },
      {
        _id: "2",
        question:
          "The process in which an object or data structure is translated into a format suitable for transferral over a network, or storage is called?",
        options: ["Object Serialization", "Object Encapsulation", "Object Inheritance", "None of the above"],
        answer: "Object Serialization",
      },
      {
        _id: "3",
        question:
          "Which function is used to serialize an object into a JSON string in Javascript?",
        options: ["stringify()", "parse()", "convert()", "splice()"],
        answer: "stringify()",
      },
      {
        _id: "4",
        question:
          "Which of the following are closures in Javascript?",
        options: ["Variables", "Functions", "Objects", "All of the above"],
        answer: "All of the above",
      },
      {
        _id: "5",
        question:
          "Which of the following are not server-side Javascript objects?",
        options: ["Date", "File Upload", "Function", "All of the above"],
        answer: "All of the above",
      },
    ],
  },
];
