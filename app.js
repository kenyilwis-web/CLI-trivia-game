// Data Structure: Array of Question Objects
const triviaQuestions = [
    {
        question: "what year did titanic sink?",
        possibleAnswers: [1921, 1912, 1905, 1915],
        correctAnswer: '1912',
    },
    {
         question: "what is the largest planet in the unierse?",
         possibleAnswers: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
         correctAnswer: 'Jupiter'
    },
    {
         question: "what is the chemical symbol of water?",
         possibleAnswers: ['H2O', 'O2', 'CO2', 'NaCl'],
         correctAnswer: 'H2O'
    },
    {
         question: "how many continets are in the world'?",
         possibleAnswers: [5, 6, 7, 8],
         correctAnswer: '7'
    },
    {
          question: "how many players are on a standard soccer team'?",
         possibleAnswers: [9, 10, 11, 12],
        correctAnswer: '11',
    },
];
// Game State Variables
let currentQuestionIndex = 0;
let score = 0;
let timer; // Will hold the interval ID for the timer
const TIME_LIMIT = 15; // Seconds per question

function startTimer() {
  let timeLeft = TIME_LIMIT;
  // Clear any existing timer to prevent multiple timers running
  clearInterval(timer); 

  // Set up the new interval
  timer = setInterval(() => {
    // 1. **Display a timer**: Update the timer display element with `timeLeft`.
    
    if (timeLeft <= 0) {
      clearInterval(timer);
      // 2. **Handle timeout**: Automatically treat it as an incorrect answer
      //    and move to the next question.
      provideFeedback(false); 
      // Delay before moving on so user sees the time ran out
      setTimeout(nextQuestion, 1000); 
    }
    
    timeLeft--;
  }, 1000); // 1000 milliseconds = 1 second
}