const questions = [
    {
        question: "Quel est le légume que je déteste le plus ?",
        answers:[
            { text: "Les poivrons", correct:true},
            { text: "Mimi-gland", correct:false},
            { text: "Le chou chinois", correct:false},
            { text: "les asperges", correct:false},
        ]
    },
    {
        question: "Je suis un bébé... quoi ?",
        answers:[
            { text: "Minou", correct:true},
            { text: "ange de la mort qui tue", correct:true},
            { text: "patootie, cookie, dookie, cutie", correct:true},
            { text: "feur...", correct:false},
        ]
    },
    {
        question: "Quel est la date de notre couple ?",
        answers:[
            { text: "Le 32 février", correct:false},
            { text: "Le 15 février", correct:true},
            { text: "Le 14 février", correct:false},
            { text: "Le 10 avril", correct:false},
        ]
    },
    {
        question: "Pour quelles raisons, je suis avec toi ?",
        answers:[
            { text: "Ton argent et tes beaux pieds", correct:false},
            { text: "Ton authenticité et ton amour", correct:true},
            { text: "T'es blanc.", correct:false},
            { text: "Tu es de droite ", correct:false},
        ] 
    }
];

const questionElement = document.getElementById("questions");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex =0; 
let score =0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML ="Suivant";
    showQuestions();
}
function showQuestions()
    {
        let currentQuestion = questions[currentQuestionIndex];
        let questionNo = currentQuestionIndex + 1
        questionElement.innerHTML = questionNo + ". " + currentQuestion.
        question;
        currentQuestion.answers.forEach( answer => {
            const button= document.createElement("button");
            button.innerHTML = answer.text;
            button.classList.add("btn");
            answerButton.apprendChild(button);
        });
    }  
startQuiz();