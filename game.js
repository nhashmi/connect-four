$(document).ready(function(){

  var pieces = $(".piece");

  // function startGame(){
    
  //   // 
  //   // console.log(pieces)
  //   // for (var i = 0; i < pieces.length; i++) {
  //   //   console.log(pieces[i]);
  //   //   pieces[i].fadeIn(400);
  //   // };

  // }

  // startGame();


  function playGame(){
    redTurn = true;

    for (var i = 0; i < pieces.length; i++) {
      var piece = $(pieces[i]);
      
      piece.click(function(){
        if (redTurn && !$(this).hasClass("clicked")) {
          $(this).addClass("clicked");
          console.log(this)
          $(this).css("background", "red");
          redTurn = false;
        } else if (!redTurn && !$(this).hasClass("clicked")) {
          $(this).addClass("clicked");
          $(this).css("background", "#000");
          redTurn = true;
        } else {
          alert("That piece has already been clicked!");
        }
      });

    }
  }



  playGame();














});

