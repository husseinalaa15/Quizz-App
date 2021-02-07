
let a_answer = document.getElementById("a_answer");
let b_answer = document.getElementById("b_answer");
let c_answer = document.getElementById("c_answer");
let d_answer = document.getElementById("d_answer");

let question = document.getElementById("question");
let submitBtn = document.getElementById("submit");
let currentQuestion = 0 ; 
let score = 0;


let quiz = document.getElementById("quiz");


const quizData = [ 
    {
        question:"How old Am I  ?",
        a:"19",
        b:"20",
        c:"21",
        d:"22",
        correct:"d"
    },
    {
        question:"What is my favourite Drink ?",
        a:"Coffee",
        b:"Cola",
        c:"Tea",
        d:"Juice",
        correct:"c"
    },
    {
        question:"Who is my favourite rapper",
        a:"Eminem",
        b:"Lil Wayne",
        c:"Drake",
        d:"Tupac",
        correct:"b"
    },
    {
        question:"My favourite Tv Show ? ",
        a:"Game of thrones",
        b:"Breaking bad",
        c:"F.R.I.E.N.D.S",
        d:"Sons of Anarchy",
        correct:"c"
    },
    {
        question:"My favourite movie ?",
        a:"Fight Club",
        b:"American History X",
        c:"Friday",
        d:"Her",
        correct:"a"
    }
]

loadQuiz();

function loadQuiz(){
    disSelectAnswers();
    const currentQuizData = quizData[currentQuestion]
    question.innerHTML= currentQuizData.question;

    a_answer.innerText = currentQuizData.a;
    b_answer.innerText = currentQuizData.b;
    c_answer.innerText = currentQuizData.c;
    d_answer.innerText = currentQuizData.d;

}

function getSelect(e){
    
    const allAnswers = quizData[score];
    const correctAnswer= allAnswers.correct;
    const AllChooseItems = document.querySelectorAll(".answer");
    
    let answerRegular = undefined;
    AllChooseItems.forEach(answer => {
        if(answer.checked){
            answerRegular = answer.id;
           
        }
    });

    return answerRegular;
     
    
   
}

function disSelectAnswers(){
    const AllChooseItems = document.querySelectorAll(".answer");

    AllChooseItems.forEach(answer => {
        answer.checked = false
    });
}



submitBtn.addEventListener("click",function(){
    const  answerRegular = getSelect();

    const allAnswers = quizData[score];
    const correctAnswer= allAnswers.correct;
    if(answerRegular){
        if(answerRegular === correctAnswer){
            score++;
            
        }
        currentQuestion++;
        if (currentQuestion < quizData.length){
            loadQuiz();

        }else{
            let quizContainer = document.querySelector(".quiz-container");

            if (score === 5 ){
                quizContainer.style.backgroundColor = "#96bb7c"
                quizContainer.style.color = "white"

            }
            if (score === 4 ){
                quizContainer.style.backgroundColor = "#f2a154"
                quizContainer.style.color = "white"

            }
            if (score === 3 ){
                quizContainer.style.backgroundColor = "#aee1e1"
                quizContainer.style.color = "white"

            }
            if (score === 2 ){
                quizContainer.style.backgroundColor = "#f5d782"
                quizContainer.style.color = "white"

            }
            if (score === 1  ){
                quizContainer.style.backgroundColor = "#a20a0a"
                quizContainer.style.color = "white"

            }
            quiz.innerHTML= `<h2> you answered correctly at ${score} / ${quizData.length} questions. </h2> 
            <button onclick="location.reload()">Re-Answer</button>`;
        }
    

    }

  
    
    
})