(function ($) {
  $.fn.morpion = function (
    options = {
      replayButton: "#replay",
    }
  ) {
    const self = this;
    var move = 1;
    var play = true;
    var scoreO = 0;
    var scoreX = 0;

    $("#grid .row .cell").click(function () {
      if ($(this).text() == "" && play) {
        if ((move % 2) == 1) {
          $("#currentPlayer").html("Joueur 2 doit jouer");
          $(this).append("X");
          $(this).css("color", "#61892f");
        } else {
          $("#currentPlayer").html("Joueur 1 doit jouer");
          $(this).append("O");
          $(this).css("color", "#e85a4f");
        }
        move++;
        if (findWinner() != -1 && findWinner() != "") {
          if (findWinner() == "X") {
            $(".win-display").text("Joueur X à gagné");
            $(self).addClass("won");
            scoreX++;
            $("#playerOne").text(scoreX);
          } else {
            $(".win-display").text("Joueur O à gagné");
            $(self).addClass("won");
            scoreO++;
            $("#playerTwo").text(scoreO);
          }
          play = false;
        }
      }
    });

    $(options.replayButton).click(function () {
      $("#grid .row .cell").text("");
      $(self).removeClass("won");
      play = true;
    });

    function findWinner() {
      c1 = $("#grid .row:nth-child(1) .cell:nth-child(1)").text();
      c2 = $("#grid .row:nth-child(1) .cell:nth-child(2)").text();
      c3 = $("#grid .row:nth-child(1) .cell:nth-child(3)").text();
      c4 = $("#grid .row:nth-child(2) .cell:nth-child(1)").text();
      c5 = $("#grid .row:nth-child(2) .cell:nth-child(2)").text();
      c6 = $("#grid .row:nth-child(2) .cell:nth-child(3)").text();
      c7 = $("#grid .row:nth-child(3) .cell:nth-child(1)").text();
      c8 = $("#grid .row:nth-child(3) .cell:nth-child(2)").text();
      c9 = $("#grid .row:nth-child(3) .cell:nth-child(3)").text();

      if ((c1 == c2) && (c2 == c3)) {
        return c3;
      } else if ((c4 == c5) && (c5 == c6)) {
        return c6;
      } else if ((c7 == c8) && (c8 == c9)) {
        return c9;
      } else if ((c1 == c4) && (c4 == c7)) {
        return c7;
      } else if ((c2 == c5) && (c5 == c8)) {
        return c8;
      } else if ((c3 == c6) && (c6 == c9)) {
        return c9;
      } else if ((c1 == c5) && (c5 == c9)) {
        return c9;
      } else if ((c3 == c5) && (c5 == c7)) {
        return c7;
      }
      return -1;
    }
  };

  $("#grid").morpion({ replayButton: "#replay" });
})(jQuery);
