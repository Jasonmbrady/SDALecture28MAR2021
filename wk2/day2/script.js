// console.log("loading javascript!");
// console.log(console);

// Vanilla Javascript
// document.addEventListener("DOMContentLoaded", function () {
//     console.log("document loaded!");
//     var button = document.getElementById("btn");
//     var title = document.getElementById("title");
//     title.style.color = "blue";

//     button.addEventListener("click", function () {
//         // alert("clicked!");
//         // title.style.color = "red";
//         if (title.style.display == "block"){
//             title.style.display = "none";
//         } else {
//             title.style.display = "block";
//         }


//     });

// });
$(document).ready(function () {
    var title = $("#title");
    // console.log(title);
    title.css("color", "blue");
    $(btn).click( function (e) {
        console.log(e);
        if (title.css("display") == "block") {
            title.css("display", "none");
        } else {
            title.css("display", "block")
        }
    })
})