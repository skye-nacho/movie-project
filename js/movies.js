fetch('https://wiggly-dot-zucchini.glitch.me/movies',
    {method: 'GET',
        headers: {
        'Content-Type': 'application/json'
        }
    })
    //get the successful response and parse the stream as JSON
    .then(function (response){
        return response.json();
    })
    // take the parsed JSON and log it
    .then(function(data){
      data.forEach(function (data) {
              $('#list').append(`Title: ${data.title} <br> Rating: ${data.rating} <br>`);
          })
    })
    //If the promise rejects (wrong URL, server down, etc.) log the error
    .catch(function (error){
        console.log(error)
    })

setTimeout(function(){
    alert("Hello");
    $('#loadscreen').toggleClass('hidden');
    $(`#loadscreen`).toggleClass('loading');
    $('#list').toggleClass('hidden');
    $(`#list`).toggleClass('body');
}, 1200);


$('#submit').click(function (){
    fetch('https://wiggly-dot-zucchini.glitch.me/movies', {
        // Adding method type
        method: "POST",
        // Adding headers to the request
        headers: {
            "Content-type": "application/json"
        }
    })
        // Converting to JSON
        .then(response => response.json())

        // Displaying results to console
        .then(json => console.log(json));
})
