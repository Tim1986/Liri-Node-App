require("dotenv").config();
var Spotify = require('node-spotify-api');

var axios = require("axios");

var inputString = process.argv;
var command = inputString[2];
var search = inputString[3];
var output;

switch (command) {
    case "concert-this":
        var concertName = process.argv.slice(3).join("+")
        var concertQueryUrl = `https://rest.bandsintown.com/artists/${concertName}/events?app_id=codingbootcamp`

        axios.get(concertQueryUrl).then(
            function (response) {

                for (var i = 0; i < response.data.length; i++) {
                    var concertObject = {
                        venueName: response.data[i].venue.name,
                        venueLocation: response.data[i].venue.city,
                        eventDate: response.data[i].datetime
                    }
                    for (var key in concertObject) {
                        console.log('* ' + concertObject[key]);
                    }
                }
            })
        break;

    case "spotify-this-song":
        var keys = require("./keys.js");
        var spotify = new Spotify(keys.spotify);

        spotify
            .search({ type: 'track', query: process.argv.slice(3).join("+")})
            .then(function (response) {
                console.log(response);
            })
            .catch(function (err) {
                console.log(err);
            });

// NEED TO STRINGIFY THE OBJECTS

        // var songName = process.argv.slice(3).join("+")
        // var songQueryUrl = `https://rest.bandsintown.com/artists/${concertName}/events?app_id=codingbootcamp`
        // axios.get(movieQueryUrl).then(
        //     function (response) {
        //         var songObject = {

        //         }
        //     }
      

      break;

    case "movie-this":

        var movieName = process.argv.slice(3).join("+")
        var movieQueryUrl = `http://www.omdbapi.com/?t=${movieName}&y=&plot=short&apikey=trilogy`

        axios.get(movieQueryUrl).then(
            function (response) {
                var movieObject = {
                    title: response.data.Title,
                    year: response.data.Year,
                    imdbRating: response.data.imdbRating,
                    rottenTomatoesRating: response.data.Ratings[1].Value,
                    country: response.data.Country,
                    language: response.data.Language,
                    plot: response.data.Plot,
                    actors: response.data.Actors,
                }
                for (var key in movieObject) {
                    console.log('* ' + movieObject[key]);
                }
            })
        break;

    // case "do-what-it-says":
    //   outputNum = 
    //   break;

    default:
        output = "Not a recognized command";
}

