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
    $('.start a').click(function () {
        $('.start').hide();
        $('.quiz-section').show();
        showQuestion();
        timer();
    });

    $('.quiz-section ul').on("click", 'li' , function () {
        $('.highlight').removeClass('highlight');
        $(this).addClass('highlight');

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


function showAnswer() {
    var answer = questions.answer[1];
    console.log(answer);


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


