function Quiz(questions){

  this.score = 0;
  this.questions = questions;
  this.questionIndex = 0;

}

Quiz.prototype.getQuestionIndex = function() {

  return this.questions[this.questionIndex];

}

Quiz.prototype.isEnded = function() {

  return this.questionIndex === this.questions.length;

}

Quiz.prototype.isCorrect = function(answer) {

    console.log("I have been called");

   if(this.getQuestionIndex.correctAnswer == answer){
    console.log("correct!");
     this.score++;
   }

   this.questionIndex++;
}
