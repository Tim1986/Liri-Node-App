# liri-node-app

## Overview

<!-- Clearly state the problem the app is trying to solve (i.e. what is it doing and why) -->
The liri-node-app makes it extremely easy to search the included APIs for information, simply by using the terminal. It currently includes Bands in Town (for upcoming concerts), Spotify (for song information), and OMDB (for movie information), but it could very easily be adapted to include any number of others by simply adding more searchType options in the switchcase and adding corresponding functions below. 

This app is designed to make reviewing your search information extremely easy by logging your searches in your console, and additionally logging them in a log.txt document, with each new command giving line breaks for easy readability. The app also has built in functionality for reading outside documents (currently just a simple .txt file) and running searches based on their contents. It also has an additional command option "change," which can be used to rewrite the .txt file, so you can run searches from it as well.

<!-- Give a high-level overview of how the app is organized -->
The app is organized in three simple parts for easy readability:

The first section has our dotenv, spotify, axios, moment, and fs requires, followed by three convenience variables for the parts of the process.argv we'll be regularly using.

The second section is our very straightforward switchcase, which takes the third input from the command line to determine which type of command to run. It logs the command using the log function, then runs the appropriate function. If the third input is not a valid command, it logs that it isn't a recognize command.

The third section is our list of functions. The first is log (used before all other functions), then our three search functions: concert (for Bands in Town), song (for Spotify), and movie (for OMDB). After that we have our read file and write file functions (called read and write, respectively).

## How to Use It
<!-- Give start-to-finish instructions on how to run the app -->
To run the app, navigate to the file in your command line, and type "node liri.js." You can follow that with five possible options: concert-this, spotify-this-song, movie-this, do-what-it-says, and change. You can simply follow concert-this, spotify-this-song, or movie-this with a search you want to make about a band/artist, song, or movie, respectively. No need to worry about spaces, hyphens, or quotation marks for these searches. Just type it out normally with spaces and the app will grab your search, no problem. 

For instance, if you wanted to do a search for the singer Carrie Underwood, you would type: node liri.js concert-this Carrie Underwood. If you wanted to do a search for the song Dream On, you would type: node liri.js spotify-this-song Dream On. If you wanted to do a search for the movie Inside Out, you would type: node liri.js movie-this Inside Out. If you don't put in a search term for any of these searches, it will default search to the band "Switchfoot," the song "The Sign" by Ace of Base, and the movie "Mr Nobody."

If you use the do-what-it-says command, you don't need to type out a search. The app will read the random.txt file to determine which search type it should use, and what it should search for. Simply type: node liri.js do-what-it-says.

If you want to rewrite the random.txt file, follow node liri.js with "change", followed by the search type and search content you want to write into the file. For instance, if you want to rewrite the random.txt file so the do-what-it-says command will do a movie search for Toy Story, you would type: node liri.js change movie-this Toy Story. The console will even remind you that node liri.js do-what-it-says will do exactly the same command as your previous command without the word "change" (in this case, node liri.js movie-this Toy Story).

All of these searches will log your command in the log.txt file, as well as the search contents.

## Screenshots and Gifs
<!-- Include screenshots, gifs or videos of the app functioning -->
Here's the code for my requires, convenience variables, and switchcase:

![First Screenshot](/screenshot1.png)

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

This is the code for my log function, which runs before every other function. There are four different types of commands it might log in the log.txt file:
1. A command to concert-this, spotify-this-song, or movie-this. Types 3 and 4 don't have an inputString[3], and type 2 has "change" as its searchType.
2. A command specifically for the change searchType.
3. A command for the do-what-it-says searchType.
4. A command for the default searches for concert-this, spotify-this-song, and movie-this.

I have log.txt open in all of my gifs to show how it is updated with different commands.

![First Screenshot](/screenshot2.png)

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Here's the code for the concert function. Concert, song, and movie all start with a conditional. If inputString[3] is empty, and the search didn't come from the do-what-it-says command, it will do the default search. The date results are formatted to MM/DD/YYYY with moment.

![First Screenshot](/screenshot3.png)

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Here's a gif for using the concert function:

![First GIF](/liri1.gif)

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

This catch is after the concert function, but I have the same catch after the song and movie functions.

![First Screenshot](/screenshot4.png)

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Here's the code for the song function. The reason for the indexV variable is that the assignment specifies that the default song should be "The Sign" by Ace of Base, but if you search "The Sign," that isn't the first song to come up, it's the third song to come up (even though the first two songs are not actually called "The Sign," go figure). In order to make that come up, I set the indexV variable to 2 in the conditional for the default song.

![First Screenshot](/screenshot5.png)

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

And here's a gif for using the song function:

![First GIF](/liri2.gif)

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Here's the code for the movie function:

![First Screenshot](/screenshot6.png)

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

And here's a gif for using the movie function:

![First GIF](/liri3.gif)

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Here's the code for the read and write functions (used for the do-what-it-says and change commands, respectively):

![First Screenshot](/screenshot7.png)

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

This gif shows the read function in action: 

![First GIF](/liri4.gif)

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

And the next three gifs show the write function in action. The first shows it changing the random.txt file to a concert-this search, the second changes it to a spotify-this-song search, and the third one changes it to a movie-this search. They have the random.txt file open so you can see it being updated in real time. 

Note that after changing the random.txt file, I run the new do-what-it-says command, and show that it's working by running the same commmand using the corresponding search feature directly. For instance, after changing the txt file to movie-this,Doctor Strange, I run node liri.js movie-this Doctor Strange, as well as node liri.js do-what-it-says to show that it works.

![First GIF](/liri5.gif)

![First GIF](/liri6.gif)

![First GIF](/liri7.gif)

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<!-- Contain a link to a deployed version of the app -->
Here's a link to the deployed version of the app:
https://tim1986.github.io/liri-node-app/

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Development Process

<!-- Clearly list the technologies used in the app -->
The app uses the Bands in Town, Spotify, and OMDB APIs, as well as the Axios, Node-Spotify-API, Dotenv, FS, and Moment NPMs.

<!-- State your role in the app development -->
I'm a student six weeks into a twelve week coding boot camp at UNC Charlotte. I was given this project as an assignment, and given clear instructions on how to set up the package.json file, the .gitignore file, and the keys.js and .env files for holding my spotify API keys. I have also been given a series of activities on how to use node.js that I have used as guides in order to write this code. I have also received some direction in my process from my instructor and TAs. I wrote this code, with those significant caveats.