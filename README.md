# ALIRI-Bot
ALIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

## ALIRI uses the following commands:
```
concert-this
```
```
spotify-this-song
```
```
movie-this
```
```
do-what-it-says
```

## Technologies used:

* Node.js
* Javascript

## npm packages: 
* [Moment](https://www.npmjs.com/package/moment) A lightweight JavaScript date library for parsing, validating, manipulating, and formatting dates.
* [spotify](https://www.npmjs.com/package/node-spotify-api) A simple to use API library for the Spotify REST API.
* [axios](https://www.npmjs.com/package/axios) Promise based HTTP client for the browser and node.js
* [dotenv](https://www.npmjs.com/package/dotenv) Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env.

## How to Run ALIRI-Bot

* Step One: node liri concert-this ```<band name here>```.
    This will show the following information: 
    * Name of the venue
    * Venue location
    * Date of the Event 

* Step Two: node liri spotify-this-song ```<song name here>```.
	
	This will show the following information: 
	* Artist(s) 
	* The song's name 
	* A preview link of the song from Spotify 
	* The album that the song is from

	If no song is provided then the program will default to
    "The Sign" by Ace of Base.

* Step Three: node liri.js movie-this ```<movie name here>```.
	
	This will output the following information to your terminal/bash window:
	* Title of the movie.
	* Year the movie came out.
	* IMDB Rating of the movie.
	* Country where the movie was produced.
	* Language of the movie.
	* Plot of the movie.
	* Actors in the movie.
	* Rotten Tomatoes Rating.
	* Rotten Tomatoes URL.
	
	If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
    
* Step Four: node liri.js do-what-it-says

	This will output the command placed in random.txt file

	https://alirahimlou.github.io/ALIRI-Bot/

## Author
* **ALi Rahimlou** 

