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
}, 1200);