$("#signUpSubmit").on("click", function(event) {
    event.preventDefault();

    var fullName = $("#fullName").val();
    // var lastName = $("#lastName").val();
    var userName = $("#un").val();
    var password = $("#pass").val();
    var address = $("#add").val();
    var city = $("#cit").val();
    var state = $("#stat").val();
    var zipcode = $("#zi").val();
    var email = $("#mail").val();
    var phoneNumber = $("#number").val();


    // console.log("First Name: " + firstName);
    // console.log("Last Name: " + lastName);
    // console.log("User Name: " + userName);
    console.log("Password: " + password);
    console.log("Address: " + address);
    console.log("City: " + city);
    console.log("State: " + state);
    console.log("Zipcode: " + zipcode);
    console.log("Email: " + email);
    console.log("Phone Number: " + phoneNumber);

    $("#fullName").val("");
    // $("#lastName").val("");
    $("#un").val("");
    $("#pass").val("");
    $("#add").val("");
    $("#cit").val("");
    $("#stat").val("");
    $("#zi").val("");
    $("#mail").val("");
    $("#number").val("");

});

$("#serviceFormSubmit").on("click", function(event) {
    event.preventDefault();

    var businessName = $("#businessName").val();
    var amount = $("#amount").val();
    var businessService = $("#description").val();

    console.log("Business Name: " + businessName);
    console.log("Amount: " + amount);
    console.log("Business Description: " + description);

    $("#businessName").val("");
    $("#amount").val("");
    $("#description").val("");
});