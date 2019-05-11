// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(document).ready(function () {


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
