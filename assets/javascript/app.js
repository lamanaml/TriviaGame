$( document ).ready(function() {

var questionsArray = [
{q: "What ingredient makes bread rise?", a: "Yeast",  choices: ["Eggs", "Wheat", "Yeast", "Baking Soda"]},
{q: "What is the main ingredient used in guacamole?", a: "Avocado",  choices: ["Tomatoes", "Mayonaise", "Avocado", "Beans"]},
{q: "What is the main ingredient of Hummus?", a: "Chickpeas",  choices: ["Chickpeas", "Eggplant", "Peanut Butter", "Cream Cheese"]},
{q: "What is the main export out of Cuba?", a: "Sugar",  choices: ["Cigars", "Bananas", "Sugar", "Rum"]},
{q: "What is Tofu made of?", a: "Soy beans",  choices: ["Quinoa", "Soy beans", "Cheese", "Cardboard"]},
{q: "Which country does parmesan cheese originate from?", a: "Italy",  choices: ["Italy", "Greece", "Canada", "Spain"]},
{q: "From which country does Feta cheese originate?", a: "Greece",  choices: ["Paris", "Ireland", "Rome", "Greece"]},
{q: "Fajitas are widely eaten in which country?", a: "Mexico",  choices: ["Argentina", "Mexico", "Equador", "Panama Canal"]},
{q: "Which nuts are used to make marzipan?", a: "Almonds",  choices: ["Almonds", "Macademia Nuts", "Walnuts", "Brazil Nuts"]},
{q: "Which vegetable is zucchini better known as?", a: "Courgette",  choices: ["Courgette", "Cucumber", "Patty Pan Squash", "Spaghetti Squash"]}
]
      
var currentQuestion = 0;
var correctVar = 0;
var incorrectVar = 0;
var unansweredVar = 0;

var counter = 30;
var timer;


$("#startTimer").on("click", function(){ 

var question = questionsArray[currentQuestion].q;
var choices = questionsArray[currentQuestion].choices;

$("#question").html('<div class="card">'+ question + '</div>');
$("#question").append('<p>'+ loadChoices(choices) + '</p>');
);


console.log(loadChoices(choices))
counter = setTimeout(timeUp, 1000 * 10);
$("#time").html("Time Remaining: " + counter); 

 })

function loadChoices(choices) {
  for (i = 0; i < choices.length; i++) {
  var result +=  '<p class="choice" data-answer="${choices[i]}">${cgiuces[i]}</p>';
  }

//   //newChoice.text(currentChoices);
//  // $("#btn").append(questionsArray[i].choices);
return result;
//   }
// }
  
// function loadChoices(choices) {
//   var newQuestion = ""
//       for (i = 0; i < questionsArray.length; i++) {
//       //questionDiv = $("#question");
//       var newQuestion = $("<div data-answer='{choices[i]}'>{choices[i]}</div>").addClass("card");
//        return newQuestion  
       
         
//       }
// }
//      
//***********list questions on the page with all possible answers
   
        
        
        
        
       
        
        
        //var options = questionsArray[j].choices;
        // for (var opt in options) {
        //     //create radiobutton
        //     //append radiobutton to a div 
        // }
        //$("question").text(currentQuestion);
        //console.log(currentQuestion)
//     }

   
// });
// //**************end of timer */
function timeUp() {    
$("#time").html("<h2>Time's Up!</h2>");
}

      


// *************begin Psuedocode *********************

//***********limit users selection to only 1 answer

//***********once answer is selected, check to see if the answer is correct.
//***********unansweredvar = # of questions
// ***********if correct correctvar ++ && unansweredvar --
// ***********if incorrect incorrectvar ++ ++ && unansweredvar --
//***********if unansweredvar = 0 && timer > 0, user wins
// ***********of unanswered > 0 && timer = 0, user loses
//***********show stats
//************* end Psuedocode *********************




//********** end set timer */


//*--------------------run functions----------------------  */



});