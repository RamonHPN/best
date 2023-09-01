// scoreCalculator.js

const calculateScore = (currentQuestion, selectedOption) => {
    const correctAnswerIndex = currentQuestion.answer;
    
    if (selectedOption === correctAnswerIndex) {
      return 1; 
    } else {
      return -1; 
    }
  };
  
  export default calculateScore;
  