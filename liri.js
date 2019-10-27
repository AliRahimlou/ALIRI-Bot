require("dotenv").config();

var keys = require("./keys.js");
var bit = keys.bit.api_id;
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var omdbKey = keys.omdb.api_key;
var request = require('request');
var fs = require('fs');
var axios = require("axios");
var moment = require('moment')

const a = process.argv[2];
const b = process.argv[3];

switch (a) {
    case ('concert-this'):
        if(b){
            concerts(b);
         } else{
            concerts('The Sign');
         }
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
    case ('do'):
         doThing();
    break;
    default:
        console.log('Try again');
};

function concerts(artist){
    var bitURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=" + bit;

    request(bitURL, function (error, response, body){
        if(!error && response.statusCode == 200){
          var body = JSON.parse(response.body);
    
        //   console.log(body);
          console.log("Name of the venue: " + body[0].venue.name);
          console.log(`Venue location: ${body[0].venue.city} ${body[0].venue.region}`);
          console.log(`Date of the Event: ${body[0].datetime}`);
          
        } else{
          console.log('Error occurred.')
        }
        
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
        var omdbURL = 'http://www.omdbapi.com/?t=' + movie + '&apikey=' + omdbKey + '&plot=short&tomatoes=true';
      
        request(omdbURL, function (error, response, body){
          if(!error && response.statusCode == 200){
            var body = JSON.parse(body);
      
            console.log("Title: " + body.Title);
            console.log("Release Year: " + body.Year);
            console.log("IMdB Rating: " + body.imdbRating);
            console.log("Country: " + body.Country);
            console.log("Language: " + body.Language);
            console.log("Plot: " + body.Plot);
            console.log("Actors: " + body.Actors);
            console.log("Rotten Tomatoes Rating: " + body.tomatoRating);
            console.log("Rotten Tomatoes URL: " + body.tomatoURL);
            
          } else{
            console.log('Error occurred.')
          }
          if(movie === "Mr. Nobody"){
            console.log("-----------------------");
            console.log("If you haven't watched 'Mr. Nobody,' then you should: http://www.imdb.com/title/tt0485947/");
            console.log("It's on Netflix!");

          }
        });
      
      }

      function doThing(){
        fs.readFile('random.txt', "utf8", function(error, data){
          var txt = data.split(',');
      
          spotifyThisSong(txt[1]);
        });
      }