setTimeout(function(){
    alert("Hello");
    $(`#loadscreen`).toggleClass('loading');
    $('#loadscreen').toggleClass('hidden');
    $('#list').toggleClass('hidden');
    $(`#list`).toggleClass('body');
    $('#user-input').toggleClass('hidden');
    $(`#user-input`).toggleClass('form');
    $('#submit').toggleClass('hidden');
    $(`#submit`).toggleClass('form')
}, 1200);



function displayMovie() {
    fetch('https://wiggly-dot-zucchini.glitch.me/movies',
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        //get the successful response and parse the stream as JSON
        .then(function (response) {
            return response.json();
        })
        // take the parsed JSON and log it
        .then(function (data) {
            data.forEach(function (data) {
                $('#list').append(`Title:  ${data.title} <br> Rating: ${data.rating} <br>`);
            })
        })
        .catch(function (error) {
            console.log(error)
        })
}
displayMovie();

function addMovie(){
    fetch('https://wiggly-dot-zucchini.glitch.me/movies', {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            title: $('#title').val(),
            rating: $('#rating').val(),
        })
    })  .then(response => response.json())
        .then (function (){
        $('#list').append('Title: ' + $('#title').val() + '<br>' +
            'rating: ' + $('#rating').val() + '<br>');
    })
        .then(console.log)
        .catch(console.error)
}
//
$(`#submit`).on('click', addMovie)
