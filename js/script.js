var bubble_pop = document.getElementById("bubble_pop");
var start = document.getElementById("start");
var gameover = document.getElementById("gameover");


var bubbles = [
    $("#BUBBLE1"),
    $("#BUBBLE2"),
    $("#BUBBLE3"),
    $("#BUBBLE4"),
    $("#BUBBLE5"),
    $("#BUBBLE6"),
    $("#BUBBLE7"),
    $("#BUBBLE8")
];

var cat1 = $("#CAT")
var cat2 = $("#MADCAT")

var door1 = $("#DOOR")
var door2 = $("#DOORMAN")

var pop = $("#POP")
var caught = $("#CAUGHT")

var play = $("#PLAY");
var retry = $("#RETRY");



caught.hide();
retry.hide();
door2.hide();
cat2.hide();

play.on("click", function () {
    play.hide();
    pop.hide();
    start.play();
});

play.on("click", function () {
    $("#BUBBLE1").css("transform", "translate(0px,-400px)")
})

$("#BUBBLE1").on("click", function () {
    $(this).css("transform", "translate(0px,-60000px)");
});

$("#BUBBLE1").on("click", function () {
    $(this).css("transform", "translate(0px,-60000px)");
});

$("#BUBBLE1").on("click", function () {
    $("#BUBBLE2").css("transform", "translate(50px,-300px)");
});

$("#BUBBLE2").on("click", function () {
    $(this).css("transform", "translate(0px,-60000px)");
});

$("#BUBBLE2").on("click", function () {
    $("#BUBBLE3").css("transform", "translate(-400px,-270px)");
});

$("#BUBBLE3").on("click", function () {
    $(this).css("transform", "translate(0px,-60000px)");
});

$("#BUBBLE3").on("click", function () {
    $("#BUBBLE4").css("transform", "translate(300px,-370px)");
});

$("#BUBBLE4").on("click", function () {
    $(this).css("transform", "translate(0px,-60000px)");
});

$("#BUBBLE4").on("click", function () {
    $("#BUBBLE5").css("transform", "translate(100px,-170px)");
});

$("#BUBBLE5").on("click", function () {
    $(this).css("transform", "translate(0px,-60000px)");
});

$("#BUBBLE5").on("click", function () {
    $("#BUBBLE6").css("transform", "translate(-240px,-370px)");
});

$("#BUBBLE6").on("click", function () {
    $(this).css("transform", "translate(0px,-60000px)");
});

$("#BUBBLE6").on("click", function () {
    $("#BUBBLE7").css("transform", "translate(-20px,-140px)");
});

$("#BUBBLE7").on("click", function () {
    $(this).css("transform", "translate(0px,-60000px)");
});

$("#BUBBLE7").on("click", function () {
    $("#BUBBLE8").css("transform", "translate(120px,-500px)");
});

$("#BUBBLE8").on("click", function () {
    $(this).css("transform", "translate(120px,60080px)");
});

$("#BUBBLE8").on("click", function () {
    door2.show();
    door1.hide();
    caught.show();
    retry.show();
    cat1.hide();
    cat2.show();
    gameover.play();
});

retry.on("click", function () {
    play.hide();
    pop.hide();
    caught.hide();
    retry.hide();
    start.play();
    cat2.hide();
    cat1.show();
    door2.hide();
    door1.show();


    $("#BUBBLE1").css("transform", "translate(0px,-400px)");
    $("#BUBBLE2").css("transform", "translate(0px,0px)");
    $("#BUBBLE3").css("transform", "translate(0px,0px)");
    $("#BUBBLE4").css("transform", "translate(0px,0px)");
    $("#BUBBLE5").css("transform", "translate(0px,0px)");
    $("#BUBBLE6").css("transform", "translate(0px,0px)");
    $("#BUBBLE7").css("transform", "translate(0px,0px)");
    $("#BUBBLE8").css("transform", "translate(0px,0px)");


})


$("#BUBBLE1").on("click", function () {
    bubble_pop.play();
    console.log("pop");
})

$("#BUBBLE2").on("click", function () {
    bubble_pop.play();
    console.log("pop");
})

$("#BUBBLE3").on("click", function () {
    bubble_pop.play();
    console.log("pop");
})

$("#BUBBLE4").on("click", function () {
    bubble_pop.play();
    console.log("pop");
})

$("#BUBBLE5").on("click", function () {
    bubble_pop.play();
    console.log("pop");
})

$("#BUBBLE6").on("click", function () {
    bubble_pop.play();
    console.log("pop");
})

$("#BUBBLE7").on("click", function () {
    bubble_pop.play();
    console.log("pop");
})

$("#BUBBLE8").on("click", function () {
    bubble_pop.play();
    console.log("pop");
})

