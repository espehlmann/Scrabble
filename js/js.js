/*
 COMP 4610 91.61 GUI Programming I
 Erika Spehlmann erika_spehlmann@student.uml.edu
 Last updated: December 17, 2018
 Copyright (c) 2018 by Erika Spehlmann. All rights reserved.
 This webpage creates a game of Scrabble using jQuery UI

 This file writes the algorithm behind the game and generates 7 random tiles to begin.
 It counts the points and displays the word being played and score while contantly updating.
*/

var hand = ["blank", "blank", "blank", "blank", "blank", "blank", "blank"]; //keep track of hand
var points = 0;         //keep track of points
var alreadyDone = 0;    //helper for a double word score
var playedWord = "";    //Played word
var tilesPlayed = 0;    //how many tiles were played
var dblwd = 0;          //double word bool
var spacesPlayed = [];  //keep track of which spaces tiles were placed on

//This should keep track of the score
function countTiles(cur, dw, dl){
  var curLetter;
  tilesPlayed++;
  if (cur == "tile1")
  {
    curLetter= hand[0];
  }
  else if (cur == "tile2")
  {
    curLetter= hand[1];
  }
  else if (cur == "tile3")
  {
    curLetter= hand[2];
  }
  else if (cur == "tile4")
  {
    curLetter= hand[3];
  }
  else if (cur == "tile5")
  {
    curLetter= hand[4];
  }
  else if (cur == "tile6")
  {
    curLetter= hand[5];
  }
  else if (cur == "tile7")
  {
    curLetter= hand[6];
  }
  var temp;
  //If the score had already been doubled, divide by 2
  if (dblwd && alreadyDone) {
      points = points/2;
  }
  //check if double letter tile
  if (dl){
      temp = ScrabbleTiles[curLetter].value * 2;
      points = points + temp;
    }
    else {
      points = points + ScrabbleTiles[curLetter].value;
    }

  //update played word
  playedWord = playedWord + curLetter;

  //double points for 7 tiles played
  if (tilesPlayed == 7)
    points = points * 2;
  if (dblwd)
  {
    points = points*2;
    alreadyDone = 1;
  }
  console.log("Sum: ", points);
  var newString = "Score: " + points + " Your Word: " + playedWord;
  document.getElementById('score').innerHTML = newString;
  console.log(spacesPlayed);
}

//Function to add 7 random tiles to div id draggable
window.onload = function addTiles(){
  var x = 0;
//  var src = document.getElementById('tiles' + x);
  for (x=1; x<8;x++)
  {
    var src = document.getElementById('tile' + x);
    var rand = Math.floor((Math.random()*100)+1);
    var letter;
    var img = document.createElement("img");
    if (rand <=9){
      letter = "A";
      img.src="images/Scrabble_Tile_A.jpg";
    }
    else if (rand <=11){
      letter = "B";
      img.src="images/Scrabble_Tile_B.jpg";
    }
    else if (rand <=13){
      letter = "C";
      img.src="images/Scrabble_Tile_C.jpg";
    }
    else if (rand <=15){
      letter = "D";
      img.src="images/Scrabble_Tile_D.jpg";
    }
    else if (rand <=27){
      letter = "E";
      img.src="images/Scrabble_Tile_E.jpg";
    }
    else if (rand <=29){
      letter = "F";
      img.src="images/Scrabble_Tile_F.jpg";
    }
    else if (rand <=33){
      letter = "G";
      img.src="images/Scrabble_Tile_G.jpg";
    }
    else if (rand <=35){
      letter = "H";
      img.src="images/Scrabble_Tile_H.jpg";
    }
    else if (rand <=44){
      letter = "I";
      img.src="images/Scrabble_Tile_I.jpg";
    }
    else if (rand <=45){
      letter = "J";
      img.src="images/Scrabble_Tile_J.jpg";
    }
    else if (rand <=46){
      letter = "K";
      img.src="images/Scrabble_Tile_K.jpg";
    }
    else if (rand <=50){
      letter = "L";
      img.src="images/Scrabble_Tile_L.jpg";
    }
    else if (rand <=52){
      letter = "M";
      img.src="images/Scrabble_Tile_M.jpg";
    }
    else if (rand <=58){
      letter = "N";
      img.src="images/Scrabble_Tile_N.jpg";
    }
    else if (rand <=66){
      letter = "O";
      img.src="images/Scrabble_Tile_O.jpg";
    }
    else if (rand <=68){
      letter = "P";
      img.src="images/Scrabble_Tile_P.jpg";
    }
    else if (rand <=69){
      letter = "Q";
      img.src="images/Scrabble_Tile_Q.jpg";
    }
    else if (rand <=75){
      letter = "R";
      img.src="images/Scrabble_Tile_R.jpg";
    }
    else if (rand <=79){
      letter = "S";
      img.src="images/Scrabble_Tile_S.jpg";
    }
    else if (rand <=85){
      letter = "T";
      img.src="images/Scrabble_Tile_T.jpg";
    }
    else if (rand <=89){
      letter = "U";
      img.src="images/Scrabble_Tile_U.jpg";
    }
    else if (rand <=91){
      letter = "V";
      img.src="images/Scrabble_Tile_V.jpg";
    }
    else if (rand <=93){
      letter = "W";
      img.src="images/Scrabble_Tile_W.jpg";
    }
    else if (rand <=94){
      letter = "X";
      img.src="images/Scrabble_Tile_X.jpg";
    }
    else if (rand <=96){
      letter = "Y";
      img.src="images/Scrabble_Tile_Y.jpg";
    }
    else if (rand <=97){
      letter = "Z";
      img.src="images/Scrabble_Tile_Z.jpg";
    }
    else {
      letter = "_";
      img.src="images/Scrabble_Tile_Blank.jpg";
    }
    img.setAttribute("class", "pieces");
    hand[x-1] = letter;
    src.appendChild(img);
  }
  console.log(hand);
}

