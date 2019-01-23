$(document).ready(function() {
    console.log("Ready to Rock");
    
    //--Variables--
    var score = 0;
    var incorrect = 0;
    var time = 30;
    var intervalId;
    
    //--Set up start function that will decrement the seconds--
    function start() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    }
    
    //--Decrement function decreases seconds by one--
    function decrement() {
        time--;
        
        if (time === 0) {
            stop()
        }
    
        //--Show the number in the #timer tag--
        $("#timer").html("Timer: " + time + " seconds")
    }
    
    function stop() {
        clearInterval(intervalId)
    };
        
        $(".container").hide();
        $("#timer").hide()
        $("button[type='submit']").hide();
        
    //--Show the test after clicking on the start button. Show the hidden elements then hide the button--
    $("button[type='button']").on("click", function(){
        start();
        $(".container").show();
        $("#timer").show();
        $("button[type='submit']").show();
        $("button[type='button']").hide();
        
    });

    //--Answering Questions function--
    $("input[name=question1]:radio").click(function () {
            if ($('input[name=question1]:checked').val() == "correct1") {
                score++;
                console.log("Correct");
            } else {
                incorrect++;
                console.log("Wrong")
            }});

    $("input[name=question2]:radio").click(function () {
        if ($('input[name=question2]:checked').val() == "correct2") {
            score++;
            console.log("Correct");
        } else {
            incorrect++;
            console.log("Wrong");
        }});

    $("input[name=question3]:radio").click(function () {
        if ($('input[name=question3]:checked').val() == "correct3") {
            score++;
            console.log("Correct");
        } else {
            incorrect++;
            console.log("Wrong");
        }});

    $("input[name=question4]:radio").click(function () {
        if ($('input[name=question4]:checked').val() == "correct4") {
            score++;
            console.log("Correct");
        } else {
            incorrect++;
            console.log("Wrong");
        }});

    $("input[name=question5]:radio").click(function () {
        if ($('input[name=question5]:checked').val() == "correct5") {
            score++;
            console.log("Correct");
        } else {
            incorrect++;
            console.log("Wrong");
        }});

    //--After clicking the submit button, show the results--
    $("button[type='submit'").on("click", function(){
        $(".container").hide();
        $("#timer").hide()
        $("button[type='submit']").hide();
        $(".results").show();
        
        if (score === 5) {
            $(".opener").hide();
            $("#tally").html("Congratulations, you got them all correct!").fadeIn("slow");
        } else if (score === 0) {
            $("#tally").html("You did not get any of them right, try again!");
        } else {
            $("#tally").html("Your score is: " + score);
            $("#tally").append("<BR>" + "You got " + incorrect + " wrong");

        }
    });



});