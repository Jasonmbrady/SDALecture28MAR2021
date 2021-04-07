$(document).ready(function () {
    $.get("https://www.themealdb.com/api/json/v1/1/random.php", function (res) {
        // console.log(res.meals[0]);

        $("body").append("<h1>" + res.meals[0].strMeal + "</h1>");
        $("body").append(`<h3>${res.meals[0].strCategory}</h3>`);
        $("body").append(`<h3>${res.meals[0].strArea}</h3>`);
        for(let i=1; i < 21; i++){
            if(res["meals"][0]["strIngredient" + i] != null){
            $("body").append(`<p>${res["meals"][0]["strIngredient" + i]} ${res["meals"][0]["strMeasure" + i]}</p>`)
            }
        }
        $("body").append(`<p>${res.meals[0].strInstructions}`)
        
    

    }, "json");
});