//function to get 7 new tiles
function newTiles(){
var x = 0;
// get rid of old tiles
for (x = 1; x < 8 ; x++){
  var element = document.getElementById('tile' + x);
  element.parentNode.removeChild(element);
}
  for (x=1; x<8;x++)
  {
    var ogSrc = document.getElementById('tiles');
    var src = document.createElement('tile' + x);
    var rand = Math.floor((Math.random()*100)+1);
    var letter;
    var img = document.createElement("img");;
    if (rand <=9){
      letter = "A";
      img.src="images/Scrabble_Tile_A.jpg";
    }
    else if (rand <=11){
      letter = "B";
      img.src="images/Scrabble_Tile_B.jpg";
    }
    else if (rand <=13){
      letter = "C";
      img.src="images/Scrabble_Tile_C.jpg";
    }
    else if (rand <=15){
      letter = "D";
      img.src="images/Scrabble_Tile_D.jpg";
    }
    else if (rand <=27){
      letter = "E";
      img.src="images/Scrabble_Tile_E.jpg";
    }
    else if (rand <=29){
      letter = "F";
      img.src="images/Scrabble_Tile_F.jpg";
    }
    else if (rand <=33){
      letter = "G";
      img.src="images/Scrabble_Tile_G.jpg";
    }
    else if (rand <=35){
      letter = "H";
      img.src="images/Scrabble_Tile_H.jpg";
    }
    else if (rand <=44){
      letter = "I";
      img.src="images/Scrabble_Tile_I.jpg";
    }
    else if (rand <=45){
      letter = "J";
      img.src="images/Scrabble_Tile_J.jpg";
    }
    else if (rand <=46){
      letter = "K";
      img.src="images/Scrabble_Tile_K.jpg";
    }
    else if (rand <=50){
      letter = "L";
      img.src="images/Scrabble_Tile_L.jpg";
    }
    else if (rand <=52){
      letter = "M";
      img.src="images/Scrabble_Tile_M.jpg";
    }
    else if (rand <=58){
      letter = "N";
      img.src="images/Scrabble_Tile_N.jpg";
    }
    else if (rand <=66){
      letter = "O";
      img.src="images/Scrabble_Tile_O.jpg";
    }
    else if (rand <=68){
      letter = "P";
      img.src="images/Scrabble_Tile_P.jpg";
    }
    else if (rand <=69){
      letter = "Q";
      img.src="images/Scrabble_Tile_Q.jpg";
    }
    else if (rand <=75){
      letter = "R";
      img.src="images/Scrabble_Tile_R.jpg";
    }
    else if (rand <=79){
      letter = "S";
      img.src="images/Scrabble_Tile_S.jpg";
    }
    else if (rand <=85){
      letter = "T";
      img.src="images/Scrabble_Tile_T.jpg";
    }
    else if (rand <=89){
      letter = "U";
      img.src="images/Scrabble_Tile_U.jpg";
    }
    else if (rand <=91){
      letter = "V";
      img.src="images/Scrabble_Tile_V.jpg";
    }
    else if (rand <=93){
      letter = "W";
      img.src="images/Scrabble_Tile_W.jpg";
    }
    else if (rand <=94){
      letter = "X";
      img.src="images/Scrabble_Tile_X.jpg";
    }
    else if (rand <=96){
      letter = "Y";
      img.src="images/Scrabble_Tile_Y.jpg";
    }
    else if (rand <=97){
      letter = "Z";
      img.src="images/Scrabble_Tile_Z.jpg";
    }
    else {
      letter = "_";
      img.src="images/Scrabble_Tile_Blank.jpg";
    }
    img.setAttribute("class", "pieces");
    hand[x-1] = letter;
    src.appendChild(img);
    ogSrc.appendChild(src);
  }
  console.log(hand);
}

