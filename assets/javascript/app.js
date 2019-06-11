//Global Attributes

var counter=setInterval(timer, 1000);
var count= 30;
let score = 0;
let currentQuestion = 0;





let questions = [
{
    title: "Who does Ricky Marry",
    answers: ["lucy","rig driver","cheesebrugers","crepes"],
    correct: 0
},
{
    title: "Who does Ray Do",
    answers: ["lucy","rig driver","cheesebrugers","crepes"],
    correct: 1

},
{
    title: "Who does Ricky Eat",
    answers: ["lucy","rig driver","cheesebrugers","crepes"],
    correct: 2

},
{
    title: "Who does Ricky Marry",
    answers: ["lucy","rig driver","cheesebrugers","crepes"],
    correct: 3

},
];


//Functions

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
    $('#paragraph-question').text = (questions.title);
    $('.quiz-section paragraph-selection').html('');
    console.log(question.title);
}

// Timer
function timer() {
    count=count-1;
    if (count <= -1)
    {
       clearInterval(counter);
       return;  
    }
    
   document.getElementById("clock").innerHTML= count ;
  }
   

