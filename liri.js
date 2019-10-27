require("dotenv").config();

var keys = require("./keys.js");
var bit = keys.bit.api_id;
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var omdbKey = keys.omdb.api_key;
// var request = require('request');
var fs = require('fs');
var moment = require('moment')
var axios = require('axios');

var a = process.argv[2];
var b = process.argv[3];

switch (a) {
    case ('concert-this'):
        concerts(b);
   break;
    case ('spotify-this-song'):
        if(b){
            spotifyThisSong(b);
         } else{
            spotifyThisSong('The Sign');
         }
    break;
    case ('movie-this'):
        if(b){
            omdb(b);
        } else{
            omdb("Mr. Nobody");
        }
    break;
    case ('do-what-it-says'):
         doThing();
    break;
    default:
        console.log('Try again');
};

function concerts(artist){

    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=" + bit).then(
        function(response) { 
            var body =(response.data);
            // console.log(body)
            var date = body[0].datetime
            console.log("Name of the venue: " + body[0].venue.name);
            console.log(`Venue location: ${body[0].venue.city} ${body[0].venue.region}`);
            console.log(`Date of the Event:  ${moment(date).format("MM/DD/YYYY")}`);
        })
        .catch(function(error) {
          if (error.response) {
           

          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an object that comes back with details pertaining to the error that occurred.
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log("Error", error.message);
          }
          console.log(error.config);
        });

    }

function spotifyThisSong(song){
    spotify.search({ type: 'track', query: song, limit: 1}, function(error, data){
        if(!error){
        for(var i = 0; i < data.tracks.items.length; i++){
            var songData = data.tracks.items[i];
                      //artist
            console.log("Artist: " + songData.artists[0].name);
                      //song name
            console.log("Song: " + songData.name);
                      //spotify preview link
            console.log("Preview URL: " + songData.preview_url);
                      //album name
            console.log("Album: " + songData.album.name);
            console.log("-----------------------");
            } 
        } else {
        console.log('Error occurred.');
        }
    });
    }

    function omdb(movie){
  axios.get('http://www.omdbapi.com/?t=' + movie + '&apikey=' + omdbKey + '&plot=short&tomatoes=true').then(
        function(response) { 
            var body =(response.data);
           
            console.log("Title: " + body.Title);
            console.log("Release Year: " + body.Year);
            console.log("IMdB Rating: " + body.imdbRating);
            console.log("Country: " + body.Country);
            console.log("Language: " + body.Language);
            console.log("Plot: " + body.Plot);
            console.log("Actors: " + body.Actors);
            console.log("Rotten Tomatoes Rating: " + body.tomatoRating);
            console.log("Rotten Tomatoes URL: " + body.tomatoURL);

            if(movie === "Mr. Nobody"){
                console.log("-----------------------");
                console.log("If you haven't watched 'Mr. Nobody,' then you should: http://www.imdb.com/title/tt0485947/");
                console.log("It's on Netflix!");
    
              }
        })
        .catch(function(error) {
          if (error.response) {
           

          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an object that comes back with details pertaining to the error that occurred.
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log("Error", error.message);
          }
          console.log(error.config);
        });

    }

      function doThing(){
        fs.readFile('random.txt', "utf8", function(error, data){
          var txt = data.split(',');
      
          spotifyThisSong(txt[1]);
        });
      }