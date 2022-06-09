$(document).ready(function () {
    $.getJSON("./data/characters.json", function (data) {
        var dataBuilder = '';

        $.each(data.characters, function (_, character) {
            dataBuilder += '<a class="character-select" href="' + character.name + '">';
            dataBuilder += '<img src="./assets/images/characters/' + character.name.toLowerCase() + '/select.png" alt="' + character.name + ' Select" class="character-select-image">';
            dataBuilder += '<div class="character-select-name">' + character.name + ' <div class="character-select-jpname">' + character.jpname + '</div></div>';
            dataBuilder += '</a>';
        });

        $('#character_select').append(dataBuilder);
    });
});