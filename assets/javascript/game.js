//=====GLOBAL VARIABLES=====//

var randomNum,
  totalWins = 0,
  totalLosses = 0,
  previousNum = 0;

//=================================================================
//RANDOM NUMBER GENERATORS --- RESET AND START GAME
//=================================================================

var startReset = function() {
    //sets the crystals and user guess to zero
    $(".jewels").empty();
    $("#total-guess").empty();
    //add the Images
    var images = [
        "assets/images/jewel1.png",
        "assets/images/jewel2.png",
        "assets/images/jewel3.png",
        "assets/images/jewel4.png"
      ];
    //randomly generated number to be guessed between 19 and 120 ((max - min +1) + min)
    randomNum = Math.floor((Math.random() * 102) + 19);
    //console.log(randomNum);
    $("#random-number").html(randomNum);

    for (var i = 0; i < 4; i++) {
      //creates a random number for each crystal between 1 and 12
      var random = Math.floor((Math.random() * 12) + 1);
      //console.log(random);
      //creates four div containers to hold each crystal
      var jewel = $("<div>");
      jewel.attr({ //adds attributes to the jewel divs
        "class": 'jewel',
        "data-random": random
      })
      jewel.css({ //adds background images to jewel divs using the images in the images array
        "background-image":"url(" + images[i] + ")",
        "background-size":"cover"
      });

      $(".jewels").append(jewel); //adds the jewel divs one right after the other inside the jewels div
    }
  }
  startReset();

//=================================================================

    //runs function when the jewels are clicked
    $(document).on("click", ".jewel", function() {
      //adds the data-random attribute to this function which adds a random number to each crystal
      var num = parseInt($(this).attr("data-random")); //parseInt takes the data-random string and returns it as a number

      previousNum += num; //adds the last guessed number to the next guessed number

      $("#total-guess").html(previousNum); //place player guess in html total-guess div

      console.log(previousNum);

      if (previousNum > randomNum) { //if player guess goes over the random number

        $("#win-loss-alert").html("You Lost!"); console.log("you lost");

        totalLosses++; //add to losses
        previousNum = 0; //resets the previous number to zero on reset
        $("#losses").html(totalLosses);//place wins in html losses div
        startReset();

      } else if (previousNum === randomNum) { //if player guess equals the random number

        $("#win-loss-alert").html("You Won!"); console.log("you won");

        totalWins++; //add to wins
        previousNum = 0; //resets the previous number to zero on reset
        $("#wins").html(totalWins); //place wins in html wins div
        startReset();
      };


    });

    //}
