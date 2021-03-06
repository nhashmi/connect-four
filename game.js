$(document).ready(function(){

  var pieces = $(".piece");

  function startGame(){
    $(".row-6").children().addClass("clickable");
  }

  startGame();


  function playGame(){
    redTurn = true;

    for (var i = 0; i < pieces.length; i++) {
      var piece = $(pieces[i]);
      
      piece.click(function(){
        if (redTurn && !$(this).hasClass("clicked") && $(this).hasClass("clickable")) {
          $(this).addClass("clicked");
          console.log(this)
          $(this).css("background", "red");
          redTurn = false;
          // Determine column 
          var classes = $(this)[0].classList;
          var parentClasses = $(this).parent()[0].classList;
          var rowPattern = /^row-/;
          var columnPattern = /^column-/;
          for (var n = 0; n < classes.length; n++) {
            if (columnPattern.test(classes[n])){
              column = classes[n].slice(-1);
              console.log("Column is: " + column);
            }
          }
          for (var k = 0; k < parentClasses.length; k++) {
            if (rowPattern.test(parentClasses[k])){
              row = parentClasses[k].slice(-1);
              console.log("Row is: " + row);
            }
          };
          // Find piece in the same column with clickable row - 1
          var nextPieceUp = $(".row-" + (row - 1)).children()[column - 1];
          $(nextPieceUp).addClass("clickable");
          // Assign clickable to that piece 
        } else if (!redTurn && !$(this).hasClass("clicked") && $(this).hasClass("clickable")) {
          $(this).addClass("clicked");
          $(this).css("background", "#000");
          redTurn = true;
          // Determine column 
          var classes = $(this)[0].classList;
          var parentClasses = $(this).parent()[0].classList;
          var rowPattern = /^row-/;
          var columnPattern = /^column-/;
          for (var n = 0; n < classes.length; n++) {
            if (columnPattern.test(classes[n])){
              column = classes[n].slice(-1);
            }
          }
          for (var k = 0; k < parentClasses.length; k++) {
            if (rowPattern.test(parentClasses[k])){
              row = parentClasses[k].slice(-1);
            }
          };
          // Find piece in the same column with clickable row - 1
          var nextPieceUp = $(".row-" + (row - 1)).children()[column - 1];
          $(nextPieceUp).addClass("clickable");
          // Assign clickable to that piece  
        } else if (!$(this).hasClass("clicked")) {
            // Iterate through column
            var thisColumn = this.classList[2];
            var clickableInColumn = $('.' + thisColumn);
            for (var i = 0; i < clickableInColumn.length; i++) {
              piece = $(clickableInColumn[i])
              if (piece.hasClass("clickable") && redTurn) {
                console.log("red!")
                $(piece).addClass("clicked");
                $(piece).removeClass("clickable");
                $(piece).css("background", "red");
                // Determine column 
                var classes = $(piece)[0].classList;
                var parentClasses = $(piece).parent()[0].classList;
                var rowPattern = /^row-/;
                var columnPattern = /^column-/;
                for (var n = 0; n < classes.length; n++) {
                  if (columnPattern.test(classes[n])){
                    column = classes[n].slice(-1);
                  }
                }
                for (var k = 0; k < parentClasses.length; k++) {
                  if (rowPattern.test(parentClasses[k])){
                    row = parentClasses[k].slice(-1);
                  }
                };
                // Find piece in the same column with clickable row - 1
                var nextPieceUp = $(".row-" + (row - 1)).children()[column - 1];
                $(nextPieceUp).addClass("clickable");
                // Assign clickable to that piece
                redTurn = false
              } else if (piece.hasClass("clickable") && !redTurn){
                console.log("black!")
                $(piece).addClass("clicked");
                $(piece).removeClass("clickable");
                $(piece).css("background", "#000");
                // Determine column 
                var classes = $(piece)[0].classList;
                var parentClasses = $(piece).parent()[0].classList;
                var rowPattern = /^row-/;
                var columnPattern = /^column-/;
                for (var n = 0; n < classes.length; n++) {
                  if (columnPattern.test(classes[n])){
                    column = classes[n].slice(-1);
                  }
                }
                for (var k = 0; k < parentClasses.length; k++) {
                  if (rowPattern.test(parentClasses[k])){
                    row = parentClasses[k].slice(-1);
                  }
                };
                // Find piece in the same column with clickable row - 1
                var nextPieceUp = $(".row-" + (row - 1)).children()[column - 1];
                $(nextPieceUp).addClass("clickable");
                // Assign clickable to that piece
                redTurn = true
              };
            }            
        } else {
          alert("That piece has already been clicked!");
        }
      });

    }
  }



  playGame();














});

