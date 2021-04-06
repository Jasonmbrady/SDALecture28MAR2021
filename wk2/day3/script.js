$(document).ready(function() {
    // your jquery codes here
    // $(".box").click(function () {
    //     // alert("Clicked a box!");
    //     if($(this).css("background-color") == "rgb(0, 0, 255)"){

    //         $(this).css("background-color", "red");
    //     } else {
    //         $(this).css("background-color", "blue");
    //     }
    // });
    // $("#hardcoded").css("background-color", "red");
    $("button").click( function () {
        console.log("clicked the button!");
        $("#boxes").append("<div class='box'></div>");
    });
    $("#boxes").on("click", ".box", function () {
        // if($(this).css("background-color") == "rgb(0, 0, 255)"){

        //     $(this).css("background-color", "red");
        // } else {
        //     $(this).css("background-color", "blue");
        // }
        switch($(this).css("background-color")) {

            case "rgb(0, 0, 255)":
                $(this).css("background-color", "rgb(255, 0, 0)");
                break;
            case "rgb(255, 0, 0)":
                $(this).css("background-color", "rgb(0, 255, 0");
                break;
            default:
                $(this).css("background-color", "rgb(0, 0, 255)");

        }
    });
});