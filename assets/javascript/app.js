$(document).ready(function() {
    console.log("Ready to Rock");
    
    //--Variables--
    var score = 0;
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
$("input[type='radio']").click(function(){
    //--Make sure that these values have all be selected via radio selection--
    var radioValue = $("input[answer='correct']:checked").val();
    
    //***There is a bug here, after I select the correct one the first time, any answers chosen on the next questions becomes correct even if they are wrong***
    if (radioValue)  {
        console.log("Correct");
        score++;
    }

});

//--After clicking the submit button, show the results--
$("button[type='submit'").on("click", function(){
    $(".container").hide();
    $("#timer").hide()
    $("button[type='submit']").hide();
    $(".results").show();
    
    if (score === 5) {
        $(".opener").hide();
        $("#tally").html("Congratulations, you got them all correct!").fadeIn("slow");
    } else {
        $("#tally").html("Your score is: " + score);
    }
});



});