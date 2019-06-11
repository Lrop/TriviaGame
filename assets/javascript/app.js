//Global Attributes

var counter=setInterval(timer, 1000);
var count= 30;
let score = 0;
let currentQuestion = 0;



let questions = [
{
    title: "Who does Ricky Marry",
    answers: ["lucy", "rig driver", "cheesebrugers", "crepes"],
    correct: 0
},
{
    title: "Who does Ray Do",
    answers: ["lucy", "rig driver", "cheesebrugers", "crepes"],
    correct: 1

},
{
    title: "Who does Ricky Eat",
    answers: ["lucy", "rig driver", "cheesebrugers", "crepes"],
    correct: 2

},
{
    title: "Who does Ricky Marry",
    answers: ["lucy", "rig driver", "cheesebrugers", "crepes"],
    correct: 3

},
];




$(document).ready(function(){
    $('.start a').click(function(){
        $('.start').hide();
        $('.quiz-section').show();
        showQuestion();
        timer();
        
    });
});

function showQuestion() {
    let question = questions[currentQuestion];
    $('.paragraph-question').text(question.title);
    $('.quiz-section paragraph-selection').html('');
    console.log(sh)
}


function timer() {
    count=count-1;
    if (count <= -1)
    {
       clearInterval(counter);
       return;  
    }
   document.getElementById("clock").innerHTML= count ;
  }
   







/*
var startBtn = document.getElementById('startBtn');
var count=30;

var counter=setInterval(timer, 1000); //1000 will  run it every 1 second

function timer()
{
  count=count-1;
  if (count <= -1)
  {
     clearInterval(counter);
     return;
     
  }

 document.getElementById("clock").innerHTML=count ; // watch for spelling
}

 function initialize() {

    startBtn.style.display = 'none';

 }
*/


