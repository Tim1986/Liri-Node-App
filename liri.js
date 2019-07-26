require("dotenv").config();
var Spotify = require('node-spotify-api');
var axios = require("axios");
var fs = require("fs");
var inputString = process.argv;
var command = inputString[2];

switch (command) {
    case "concert-this":
        concert();
        break;

    case "spotify-this-song":
        song();
        break;

    case "movie-this":
        movie();
        break;

    case "do-what-it-says":
        backstreet();
        break;

    default:
        output = "Not a recognized command";
}

function concert() {
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
}

function song() {
    var keys = require("./keys.js");
    var spotify = new Spotify(keys.spotify);

    spotify
        .search({ type: 'track', query: process.argv.slice(3).join("+"), limit: 1 })
        .then(function (response) {
            var songObject = {
                artist: response.tracks.items[0].artists[0].name,
                song: response.tracks.items[0].name,
                preview: response.tracks.items[0].preview_url,
                album: response.tracks.items[0].album.name
            }
            for (var key in songObject) {
                console.log('* ' + songObject[key])
            }
        })
        .catch(function (err) {
            console.log(err);
        });
}

function movie() {
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
}

function backstreet() {
    var keys = require("./keys.js");
    var spotify = new Spotify(keys.spotify);
    fs.readFile("random.txt", "utf8", function (error, data) {
        if (error) {
            return console.log(error)
        }
        var adjustedData = data.split(",")

            spotify
                .search({ type: 'track', query: adjustedData[1], limit: 1 })
                .then(function (response) {
                    var songObject = {
                        artist: response.tracks.items[0].artists[0].name,
                        song: response.tracks.items[0].name,
                        preview: response.tracks.items[0].preview_url,
                        album: response.tracks.items[0].album.name
                    }
                    for (var key in songObject) {
                        console.log('* ' + songObject[key])
                    }
                })
                .catch(function (err) {
                    console.log(err);
                });
    })
}