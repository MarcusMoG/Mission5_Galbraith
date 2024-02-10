$(document).ready(function () {
    $("#calculateBtn").click(function () {
        // Get the number of hours entered by the user
        var hours = $("#hours").val();

        // Validate that the entered value is a positive number
        if ($.isNumeric(hours) && hours >= 0) {
            // Hourly rate (replace with your actual hourly rate)
            var hourlyRate = 20.00;

            // Calculate the total cost
            var total = hours * hourlyRate;

            // Display the total in the output box
            $("#total").val("$" + total.toFixed(2));
        } else {
            // Display an error message for invalid input
            alert("Please enter a valid positive number for the number of hours.");
        }
    });
});
