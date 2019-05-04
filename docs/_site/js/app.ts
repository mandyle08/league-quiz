function populate(){

  if(quiz.isEnded()){

    //showScore();

  }else{

    // show the next question
    let text = "";
    let question = quiz.getQuestionIndex();
    $("#questions").text(question.text);
    for(let i = 0; i < question.choices.length; i++) {
        $("#button" + (i + 1)).text(question.choices[i]);
    }
  }

}

var questions = [

  new Question("When was League of Legends released?", ["2008", "2009", "2010", "2011"], "2009"),
  new Question("Which tribe do the champions Anivia, Braum, Gragas, Nunu and Tryndamere belong to?", ["Frostguard", "Avarson", "Winter's Claw", "Storm Raiders"], "Avarson")

];

var quiz = new Quiz(questions);
$(document).ready(function(){
    populate();
});
