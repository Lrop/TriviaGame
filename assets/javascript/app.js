var trivia = {
    correct: 0,
    incorrect: 0,
    unasnwered: 0,
    currentRound: 0,
    timer: 25,
    timerOn: false,
    timerId : '',

    questions: {
        questionOne: 'Who does Ricky marry?',
        questionTwo: 'What was Rays job before the accident',
        questionThree: 'What is Randys favorite food',
        questionFour: 'Who most resembles a Cave Man',
        questionFive: 'In series One, who tries to take over the park',
        questionSix: 'What is the name of Bubbles evil doll',
        questionSeven: 'How many times was Ricky shot(arrows,bullet,spears,projectiles etc',
        questionEight: 'Where did Ricky sleep for most of the show',
        questionNine: 'On average how many F-bombs are said per episode',
        QuestionTen: 'Rays ends up spending his last few years lving where?',
    },

    options: {
        questionOne: ['Lucy','Barbra', 'Sarah', 'Trinity'],
        questionTwo: ['Hairdresser', 'Did not have one','Rig Driver','Cop'],
        questionThree: ['Streak', 'Ribs', 'CheeseBurgers', 'Sandwhiches'],
        questionFour: ['Bubbles', 'Julian', 'Sam Losco', 'Trevor'],
        questionFive: ['Denis', 'Terry', 'J-ROC', 'Cyrus'],
        questionSix: ['Conky', 'Chuckie', 'Candy', "Corkie"],
        questionSeven: ['23', '7', '41', 'Too many to count'],
        questionEight: ['Car', 'House', 'Shed','His bed duh'],
        questionNine: ['4', '46', '13','22'],
        QuestionTen: ['The Dump', 'On the Road', 'With his family', 'Hes stil alive'],
    },

    answers: {
        questionOne: 'Lucy',
        questionTwo: 'Rig Driver',
        questionThree: 'CheeseBurgers',
        questionFour: 'Sam Losco',
        questionFive: 'Cyrus',
        questionSix: 'Conky',
        questionSeven:'Too many to count',
        questionEight: 'Car',
        questionNine: '46',
        QuestionTen: 'The Dump',
    }
}