//Global Attributes

var counter = setInterval(timer, 1000);
var count = 30;
let score = 0;
let currentQuestion = 0;


let questions = [
    {
        title: "Whats Ricky's father name?",
        answers: ["ricky", "ray", "cyrus", "randy"],
        correct: 1
    },
    {
        title: "Who's Julians arch nemisis?",
        answers: ["ricky", "ray", "cyrus", "randy"],
        correct: 2

    },
    {
        title: "Who's Mr. Laheys secret lover?",
        answers: ["ricky", "ray", "cyrus", "randy"],
        correct: 3

    },
    {
        title: "Who does Lucy maryy?",
        answers: ["ricky", "ray", "cyrus", "randy"],
        correct: 0

    },
];


//Functions

$(document).ready(function () {
    $('.start a').click(function () {
        $('.start').hide();
        $('.quiz-section').show();
        showQuestion();
    });

    $('.quiz-section ul').on("click", 'li', function () { // Adding Highlighted Effect
        $('.highlight').removeClass('highlight'); //Highlight will stay on choices/too fast too see
        $(this).addClass('highlight'); //Adds back class when new new answer is selected

    });

    $('.quiz-section a').click(function (e) {
        e.preventDefault();
        if ($('li.highlight').length) {
            let guess = parseInt($('li.highlight').attr('id'));
            checkAnswer(guess);
            console.log(guess)

        } else {
            alert('Please choose an options!');
        }

    });

});

// Shows the first question

function showQuestion() {
    let question = questions[currentQuestion];
    $('#paragraph-question').text(question.title);
    $('.quiz-section ul').html(''); // Clears li's
    console.log(question.title);

    for (var i = 0; i < question.answers.length; i++) {
        $('.quiz-section ul').append("<li id='" + i + "'>" + question.answers[i] + "</li>"); //Appends new questions to the cleared li's

    }
}


//Checking answers against choices
function checkAnswer(guess) {
    let question = questions[currentQuestion];
    if (question.correct === guess) {
        score++;
        
        
    }
    currentQuestion++;
    if (currentQuestion >= questions.length) {
        showResults();
        $('#clock').hide();
    } else {
        showQuestion();
    }
}
//Show Results
function showResults() {
    $('.quiz-section').hide();
    $('.results').show();
    $('.results h3').text("Congrats you scored " + score + " out of 4!");


}

//Page reload/ cop out
function reloadPage() {
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


