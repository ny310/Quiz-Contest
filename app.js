function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("bt" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions
var questions = [
    new Question("Which version of PHP introduced Try/catch Exception?", ["PHP 4", "PHP 6","PHP 5", "PHP 5 and later"], "PHP 5 and later"),

    new Question("PHP’s numerically indexed array begin with position?", ["1", "2","0", "-1"], "0"),
    
    new Question("Which in-built function will add a value to the end of an array?", ["array_unshift()", "into_array()","inend_array()", "array_push()"], "array_push()"),
    
    new Question("Which of the following function is used to get the value of the previous element in an array?", ["last()", "before()","prev()", "previous()"], "prev()"),
    
    new Question("Which one of the following regular expression matches any string containing zero or one p ?", ["p+", "p*","p?", "p#"], "p?"),

];
var quiz = new Quiz(questions);
populate();





