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
      
       

$("#startTimer").on("click",function() {
   $("#startTimer").remove();
   game.start()

    for(var i = 0; i < questionsArray.length; i++){
      $("#questionDiv").append('<h2>'+questionsArray[i].q+'<h2>')
      for(var j = 0; j < questionsArray[j].choices.length; j++){
        $("#questionDiv").append(" <input type='radio' " + "name='question-" +i+ "' value='" + questionsArray[i].choices[j] + "' > " + questionsArray[i].choices[j])
      }
    }
     $("#done").append('<button id="done">Done</button>');
 })


var game = {
  correct: 0,
  incorrect: 0,
  counter: 5,
  countdown: function(){
    game.counter--;
    $('#time').html("Time Remaining: " + game.counter);
    if (game.counter <= 0){
        console.log("Time is Up!");
        game.done();
    }
  },
  start: function(){
    timer = setInterval(game.countdown, 1000);
    $("#startTimer").on("click",function() {
        $("#startTimer").remove();
          for(var i = 0; i < questionsArray.length; i++){
          $("#questionDiv").append('<h2>'+questionsArray[i].q+'<h2>')
          for(var j = 0; j < questionsArray[j].choices.length; j++){
             $("#questionDiv").append(" <input type='radio'  " +  "name='question-" +i+ "' value='" + questionsArray[i].choices[j] + "' > " + questionsArray[i].choices[j])

          }
         }
        
    })        
  },
  done:function() {
  console.log("in done function")
  console.log(questionsArray[0].a)
  

     $.each($("input[name='question-0']:checked"), function () {
         if ($(this).val() == questionsArray[0].a) {
           console.log(true)
        correct++;
        } else {
            incorrect++;
        }
    });
   this.result()
    }

  }
  function result() {
    console.log("results function")
    clearInterval(timer);
    $("#showResults").append('<h3> Correct Answers: ' + this.correct + '</h3>');
    $("#showResults").append('<h3> Incorrect Answers: ' + this.incorrect + '</h3>');
    $("#showResults").append('<h3> Unanswered: ' + (questionsArray.length - (this.incorrect + this.correct)) + '</h3>');       
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