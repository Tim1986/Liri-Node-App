# liri-node-app

<!-- Clearly state the problem the app is trying to solve (i.e. what is it doing and why) -->
The liri-node-app makes it extremely easy to search the included APIs for information, simply by using the terminal. It currently includes Bands in Town (for upcoming concerts), Spotify (for song information), and OMDB (for movie information) APIs, but it could very easily be adapapted to include any number of others by simply adding more searchType options in the switchcase and adding corresponding new functions below. 

This app is made to make reviewing your search information extremely easy by logging your searches in your console, and additionally logging them in a log.txt document, with each new command giving line breaks for easy readability. The app also has built in functionality for reading outside documents (currently just a simple .txt file) and running searches based on their contents. It also has an additional command option "change," which can be used to rewrite the .txt file, and then later run searches from it.


<!-- Give a high-level overview of how the app is organized -->

The app is organized in three simple parts for easy readability:

The first section has our dotenv, spotify, axios, and fs requires, followed by three convenience variables for the parts of the process.argv we'll be regularly using.

The second section is our very straightforward switchcase, which takes the third input from the command line to determine which type of search to run. It logs the command using the log function, then runs the appropriate search function. If the third input is not a valid function, it logs that it isn't a recognize command.

The third section is our list of functions. The first is log (used before all searches), then our three search functions: concert (for Bands in Town), spotify-this-song (for Spotify), and movie-this (for OMDB). After that we have our read file and write file functions.

<!-- Give start-to-finish instructions on how to run the app -->

To run the app, navigate to the file in your command line, and type "node liri.js." You can follow that with five possible options: concert-this, spotify-this-song, movie-this, do-what-it-says, and change. You can simply follow concert-this, spotify-this-song, or movie-this with a search you want to make about a band/artist, song, or movie, respectively. No need to worry about spaces, hyphens, or quotation marks for these searches. Just type it out normally with spaces and the app will grab your search, no problem. For instance, if you wanted to do a search for the singer Carrie Underwood, you would type: node liri.js concert-this Carrie Underwood. If you wanted to do a search for the song Dream On, you would type: node liri.js spotify-this-song Dream On. If you wanted to do a search for the movie Inside Out, you would type: node liri.js movie-this Inside Out. If you don't put in a search term for any of these searches, it will default search to the band "Switchfoot," the song "Welcome to the Black Parade," and the movie "Mr Nobody."

If you use the do-what-it-says command, you don't need to type out a search. The app will read the random.txt file to determine which search type it should use, and what it should search for. Simple type: node liri.js do-what-it-says.

If you want to rewrite the random.txt file, follow node liri.js with "change", followed by the search type and search content. For instance, if you want to rewrite the random.txt file so the do-what-it-says command will do a movie search for Toy Story, you would type: node liri.js change movie-this Toy Story. The console will even remind you that node liri.js do-what-it-says will do exactly the same command as your previous command without the word "change" (in this case, node liri.js movie-this Toy Story).

All of these searches will log your command in the log.txt file, as well as the search contents.

<!-- Include screenshots, gifs or videos of the app functioning -->

![First Screenshot](/screenshot1.png)
![First GIF](/liri1.gif)

<!-- Contain a link to a deployed version of the app -->



<!-- Clearly list the technologies used in the app -->



<!-- State your role in the app development -->
