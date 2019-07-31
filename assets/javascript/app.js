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

//***********once user clicks start, countdown starts
$("#startTimer").on("click", function(){  
  counter = setTimeout(timeUp, 1000 * 10);
//***********shows the question
      for (i = 0; i < questionsArray.length; i++) {
        currentQuestion = questionsArray[i].q;
        currentChoices = questionsArray[i].choices;
        questionDiv = $("#question");
        choicesDiv = $("#btn");
        var newQuestion = $("<div>").addClass("card");
        var newChoice =  $("<input type='radio'>")
         newQuestion.text(currentQuestion);
         newChoice.text(currentChoices);
        $("#question").append(newQuestion);
         $("#btn").append(questionsArray[i].choices);


//***********list questions on the page with all possible answers
   
        
        
        
        
        console.log(questionsArray[i].choices)
        
        
        //var options = questionsArray[j].choices;
        // for (var opt in options) {
        //     //create radiobutton
        //     //append radiobutton to a div 
        // }
        //$("question").text(currentQuestion);
        //console.log(currentQuestion)
    }

   
});
//**************end of timer */
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