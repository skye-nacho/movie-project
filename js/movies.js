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
                $('#list').append(`<p class="movie">Title:  ${data.title} <br> Rating: ${data.rating} </p><br>`);
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
            'Rating: ' + $('#rating').val() + '<br>');
    })
        .then(console.log)
        .catch(console.error)
}
//
$(`#submit`).on('click', addMovie)


$(document).on('dblclick', '.movie', function (){
  let confirmDelete = confirm("Are you sure you want to delete?")

});



//STILL working on the delete function
// function deleteMovie(){
//     fetch('https://wiggly-dot-zucchini.glitch.me/movies', {
//         method: 'DELETE',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(Your_additional_data_info)
//     }).then(r  =>)
// };

function deleteMovie (){
    fetch('https://wiggly-dot-zucchini.glitch.me/movies',{
        method:'DELETE'
    }).then(response=>{
        return response.json()
    }).then(data=>
// this is the data we get after putting our data,
            console.log(data)
    )
};

//
// const deleteData = async ( ) =>{
//     const response = await fetch('https://wiggly-dot-zucchini.glitch.me/movies', {
//         method: 'DELETE',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: null
//     });
//
//     const data = await response.json( );
//
//     // now do whatever you want with the data
//     console.log(data);
// };
// deleteData( );
