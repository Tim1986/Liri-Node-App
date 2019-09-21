# liri-node-app

## Overview

The Liri Node App makes it extremely easy to search the included APIs for information, simply by using the terminal. It currently includes Bands in Town (for upcoming concerts), Spotify (for song information), and OMDB (for movie information), but it could very easily be adapted to include any number of others by simply adding more searchType options in the switchcase and adding corresponding functions below. 

This app is designed to make reviewing your search information extremely easy by logging your searches in your console, and additionally logging them in a log.txt document, with each new command giving line breaks for easy readability. The app also has built in functionality for reading outside documents (currently just a simple .txt file) and running searches based on their contents. It also has an additional command option "change," which can be used to rewrite the .txt file, so you can run searches from it as well.

## Installation

In order to use this app, follow these steps:
1. Clone this repository: https://github.com/Tim1986/liri-node-app. 
2. Install the necessary npms. Using your terminal, navigate to the folder with the cloned repository, and type npm install. 
3. The node-spotify-api requires a client ID and client secret. Go to https://developer.spotify.com/my-applications/#!/ and log in or create an account. Then go to https://developer.spotify.com/my-applications/#!/applications/create to register a new application.
4. Make a file named .env and add the following to it, using your client ID and client secret from spotify:
SPOTIFY_ID=your-spotify-id
SPOTIFY_SECRET=your-spotify-secret

## Overview
The app is organized in three simple parts for easy readability:

The first section has our dotenv, spotify, axios, moment, and fs requires, followed by three convenience variables for the parts of the process.argv we'll be regularly using.

The second section is our very straightforward switchcase, which takes the third input from the command line to determine which type of command to run. It logs the command using the log function, then runs the appropriate function. If the third input is not a valid command, it logs that it isn't a recognize command.

The third section is our list of functions. The first is log (used before all other functions), then our three search functions: concert (for Bands in Town), song (for Spotify), and movie (for OMDB). After that we have our read file and write file functions (called read and write, respectively).

## How to Use It
To run the app, navigate to the file in your command line, and type "node liri.js." You can follow that with five possible options: concert-this, spotify-this-song, movie-this, do-what-it-says, and change. You can simply follow concert-this, spotify-this-song, or movie-this with a search you want to make about a band/artist, song, or movie, respectively. No need to worry about spaces, hyphens, or quotation marks for these searches. Just type it out normally with spaces and the app will grab your search, no problem. 

For instance, if you wanted to do a search for the singer Carrie Underwood, you would type: node liri.js concert-this Carrie Underwood. If you wanted to do a search for the song Dream On, you would type: node liri.js spotify-this-song Dream On. If you wanted to do a search for the movie Inside Out, you would type: node liri.js movie-this Inside Out. If you don't put in a search term for any of these searches, it will default search to the band "Switchfoot," the song "The Sign" by Ace of Base, and the movie "Mr Nobody."

If you use the do-what-it-says command, you don't need to type out a search. The app will read the random.txt file to determine which search type it should use, and what it should search for. Simply type: node liri.js do-what-it-says.

If you want to rewrite the random.txt file, follow node liri.js with "change", followed by the search type and search content you want to write into the file. For instance, if you want to rewrite the random.txt file so the do-what-it-says command will do a movie search for Toy Story, you would type: node liri.js change movie-this Toy Story. The console will even remind you that node liri.js do-what-it-says will do exactly the same command as your previous command without the word "change" (in this case, node liri.js movie-this Toy Story).

All of these searches will log your command in the log.txt file, as well as the search contents.

## Gifs

There are four different types of commands the log function might log in the log.txt file:
1. A command for concert-this, spotify-this-song, or movie-this.
2. A command specifically for the change searchType.
3. A command for the do-what-it-says searchType.
4. A command for the default searches for concert-this, spotify-this-song, and movie-this.

I have log.txt open in all of my gifs to show how it is updated with different commands.

Concert, song, and movie all start with a conditional. If inputString[3] is empty, and the search didn't come from the do-what-it-says command, it will do the default search. The date results are formatted to MM/DD/YYYY with moment.

Here's a gif for using the concert function:

![First GIF](/liri1.gif)

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Here's a gif for using the song function:

![First GIF](/liri2.gif)

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Here's a gif for using the movie function:

![First GIF](/liri3.gif)

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

Here's a link to the deployed version of the app:
https://tim1986.github.io/liri-node-app/

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Development Process

The app uses the Bands in Town, Node-Spotify, and OMDB APIs, as well as the Axios, Dotenv, FS, and Moment NPMs.

I made this app while I was a student six weeks into a twelve week coding boot camp at UNC Charlotte. I was given this project as an assignment, and given a series of activities on how to use node.js that I have used as guides in order to write this code. I wrote this code, with those caveats. I was given specific default songs to include, and the do-what-it-says feature was part of the assignment. 

Allowing the user to change the .txt file so do-what-it-says would give different commands was outside the scope of the assignment. It was just something I wanted to try.