// Found on https://jqueryui.com/draggable/
$( function() {
  $( "#tiles" ).draggable({ revert: 'invalid' });
  $( "#tile1" ).draggable({ revert: 'invalid' });
  $( "#tile2" ).draggable({ revert: 'invalid' });
  $( "#tile3" ).draggable({ revert: 'invalid' });
  $( "#tile4" ).draggable({ revert: 'invalid' });
  $( "#tile5" ).draggable({ revert: 'invalid' });
  $( "#tile6" ).draggable({ revert: 'invalid' });
  $( "#tile7" ).draggable({ revert: 'invalid' });
} );

//Make each space on board droppable and call count tiles on each drop
// droppable area taken from:
// http://www.mrgeek.me/technology/tutorials/jquery/how-to-accept-multiple-items-in-a-droppable-element-jquery/
// out function taken from https://stackoverflow.com/questions/3948447/jquery-ui-droppable-only-accept-one-draggable
$( function() {
  $( "#space1" ).droppable({
    tolerance:"intersect",
    drop: function( event, ui ) {
    var currentId = $(ui.draggable).attr('id');
        if(currentId == "draggable"){
            $( this )
              console.log("good");
        } else {
            $( this )
              //count points in here
              countTiles(currentId, 0, 0);
              spacesPlayed[tilesPlayed] = 1;
        }
      }
  //    out: function(event, ui){
  //    $(this).droppable('option', 'accept', '.drag-item');
  //    }
});
});

$( function() {
  $( "#space2" ).droppable({
    tolerance:"intersect",
    drop: function( event, ui ) {
    var currentId = $(ui.draggable).attr('id');
        if(currentId == "draggable"){
            $( this )
              console.log("dw");
        } else {
            $( this )
              //count points in here
              countTiles(currentId, 0, 0);
              spacesPlayed[tilesPlayed-1] = 2;
        }
      }
  //    out: function(event, ui){
  //    $(this).droppable('option', 'accept', '.drag-item');
  //    }
});
});

$( function() {
  $( "#space3" ).droppable({
    tolerance:"intersect",
    drop: function( event, ui ) {
    var currentId = $(ui.draggable).attr('id');
        if(currentId == "draggable"){
            $( this )
              console.log("dl");
        } else {
            $( this )
              //count points in here
              dblwd = 1;
              countTiles(currentId, 1, 0);
              spacesPlayed[tilesPlayed-1] = 3;
        }
      }
  //    out: function(event, ui){
  //    $(this).droppable('option', 'accept', '.drag-item');
  //    }
});
});

$( function() {
  $( "#space4" ).droppable({
    tolerance:"intersect",
    drop: function( event, ui ) {
    var currentId = $(ui.draggable).attr('id');
        if(currentId == "draggable"){
            $( this )
              console.log("dl");
        } else {
            $( this )
              //count points in here
              countTiles(currentId, 0 ,0);
              spacesPlayed[tilesPlayed-1] = 4;
        }
      }
  //    out: function(event, ui){
  //    $(this).droppable('option', 'accept', '.drag-item');
  //    }
});
});

