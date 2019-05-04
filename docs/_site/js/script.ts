var questions = [
  {
    prompt: "When was League of Legends released? \n (a) 2008 \n (b) 2009 \n 
            (c) 2010 \n (d) 2011",
    answer: "b"

  },
  {
    prompt:"Which tribe do the champions Anivia, Braum, Gragas, Nunu and Tryndamere
            belong to? \n (a) Frostguard\n (b) Avarosan \n (c) Winter's Claw",
    answer: "b"

  }
]

var score = 0;

for (var i = 0; i < questions.length; i++)
{
  // ask question to user and get their response
  var response = window.prompt(questions[i].prompt);

  if(response == questions[i].answer)
  {

    score++;
    alert("Your answer is correct!");

  } else
  {

    alert("Your answer is incorrect!");

  }
}

alert("You got" + score + "/" + questions.length);



