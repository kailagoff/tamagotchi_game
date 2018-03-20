
export function getGif() {
  $("#gif").click(function() {
    /* eslint-disable */
    const gifKey = process.env.GIPHY_API_KEY;
    /* eslint-enable */

    $.get(`http://api.giphy.com/v1/gifs/search?q=tamagotchi&api_key=${gifKey}`).then(function(response) {
      let reply = response.data[1].images.original.url;
      $('#show-game').html('<img src="' + reply + '">');

    }).fail(function(error) {
      $('#error-giphy').text(`There was an error processing your request:         ${error.responseText}. Please try again.`);
    });
  });
}
