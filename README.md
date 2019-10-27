# ALIRI-Bot

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
* [Moment] (https://www.npmjs.com/package/moment)
* [spotify](https://www.npmjs.com/package/node-spotify-api) 
* [axios](https://www.npmjs.com/package/axios)
* [dotenv](https://www.npmjs.com/package/dotenv) 

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

## Author
* **ALi Rahimlou** 

