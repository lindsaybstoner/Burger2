// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(document).ready(function () {

    $(".gif").on("click", function () {
        // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
        var state = $(this).attr("data-state");
        // If the clicked image's state is still, update its src attribute to what its data-animate value is.
        // Then, set the image's data-state to animate
        // Else set src to the data-still value
        if (state === "animate") {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        } else {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
        }
    });

    $(".devour-me").on("click", function (event) {
        var id = $(this).data("id");
        var currentDevouredState = $(this).data("devoured");

        console.log("Look here:" + currentDevouredState);

        var newDevoured = $(this).data("devoured");
        console.log(newDevoured);

        var newDevouredState = {
            devoured: 1
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            function () {
                //console.log("changed devoured to", newDevoured);
                // Reload the page to get the updated list
                location.reload();
            }
        );

    });

    $(".delete-me").on("click", function (event) {
        var id = $(this).data("id");

        $.ajax({
            method: "DELETE",
            url: "/api/burgers/" + id
        }).then(
            function () {
                location.reload();
            }
        )
    });

    $("#submitButton").on("click", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            burger_name: $("#ba").val().trim(),
            devoured: false
        };

        console.log(newBurger);

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});
