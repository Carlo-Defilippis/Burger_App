// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-ate").on("click", function(event) {
    var id = $(this).data("id");
    var newburger = $(this).data("newburger");

    var newburgerState = {
      ate: newburger
    };

    // Send the PUT request.
    $.ajax("/api/burger/" + id, {
      type: "PUT",
      data: newburgerState
    }).then(
      function() {
        console.log("changed ate to", newburger);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newburger = {
      name: $("#ca").val().trim(),
      ate: $("[name=ate]:checked").val().trim()
    };
if (newburger.name.length !== 0) {
    // Send the POST request.
    $.ajax("/api/burger", {
      type: "POST",
      data: newburger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  } else {
    alert("Please enter a name of the burger!");
  }
});

  $(".delete-burger").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burger/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted burger", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
