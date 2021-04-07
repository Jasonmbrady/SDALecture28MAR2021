$(document).ready(function() {
    var pokemon = [];
    $.get("https://pokeapi.co/api/v2/pokemon/", function (response) {
        pokemon = response.results;
        console.log(pokemon);
        for(let i = 0; i<pokemon.length; i++){
            $.get(`https://pokeapi.co/api/v2/pokemon/${i+1}`, function (response) { 
                $("body").append("<img src='" + response.sprites.front_default + "'>");
                $("img").css("width", "250px");
            }, "json");
        }
    }, "json");

});