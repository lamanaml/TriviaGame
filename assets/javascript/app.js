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

var timer;
        

$("#startTimer").on("click",function() {
   $("#startTimer").remove();
   game.start()

    for(var i = 0; i < questionsArray.length; i++){
      $("#questionDiv").append('<h2>'+questionsArray[i].q+'<h2>')
      for(var j = 0; j < questionsArray[j].choices.length; j++){
        $("#questionDiv").append(" <input type='radio' data-answer= " + questionsArray[i].a + " name='question-" + i + "' value='" + questionsArray[i].choices[j] + "' > " + questionsArray[i].choices[j])
      }
    }
 })


var game = {
  correct: 0,
  incorrect: 0,
  counter: 120,
  countdown: function(){
    game.counter--;
    $('#time').html("Time Remaining: " + game.counter);
    if(game.counter<=0){
        console.log("Time is Up!");
        game.done();
    }
  },
start: function(){
  timer = setInterval(game.countdown, 1000);
  $("#startTimer").on("click",function() {
    $("#startTimer").remove();
  game.start()

  for(var i = 0; i < questionsArray.length; i++){
      $("#questionDiv").append('<h2>'+questionsArray[i].q+'<h2>')
      for(var j = 0; j < questionsArray[j].choices.length; j++){
         $("#questionDiv").append(" <input type='radio' data-answer= " + questionsArray[i].a + " name='question-" + i + "' value='" + questionsArray[i].choices[j] + "' > " + questionsArray[i].choices[j])
      }
    }
 })        
}
}
          
 

   
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