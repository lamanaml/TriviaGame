$( document ).ready(function() {
var incorrect = 0;
var correct = 0;
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
 $("#questionDiv").append("<h2>Questions</h2>")
    for(var i = 0; i < questionsArray.length; i++){
      $("#questionDiv").append('<hr><p><b>'+questionsArray[i].q+'</b></p>')
      for(var j = 0; j < questionsArray[j].choices.length; j++){
       
        $("#questionDiv").append(" <input type='radio' " + "name='question-" +i+ "' value='" + questionsArray[i].choices[j] + "' > " + questionsArray[i].choices[j] )
      }
    }
    
     $("#startTimer").append('<hr><button id="done">Done</button>');
 })

$("#done").on("click",function() {
    game.done()
});
var game = {
  //correct: 0,
  //incorrect: 0,
  counter: 30,
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
           console.log("correct");
        correct++;
        } else {
            incorrect++;
            console.log("incorrect");
        }
    });
    $.each($("input[name='question-1']:checked"), function () {
         if ($(this).val() == questionsArray[1].a) {
        correct++;
        console.log("correct");
        } else {
            incorrect++;
            console.log("incorrect");
        }
    });
    $.each($("input[name='question-2']:checked"), function () {
         if ($(this).val() == questionsArray[2].a) {
        correct++;
        } else {
            incorrect++;
        }
    });
    $.each($("input[name='question-3']:checked"), function () {
         if ($(this).val() == questionsArray[3].a) {
        correct++;
        } else {
            incorrect++;
        }
    });
    $.each($("input[name='question-4']:checked"), function () {
         if ($(this).val() == questionsArray[4].a) {
        correct++;
        } else {
            incorrect++;
        }
    });
    $.each($("input[name='question-5']:checked"), function () {
         if ($(this).val() == questionsArray[5].a) {
        correct++;
        } else {
            incorrect++;
        }
    });
    $.each($("input[name='question-6']:checked"), function () {
         if ($(this).val() == questionsArray[6].a) {
        correct++;
        } else {
            incorrect++;
        }
    });
    $.each($("input[name='question-7]:checked"), function () {
         if ($(this).val() == questionsArray[7].a) {
        correct++;
        } else {
            incorrect++;
        }
    });
    $.each($("input[name='question-8']:checked"), function () {
         if ($(this).val() == questionsArray[8].a) {
        correct++;
        } else {
            incorrect++;
        }
    });
    $.each($("input[name='question-9']:checked"), function () {
         if ($(this).val() == questionsArray[9].a) {
        correct++;
        } else {
            incorrect++;
        }
    });
    $.each($("input[name='question-10']:checked"), function () {
         if ($(this).val() == questionsArray[10].a) {
        correct++;
        } else {
            incorrect++;
        }
    });
      result()

    }
  }
  function result() {
    
    clearInterval(timer);
     $("#time").clear
    $("#time").html('<h4> Correct Answers: ' + correct + '</h4>');
    $("#time").append('<h4> Incorrect Answers: ' + incorrect + '</h4>');
    $("#time").append('<h4> Unanswered: ' + (questionsArray.length - (incorrect + correct)) + '</h4>');       
}

   

});