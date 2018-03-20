

export function getWeather(city) {
  /* eslint-disable */
  const weatherKey = process.env.WEATHER_API_KEY;
  /* eslint-enable */
  $.get(` http://api.openweathermap.org/data/2.5/weather?appid=${weatherKey}&q=${city}&units=imperial`).then(function(response) {
    let temp = Math.round(response.main.temp);
    $('.current-weather').text(`Current temperature: ${temp}°.`);
  }).fail(function(error) {
    $('.error-weather').text(`There was an error processing your request: ${error.responseText}. Please try again.`);
  });
}
