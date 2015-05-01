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
        if (redTurn) {
          $(this).css("background", "red");
          redTurn = false;
        } else {
          $(this).css("background", "#000");
          redTurn = true;
        }
        
      });

    }
  }



  playGame();














});

