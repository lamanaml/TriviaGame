$( document ).ready(function() {

var questionsArray = [
{q: "What ingredient makes bread rise?", a: "Yeast",  choices: ["Manchester", "Birmingham", "London", "Birmingham"]},
{q: "What is the main ingredient used in guacamole?", a: "Avocado",  choices: ["Manchester", "Birmingham", "London", "Birmingham"]},
{q: "What food does the Giant Panda mainly eat?", a: "Bamboo",  choices: ["Manchester", "Birmingham", "London", "Birmingham"]},
{q: "What is the main ingredient of Hummus?", a: "Chickpeas",  choices: ["Manchester", "Birmingham", "London", "Birmingham"]},
{q: "What is the main export out of Cuba?", a: "Sugar",  choices: ["Manchester", "Birmingham", "London", "Birmingham"]},
{q: "What is Tofu made of?", a: "Soy beans",  choices: ["Manchester", "Birmingham", "London", "Birmingham"]},
{q: "Which country does parmesan cheese originate from?", a: "Italy",  choices: ["Manchester", "Birmingham", "London", "Birmingham"]},
{q: "From which country does Feta cheese originate?", a: "Greece",  choices: ["Manchester", "Birmingham", "London", "Birmingham"]},
{q: "Fajitas are widely eaten in which country?", a: "Mexico",  choices: ["Manchester", "Birmingham", "London", "Birmingham"]},
{q: "Which nuts are used to make marzipan?", a: "Almonds",  choices: ["Manchester", "Birmingham", "London", "Birmingham"]},
{q: "Which vegetable is zucchini better known as?", a: "Courgette",  choices: ["Manchester", "Birmingham", "London", "Birmingham"]}
]

        
var counter = 30;
var currentQuestion = 0;
var correctVar = 0;
var incorrectVar = 0;
var unansweredVar = 0;
var timer;
function renderQuestion() {
      // If there are still more questions, render the next one.
      if (currentQuestion <= (questionsArray.length - 1)) {
        $("#question").html(questionsArray[currentQuestion].q);
      }
      // If there aren't, render the end game screen.
      else {
        $("#question").html("Game Over!");

      }
    }

        // for (var i = 0; i < questions.length; i++) {
            
        //     var questionContainer = document.createElement('DIV');
        //     questionContainer.textContent = questions[i].q;
            

            // var options = questions[i].choices;
            // for (var opt in options) {
            //     //create radiobutton
            //     //append radiobutton to a div 
            // }
            // container.appendChild(questionContainer);
       // }


//list questions on the page with all possible answers
//limit users selection to only 1 answer
//once user clicks start, countdown starts
//once answer is selected, check to see if the answer is correct.
//unansweredvar = # of questions
// if correct correctvar ++ && unansweredvar --
// if incorrect incorrectvar ++ ++ && unansweredvar --
//if unansweredvar = 0 && timer > 0, user wins
// of unanswered > 0 && timer = 0, user loses
//show stats



//var questionIndex = 0;

// // Function to render questions.
//     function renderQuestion() {
//       // If there are still more questions, render the next one.
//       if (questionIndex <= (questionsArray.length - 1)) {
//         document.querySelector("#question").innerHTML = questionsArray[questionIndex].q;
//       }
//       // If there aren't, render the end game screen.
//       else {
//         document.querySelector("#question").innerHTML = "Game Over!";
//         document.querySelector("#score").innerHTML = "Final Score: " + score + " out of " + questions.length;
//       }
//     }


// function starter() {
//  $('#startTimer').click(start = true;)
    
// };   
     

// function (time,update,complete) {
//     var start = new Date().getTime();
//     var interval = setInterval(function() {
//         var now = time-(new Date().getTime()-start);
//         if( now <= 0) {
//             clearInterval(interval);
//             complete();
//         }
//         else update(Math.floor(now/1000));
//     },100); 
// }

//*--------------------run functions----------------------  */
 renderQuestion()
//  starter()

//  if (start === true) ( timer(
//     20000, // milliseconds
//     function(timeleft) { // called every step to update the visible countdown
//         $("#time").html(timeleft  +" second(s) remaining");
//     },
//     function() { // what to do after
//         $("#time").html("Time is up");
//     }
//     ));

});