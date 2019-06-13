//Global Attributes

var counter = setInterval(timer, 1000);
var count = 30;
let score = 0;
let currentQuestion = 0;


let questions = [
    {
        title: "Who does Ricky Marry?",
        answers: ["lucy", "rig driver", "cheesebrugers", "crepes"],
        correct: 0
    },
    {
        title: "Who does Ray Do?",
        answers: ["lucy", "rig driver", "cheesebrugers", "crepes"],
        correct: 1

    },
    {
        title: "Who does Ricky Eat?",
        answers: ["lucy", "rig driver", "cheesebrugers", "crepes"],
        correct: 2

    },
    {
        title: "Who does Ricky Marry?",
        answers: ["lucy", "rig driver", "cheesebrugers", "crepes"],
        correct: 3

    },
];


//Functions

$(document).ready(function () {
   // $('.results').hide();
    $('.start a').click(function () {
        $('.start').hide();
        
     //   $('.results').show();
        $('.quiz-section').show();
        showQuestion();
        
    });

    $('.quiz-section ul').on("click", 'li' , function () {
        $('.highlight').removeClass('highlight');
        $(this).addClass('highlight');

    });

    $('.quiz-section a').click(function(e){
        e.preventDefault();
        if($('li.highlight').length) {
            let guess = parseInt($('li.highlight').attr('id'));
            checkAnswer(guess);
            console.log(guess)
        
        } else {
            alert('Please selected an option');
        } 

    });

});

// Shows the first question

function showQuestion() {
    let question = questions[currentQuestion];
    $('#paragraph-question').text(question.title);
    $('.quiz-section ul').html('');
    console.log(question.title);
    for (var i = 0; i < question.answers.length; i++) {
        $('.quiz-section ul').append("<li id='" + i + "'>" + question.answers[i] + "</li>");

    }
}


//Checking ansers against choices
function checkAnswer(guess){
    let question = questions[currentQuestion];
    if(question.correct === guess) {
        score++;
    }
    currentQuestion++;
    if(currentQuestion >= questions.length){
       showResults();
       $('#clock').hide(); 
    }else{
    showQuestion();
    }
}
//Show Results
function showResults() {
    $('.quiz-section').hide();
    $('.results').show();
    $('.results h4').text("Congrats you scored " + score + " out of 4!");
  

}

//Page reload/ cop out
function reloadPage(){
    location.reload(true);
}
// Timer

function timer() {

    count = count - 1;
    if (count <= -1) {
        clearInterval(counter);
        return;
    }

    document.getElementById("clock").innerHTML = count;
}


