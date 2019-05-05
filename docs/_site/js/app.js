function populate() {
    if (quiz.isEnded()) {
        showScore();
    }
    else {
        // show the next question
        var text = "";
        var question_1 = quiz.getQuestionIndex();
        $("#questions").text(question_1.text);
        var _loop_1 = function (i) {
            $("#button" + (i + 1)).text(question_1.choices[i]);
            $("#button" + (i + 1)).click(function () {
                // use the isCorrect function from controller to check
                // the user's guess
                quiz.isCorrect(question_1.choices[i]);
                populate();
            });
        };
        // show the choices to choose
        for (var i = 0; i < question_1.choices.length; i++) {
            _loop_1(i);
        }
    }
}
function showScore() {
    var totalScoreHTML = "<h1> Result </h>";
    totalScoreHTML += "<h2 id = 'score'> Your score: " + quiz.score + "</h2>";
}
var questions = [
    new Question("When was League of Legends released?", ["2008", "2009", "2010", "2011"], "2009"),
    new Question("Which tribe do the champions Anivia, Braum, Gragas, Nunu and Tryndamere belong to?", ["Frostguard", "Avarson", "Winter's Claw", "Storm Raiders"], "Avarson")
];
var quiz = new Quiz(questions);
$(document).ready(function () {
    populate();
});
