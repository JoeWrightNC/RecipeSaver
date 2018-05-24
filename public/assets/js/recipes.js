$(function() {
  $(".change-tried").on("click", function(event) {
    var id = $(this).data("id");
    var newTried = $(this).data("newTried");

    var newTriedState = {
      tried: newTried
    };

    $.ajax("/api/recipes/" + id, {
      type: "PUT",
    }).then(
      function() {
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    event.preventDefault();
    if ($.trim($("#rn").val()) === "" || $.trim($("#ru").val()) === "") {
      alert('you did not fill out a field');
      return false;
    } else {
      var newRecipe = {
        recipeName: $("#rn").val().trim(),
        recipeUrl: $("#ru").val().trim()
      };
      $.ajax("/api/recipes", {
        type: "POST",
        data: newRecipe
      }).then(
        function() {
          location.reload();
        }
      );
    };
  });

  $(".delete-recipe").on("click", function(event) {
    var id = $(this).data("id");
    $.ajax("/api/recipes/" + id, {
      type: "DELETE"
    }).then(
      function() {
        location.reload();
      }
    );
  });

  $(".addPageLoad").on("click", function(event) {
    $("#lander").slideUp(1200);
    $("#triedPage").slideUp(1200);
    $("#toTryPage").slideUp(1200)
    $("#addOne").slideDown(1200);
  })

  $(".toTryPageLoad").on("click", function(event) {
    $("#lander").slideUp(1200);
    $("#triedPage").slideUp(1200);
    $("#addOne").slideUp(1200);
    $("#toTryPage").slideDown(1200)
  })

  $(".triedPageLoad").on("click", function(event) {
    $("#lander").slideUp(1200);
    $("#addOne").slideUp(1200);
    $("#toTryPage").slideUp(1200);
    $("#triedPage").slideDown(1200);
  })
});
