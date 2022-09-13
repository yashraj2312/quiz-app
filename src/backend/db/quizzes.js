import {
  cprogramming,
  cricket,
  quizOne,
  pythonprogramming,
  mathquiz,
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
    quizImage: quizOne,
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

  // {
  //   _id: "1",
  //   title: "Basic General Knowledge Quiz 2",
  //   totalScore: 75,
  //   quizImage: quizOne,
  //   categoryName: "General Knowledge",
  //   description: "Quizes based on General Knowledge",
  //   mcqs: [
  //     {
  //       _id: "1",
  //       question: "Where was the first Engineering College of India located?  ",
  //       options: ["Bombay", "Roorkee", "Varanasi", "Calcutta"],
  //       answer: "Roorkee",
  //     },
  //     {
  //       _id: "2",
  //       question: "Which Indian state has a Large number of Loksabha Seats?",
  //       options: ["Madhya pradesh", "Uttar Pradesh", "Tamilnadu", "Rajasthan"],
  //       answer: "Uttar Pradesh",
  //     },
  //     {
  //       _id: "3",
  //       question: "The Presiding Chairman of the Lok Sabha is the following",
  //       options: [
  //         "Prime Minister",
  //         "President",
  //         "Vice President",
  //         "Elected from the Lok Sabha Members",
  //       ],
  //       answer: "Elected from the Lok Sabha Members",
  //     },
  //     {
  //       _id: "4",
  //       question: "District Judges in a State are appointed by the",
  //       options: [
  //         "Governor",
  //         "Prime Minister",
  //         "Financial Minister",
  //         "Chief Judge",
  //       ],
  //       answer: "Governor",
  //     },
  //     {
  //       _id: "5",
  //       question:
  //         "Which of the following is not a basic feature of the Indian Constitution?",
  //       options: [
  //         "Federal Government",
  //         "Presidential Government",
  //         "Parliamentary Government",
  //         "Independence of Judiciary",
  //       ],
  //       answer: "Presidential Government",
  //     },
  //   ],
  // },

  {
    _id: "2",
    title: "Tech",
    totalScore: 75,
    quizImage: cprogramming,
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

  // {
  //   _id: "2",
  //   title: "Python Programming",
  //   totalScore: 75,
  //   quizImage: pythonprogramming,
  //   categoryName: "Programming",
  //   description: "Quizes based on Python Programming",
  //   mcqs: [
  //     {
  //       _id: "1",
  //       question: "Is Python code compiled or interpreted?",
  //       options: [
  //         "Python code is both compiled and interpreted",
  //         "Python code is neither compiled nor interpreted",
  //         "Python code is only compiled",
  //         "Python code is only interpreted",
  //       ],
  //       answer: "Python code is neither compiled nor interpreted",
  //     },
  //     {
  //       _id: "2",
  //       question: "Which keyword is used for function in Python language?",
  //       options: ["Function", "Def", "Fun", "Define"],
  //       answer: "Def",
  //     },
  //     {
  //       _id: "3",
  //       question:
  //         "Which of the following character is used to give single-line comments in Python?",
  //       options: ["//", "#", "!", "/*"],
  //       answer: "#",
  //     },
  //     {
  //       _id: "4",
  //       question: "In which language is Python written?",
  //       options: ["C++", "C", "Java", "None of these"],
  //       answer: "C",
  //     },
  //     {
  //       _id: "5",
  //       question: "What are the two main types of functions in Python?",
  //       options: [
  //         "System function",
  //         "Custom function",
  //         "Built-in function & User defined function",
  //         "User function",
  //       ],
  //       answer: "Built-in function & User defined function",
  //     },
  //   ],
  // },

  // {
  //   _id: "3",
  //   title: "Aptitude Quiz",
  //   totalScore: 75,
  //   quizImage: mathquiz,
  //   categoryName: "science and technology",
  //   description: "Quizes based on Aptitude",
  //   mcqs: [
  //     {
  //       _id: "1",
  //       question: "Which one of the following is not a prime number?",
  //       options: ["31", "61", "71", "91"],
  //       answer: "91",
  //     },
  //     {
  //       _id: "2",
  //       question:
  //         "Which one of the following numbers is exactly divisible by 11? ",
  //       options: ["235641", "245642", "315624", "415624"],
  //       answer: "415624",
  //     },
  //     {
  //       _id: "3",
  //       question: "The sum of first 45 natural numbers is: ",
  //       options: ["1035", "1280", "2070", "1289"],
  //       answer: "1035",
  //     },
  //     {
  //       _id: "4",
  //       question: "Which of the following number is divisible by 24 ?",
  //       options: ["35718", "63810", "537804", "3125736"],
  //       answer: "3125736",
  //     },
  //     {
  //       _id: "5",
  //       question: "The smallest 6 digit number exactly divisible by 111 is: ",
  //       options: ["111111", "110011", "100011", "110101"],
  //       answer: "100011",
  //     },
  //   ],
  // },

  // {
  //   _id: "4",
  //   title: "Cricket Quiz",
  //   totalScore: 75,
  //   quizImage: cricket,
  //   categoryName: "Sports",
  //   description: "Quizes based on Cricket",
  //   mcqs: [
  //     {
  //       _id: "1",
  //       question: "The term ‘Beamer’ is associated with:",
  //       options: ["Football", "Hockey", "Cricket", "Chess"],
  //       answer: "Cricket",
  //     },
  //     {
  //       _id: "2",
  //       question:
  //         "What is the distance between the popping crease and the stumps on a cricket pitch?",
  //       options: ["2½ feet  ", "3 feet", "3 ½ feet", "4 feet"],
  //       answer: "4 feet",
  //     },
  //     {
  //       _id: "3",
  //       question: "What is the maximum permitted length of a cricket bat?",
  //       options: ["32 inch", "34 inch", "36 inch", "38 inch"],
  //       answer: "38 inch",
  //     },
  //     {
  //       _id: "4",
  //       question:
  //         "Which of the following Twenty-20 Cricket Rules is not correctly stated?",
  //       options: [
  //         "Each inning has a time limit of 75 minutes. For every over bowled after that, the batting side gets extra 6 runs",
  //         "If a batsman fails to reach the crease within 90 seconds after the fall of wicket, the bowling side gets 5 penalty runs",
  //         "A bowler can bowl a maximum of 6 overs per innings",
  //         "Fielding restrictions are applicable for the first six overs of the innings",
  //       ],
  //       answer: "A bowler can bowl a maximum of 6 overs per innings",
  //     },
  //     {
  //       _id: "5",
  //       question: "Which of the following terms is used only in cricket?",
  //       options: ["Goal", "Centre forward", "Slip", "Net"],
  //       answer: "Slip",
  //     },
  //   ],
  // },
];
