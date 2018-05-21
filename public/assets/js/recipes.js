$(function() {
  $(".change-tried").on("click", function(event) {
    var id = $(this).data("id");
    var newTried = $(this).data("newTried");

    var newTriedState = {
      tried: newTried
    };

    $.ajax("/api/recipes/" + id, {
      type: "PUT",
      data: newTriedState
    }).then(
      function() {
        console.log("trying new things");
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    event.preventDefault();
    var newRecipe = {
      name: $("#rn").val().trim(),
      url: $("#ra").val().trim()
    };
    $.ajax("/api/recipes", {
      type: "POST",
      data: newRecipe
    }).then(
      function() {
        console.log("created new cat");
        location.reload();
      }
    );
  });

  $(".delete-recipe").on("click", function(event) {
    var id = $(this).data("id");
    $.ajax("/api/recipes/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted recipe with id: ", id);
        location.reload();
      }
    );
  });
});
