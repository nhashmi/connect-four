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

  // function changeColor(evt){

  // }

  function playGame(){
    for (var i = 0; i < pieces.length; i++) {
      var piece = $(pieces[i])
      piece.click(function(){
        $(this).css("background", "red");
      });
    }
  }



  playGame();














});

