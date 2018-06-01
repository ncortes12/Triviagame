
$("#game").hide();
var triviaQuestions = [
    {
        question: "What mountain range does not border Tucson?",
        answers: [{ answer: "Sierra Madres", correct: true }, { answer: "Santa Catalinas", correct: false },
        { answer: "Rincons", correct: false }, { answer: "Tucson Mountains", correct: false }]
    },

    {
        question: "In what year was Tucson established?",
        answers: [{ answer: "1864", correct: false }, { answer: "1903", correct: false },
        { answer: "1832", correct: false }, { answer: "1775", correct: true }]
    },

    {
        question: "What was the first high school in Tucson?",
        answers: [{ answer: "Rincon High School", correct: false }, { answer: "Tucson High School", correct: true },
        { answer: "Catalina High School", correct: false }, { answer: "Salpointe", correct: false }]
    },

    {
        question: "On average, how many days of sunshine does Tucson get a year?",
        answers: [{ answer: "350", correct: true }, { answer: "300", correct: false },
        { answer: "275", correct: false }, { answer: "200", correct: false }]
    },


];

var correct = 0;
var wrong = 0;
var timer = 180;
var clockRunning = false;

var i = 0;
var counter;


function count() {
    timer--;
    $(".time").text(timer);
}

function run() {
    if (!clockRunning) {
        counter = setInterval(count, 1000);
        clockRunning = true;
        
    }
}

// function timeOut (){
//     if (timer == 0){
//         console.log("i'm working");
//         $("#game").hide();
//         $(".scoreboard").show();
//         $(".scoreboard").append("Correct: " + correct + "<br></br>");
//         $(".scoreboard").append("Wrong: " + wrong + "<br></br>");
//         $(".restart").append("<button>Restart</button>");
        
// }}  I could not get my timeout function to work =(


function game() {

    $(".question").text(triviaQuestions[i].question);
    $(".answer-1").text(triviaQuestions[i].answers[0].answer);
    $(".answer-2").text(triviaQuestions[i].answers[1].answer);
    $(".answer-3").text(triviaQuestions[i].answers[2].answer);
    $(".answer-4").text(triviaQuestions[i].answers[3].answer);

}
function endGame() {
    if (i == 3) {
        $("#game").hide();
        $(".scoreboard").show();
        $(".scoreboard").append("Correct: " + correct + "<br></br>");
        $(".scoreboard").append("Wrong: " + wrong + "<br></br>");
        $(".restart").append("<button>Restart</button>");
        
    }
    else {
        i++;
       game();
    }
}



function checker() {
    $(".answer-1").on("click", function () {
        if ((triviaQuestions[i].answers[0].correct) == true) {
            correct++;
            endGame();
        }
        else {
            wrong++;
            endGame();
        }
    });

    $(".answer-2").on("click", function () {
        if ((triviaQuestions[i].answers[1].correct) == true) {
            correct++;
            endGame();
        }
        else {
            wrong++;
            endGame();
        }
    });

    $(".answer-3").on("click", function () {
        if ((triviaQuestions[i].answers[2].correct) == true) {
            correct++;
            endGame();
        }
        else {
            wrong++;
            endGame();
        }
    });
    $(".answer-4").on("click", function () {
        if ((triviaQuestions[i].answers[3].correct) == true) {
            correct++;
            endGame();
        }
        else {
            wrong++;
            endGame();
        }
    });

};

$(".start").on("click", function () {
    $("#game").show();
    game();
    run();
    checker();
   
})

$(".restart").on("click", function () {
    $("#game").show();
    $(".scoreboard").empty();
    $(".restart").empty();
    i = 0;
    timer = 180;
    game();
    run();
   ;
  
})