$( function() {
  $( "#space5" ).droppable({
    tolerance:"intersect",
    drop: function( event, ui ) {
    var currentId = $(ui.draggable).attr('id');
        if(currentId == "draggable"){
            $( this )
              console.log("dl");
        } else {
            $( this )
              //count points in here
              countTiles(currentId, 0, 0);
              spacesPlayed[tilesPlayed-1] = 5;
        }
      }
  //    out: function(event, ui){
  //    $(this).droppable('option', 'accept', '.drag-item');
  //    }
});
});
$( function() {
  $( "#space6" ).droppable({
    tolerance:"intersect",
    drop: function( event, ui ) {
    var currentId = $(ui.draggable).attr('id');
        if(currentId == "draggable"){
            $( this )
              console.log("dl");
        } else {
            $( this )
              //count points in here
              countTiles(currentId, 0 ,0);
              spacesPlayed[tilesPlayed-1] = 6;
        }
  }
//    out: function(event, ui){
//    $(this).droppable('option', 'accept', '.drag-item');
//    }
});
});
$( function() {
  $( "#space7" ).droppable({
    tolerance:"intersect",
    drop: function( event, ui ) {
    var currentId = $(ui.draggable).attr('id');
        if(currentId == "draggable"){
            $( this )
              console.log("dl");
        } else {
            $( this )
              //count points in here
              countTiles(currentId, 0 ,1);
              spacesPlayed[tilesPlayed-1] = 7;
        }
      }
  //    out: function(event, ui){
  //    $(this).droppable('option', 'accept', '.drag-item');
  //    }
});
});
$( function() {
  $( "#space8" ).droppable({
    tolerance:"intersect",
    drop: function( event, ui ) {
    var currentId = $(ui.draggable).attr('id');
        if(currentId == "draggable"){
            $( this )
              console.log("dl");
        } else {
            $( this )
              //count points in here
              countTiles(currentId, 0, 0);
              spacesPlayed[tilesPlayed-1] = 8;
        }
      }
  //    out: function(event, ui){
  //    $(this).droppable('option', 'accept', '.drag-item');
  //    }
});
});
$( function() {
  $( "#space9" ).droppable({
    tolerance:"intersect",
    drop: function( event, ui ) {
    var currentId = $(ui.draggable).attr('id');
        if(currentId == "draggable"){
            $( this )
              console.log("dl");
        } else {
            $( this )
              //count points in here
              countTiles(currentId, 0 ,0);
              spacesPlayed[tilesPlayed-1] = 9;
        }
      }
  //    out: function(event, ui){
  //    $(this).droppable('option', 'accept', '.drag-item');
  //    }
});
});
$( function() {
  $( "#space10" ).droppable({
    tolerance:"intersect",
    drop: function( event, ui ) {
    var currentId = $(ui.draggable).attr('id');
        if(currentId == "draggable"){
            $( this )
              console.log("dl");
        } else {
            $( this )
              //count points in here
              countTiles(currentId, 0 ,0);
              spacesPlayed[tilesPlayed-1] = 10;
        }
      }
  //    out: function(event, ui){
  //    $(this).droppable('option', 'accept', '.drag-item');
  //    }
});
});
$( function() {
  $( "#space11" ).droppable({
    tolerance:"intersect",
    drop: function( event, ui ) {
    var currentId = $(ui.draggable).attr('id');
        if(currentId == "draggable"){
            $( this )
              console.log("dl");
        } else {
            $( this )
              //count points in here
              countTiles(currentId, 0, 0);
              spacesPlayed[tilesPlayed-1] = 11;
        }
      }
  //    out: function(event, ui){
  //    $(this).droppable('option', 'accept', '.drag-item');
  //    }
});
});
$( function() {
  $( "#space12" ).droppable({
    tolerance:"intersect",
    drop: function( event, ui ) {
    var currentId = $(ui.draggable).attr('id');
        if(currentId == "draggable"){
            $( this )
              console.log("dl");
        } else {
            $( this )
              //count points in here
              countTiles(currentId, 0 ,0);
              spacesPlayed[tilesPlayed-1] = 12;
        }
      }
  //    out: function(event, ui){
  //    $(this).droppable('option', 'accept', '.drag-item');
  //    }
});
});
$( function() {
  $( "#space13" ).droppable({
    tolerance:"intersect",
    drop: function( event, ui ) {
    var currentId = $(ui.draggable).attr('id');
        if(currentId == "draggable"){
            $( this )
              console.log("dl");
        } else {
            $( this )
              //count points in here
              dblwd = 1;
              countTiles(currentId, 1, 0);
              spacesPlayed[tilesPlayed-1] = 13;
        }
      }
  //    out: function(event, ui){
  //    $(this).droppable('option', 'accept', '.drag-item');
  //    }
});
});
$( function() {
  $( "#space14" ).droppable({
    tolerance:"intersect",
    drop: function( event, ui ) {
    var currentId = $(ui.draggable).attr('id');
        if(currentId == "draggable"){
            $( this )
              console.log("dl");
        } else {
            $( this )
              //count points in here
              countTiles(currentId, 0, 0);
              spacesPlayed[tilesPlayed-1] = 14;
        }
    }
//    out: function(event, ui){
//    $(this).droppable('option', 'accept', '.drag-item');
//    }
});
});
$( function() {
  $( "#space15" ).droppable({
    tolerance:"intersect",
    drop: function( event, ui ) {
    var currentId = $(ui.draggable).attr('id');
        if(currentId == "draggable"){
            $( this )
              console.log("dl");
        } else {
            $( this )
              //count points in here
              countTiles(currentId, 0 ,0);
              spacesPlayed[tilesPlayed-1] = 15;
        }
      }
  //    out: function(event, ui){
  //    $(this).droppable('option', 'accept', '.drag-item');
  //    }
});
});

