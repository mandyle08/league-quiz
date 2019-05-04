// you need to define a Quiz class
var quiz = new Quiz(questions);

function populate() {
    if (quiz.isEnded()) {
        //showScore();
    }
    else {
        // show the next question
        var element = document.getElementById("questions");
        element.innerHTML = quiz.getQuestionIndex().text;
    }
}
var questions = [
    new Question("When was League of Legends released?", ["2008", "2009", "2010", "2011"], "2009"),
    new Question("Which tribe do the champions Anivia, Braum, Gragas, Nunu and Tryndamere belong to?", ["Frostguard", "Avarson", "Winter's Claw", "Storm Raiders"], "Avarson")
];

// your code needs to go in a document.ready wrapper
$(document).ready(function(){
    populate();
});
