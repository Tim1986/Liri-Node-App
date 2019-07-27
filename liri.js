require("dotenv").config();
var Spotify = require('node-spotify-api');
var axios = require("axios");
var fs = require("fs");
var inputString = process.argv;
var searchType = inputString[2];
var search = inputString.slice(3).join("+");

switch (searchType) {
    case "concert-this":
        log();
        concert();
        break;

    case "spotify-this-song":
        log();
        song();
        break;

    case "movie-this":
        log();
        movie();
        break;

    case "do-what-it-says":
        log();
        read();
        break;
    
    case "change":
        log();
        write();
        break;

    default:
        console.log("Not a recognized command")
}

function log() {
    if (inputString[3]) {
    fs.appendFile("log.txt", "\n" + "NEW COMMAND: node liri.js " + searchType + " " + inputString.slice(3).join(" ") + "; " + "\n", function(err) {
        if (err) {
          console.log(err);
        }
        else {
          console.log("Content Added!");
        }
      });
    } else if (searchType === "change") {
        fs.appendFile("log.txt", "\n" + "NEW COMMAND: node liri.js change " + inputString[3] + " " + inputString.slice(4).join(" ") + "; " + "\n", function(err) {
            if (err) {
              console.log(err);
            }
            else {
              console.log("Content Added!");
            }
          });
    } else {
    fs.appendFile("log.txt", "\n" + "NEW COMMAND: node liri.js do-what-it-says; " + "\n", function(err) {
        if (err) {
          console.log(err);
        }
        else {
          console.log("Content Added!");
        }
      });   
    }
}

function concert() {
    var concertQueryUrl = `https://rest.bandsintown.com/artists/${search}/events?app_id=codingbootcamp`

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
                    fs.appendFile("log.txt", concertObject[key] + "-----", function(err) {
                        if (err) {
                          console.log(err);
                        }
                        else {
                          console.log("Content Added!");
                        }
                      });                      
                }
            }
        })
        .catch(function(error) {
            if (error.response) {
              console.log("---------------Data---------------");
              console.log(error.response.data);
              console.log("---------------Status---------------");
              console.log(error.response.status);
              console.log("---------------Status---------------");
              console.log(error.response.headers);
            } else if (error.request) {
              console.log(error.request);
            } else {
              console.log("Error", error.message);
            }
            console.log(error.config);
          });        
}

function song() {
    var keys = require("./keys.js");
    var spotify = new Spotify(keys.spotify);

    spotify
        .search({ type: 'track', query: search, limit: 1})
        .then(function (response) {
            var songObject = {
                artist: response.tracks.items[0].artists[0].name,
                song: response.tracks.items[0].name,
                preview: response.tracks.items[0].preview_url,
                album: response.tracks.items[0].album.name
            }
            for (var key in songObject) {
                console.log('* ' + songObject[key])
                fs.appendFile("log.txt", songObject[key] + "-----", function(err) {
                    if (err) {
                      console.log(err);
                    }
                    else {
                      console.log("Content Added!");
                    }
                  });
            }
        })
        .catch(function (err) {
            console.log(err);
        });
}

function movie() {
    var movieQueryUrl = `http://www.omdbapi.com/?t=${search}&y=&plot=short&apikey=trilogy`
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
                fs.appendFile("log.txt", movieObject[key] + "-----", function(err) {
                    if (err) {
                      console.log(err);
                    }
                    else {
                      console.log("Content Added!");
                    }
                  });
            }
        })
        .catch(function(error) {
            if (error.response) {
              console.log("---------------Data---------------");
              console.log(error.response.data);
              console.log("---------------Status---------------");
              console.log(error.response.status);
              console.log("---------------Status---------------");
              console.log(error.response.headers);
            } else if (error.request) {
              console.log(error.request);
            } else {
              console.log("Error", error.message);
            }
            console.log(error.config);
          });
}

function read() {
    fs.readFile("random.txt", "utf8", function (error, data) {
        if (error) {
            return console.log(error)
        }
        var adjustedData = data.split(",")

        search = adjustedData[1]
        if (adjustedData[0] === "spotify-this-song") {
            song()
        } else if (adjustedData[0] === "concert-this") {
            concert()
        } else if (adjustedData[0] === "movie-this") {
            movie()
        }
        })
}

// This will work as long as "node liri.js change" is followed by concert-this, spotify-this-song, or movie-this, and then followed by an appropriate search term.
function write() {
    fs.writeFile("random.txt", process.argv[3] + "," + process.argv.slice(4).join(" "), function(err) {
        if (err) {
          return console.log(err);
        }
        fs.appendFile("log.txt", "DO-WHAT-IT-SAYS UPDATED!", function(err) {
            if (err) {
              console.log(err);
            }
            else {
              console.log("random.txt was updated! 'node liri.js do-what-it-says' now does the same thing as your last command if you remove 'change'");
            }
          });
      });
}