// Creator: Jesse Heines
// Use to keep track of each tile piece, their associated value and amount.
var ScrabbleTiles = [] ;
ScrabbleTiles["A"] = { "value" : 1,  "original-distribution" : 9,  "number-remaining" : 9  } ;
ScrabbleTiles["B"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2  } ;
ScrabbleTiles["C"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2  } ;
ScrabbleTiles["D"] = { "value" : 2,  "original-distribution" : 4,  "number-remaining" : 4  } ;
ScrabbleTiles["E"] = { "value" : 1,  "original-distribution" : 12, "number-remaining" : 12 } ;
ScrabbleTiles["F"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2  } ;
ScrabbleTiles["G"] = { "value" : 2,  "original-distribution" : 3,  "number-remaining" : 3  } ;
ScrabbleTiles["H"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2  } ;
ScrabbleTiles["I"] = { "value" : 1,  "original-distribution" : 9,  "number-remaining" : 9  } ;
ScrabbleTiles["J"] = { "value" : 8,  "original-distribution" : 1,  "number-remaining" : 1  } ;
ScrabbleTiles["K"] = { "value" : 5,  "original-distribution" : 1,  "number-remaining" : 1  } ;
ScrabbleTiles["L"] = { "value" : 1,  "original-distribution" : 4,  "number-remaining" : 4  } ;
ScrabbleTiles["M"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2  } ;
ScrabbleTiles["N"] = { "value" : 1,  "original-distribution" : 6,  "number-remaining" : 6  } ;
ScrabbleTiles["O"] = { "value" : 1,  "original-distribution" : 8,  "number-remaining" : 8  } ;
ScrabbleTiles["P"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2  } ;
ScrabbleTiles["Q"] = { "value" : 10, "original-distribution" : 1,  "number-remaining" : 1  } ;
ScrabbleTiles["R"] = { "value" : 1,  "original-distribution" : 6,  "number-remaining" : 6  } ;
ScrabbleTiles["S"] = { "value" : 1,  "original-distribution" : 4,  "number-remaining" : 4  } ;
ScrabbleTiles["T"] = { "value" : 1,  "original-distribution" : 6,  "number-remaining" : 6  } ;
ScrabbleTiles["U"] = { "value" : 1,  "original-distribution" : 4,  "number-remaining" : 4  } ;
ScrabbleTiles["V"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2  } ;
ScrabbleTiles["W"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2  } ;
ScrabbleTiles["X"] = { "value" : 8,  "original-distribution" : 1,  "number-remaining" : 1  } ;
ScrabbleTiles["Y"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2  } ;
ScrabbleTiles["Z"] = { "value" : 10, "original-distribution" : 1,  "number-remaining" : 1  } ;
ScrabbleTiles["_"] = { "value" : 0,  "original-distribution" : 2,  "number-remaining" : 2  } ;
