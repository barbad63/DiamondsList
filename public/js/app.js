$("#signUpSubmit").on("click", function(event) {
    event.preventDefault();

    var newUser = {
        fullName: $("#fullName").val().trim(),
        // var lastName = $("#lastName").val();
        //userName: "1234",//$("#un").val().trim(),
        password: $("#pass").val().trim(),
        address: $("#add").val().trim(),
        city: $("#cit").val().trim(),
        state: $("#stat").val().trim(),
        zipcode: $("#zi").val().trim(),
        email: $("#mail").val().trim(),
        phoneNumber: $("#number").val()
    };
    //Send an AJAX post to the user-api post request
    $.post("/api/users", newUser)
    //on success tell the user
        .done(function(data) {
            console.log(data);
            alert("Added User")
        });

    // console.log("First Name: " + firstName);
    // console.log("Last Name: " + lastName);
    // console.log("User Name: " + userName);
    console.log("Password: " + newUser.password);
    console.log("Address: " + newUser.address);
    console.log("City: " + newUser.city);
    console.log("State: " + newUser.state);
    console.log("Zipcode: " + newUser.zipcode);
    console.log("Email: " + newUser.email);
    console.log("Phone Number: " + newUser.phoneNumber);
//Turn this off while testing
    // $("#fullName").val("");
    // // $("#lastName").val("");
    // $("#un").val("");
    // $("#pass").val("");
    // $("#add").val("");
    // $("#cit").val("");
    // $("#stat").val("");
    // $("#zi").val("");
    // $("#mail").val("");
    // $("#number").val("");

});

const button = document.querySelector('.button');
const dropdown = document.querySelector('.dropdown');

button.addEventListener('click', () => {
    dropdown.classList.toggle('is-open');
});

$("#serviceFormSubmit").on("click", function(event) {
    event.preventDefault();

    var businessName = $("#businessName").val();
    var amount = $("#amount").val();
    var businessService = $("#description").val();
    var category = $("#myselect").val();

    console.log("Business Name: " + businessName);
    console.log("Amount: " + amount);
    console.log("Business Description: " + description);
    console.log("Category: " + category);

    $("#businessName").val("");
    $("#amount").val("");
    $("#description").val("");
    $("#myselect").val("");

    $.ajax({
        method: "POST",
        url: '/api/services',    
        data: { 
            category: category,    
            businessName: businessName,
            businessService : businessService,
            costOfService: amount,
            UserId: 1

        }
        })
        .done(function( msg ) {
        alert( "Data Saved: " + msg );
        });


});

class StarRating extends HTMLElement {
    get Value() {
        return this.getAttribute('value') || 0;
    }

    set value(val) {
        return this.setAttribute('value', val);
        this.highlight(this.value - 1);
    }

    get number() {
        return this.getAttribute('number') || 5;
    }

    set number(val) {
        this.setAttribute('number', val);


        this.stars = [];

        while (this.firstChild) {
            this.removeChild(this.firstChild);
        }
        this.value = this.value;

        for (var i = 0; i < this.number; i++) {
            var s = document.createElement('div');
            s.className = 'star';
            this.appendChild(s);
            this.stars.push(s);
        }
    }
    highlight(index) {
        this.stars.forEach((star, i) => {
            star.classList.toggle('full', i <= index);
        });
    }

    constructor() {
        super();

        this.number = this.number;

        this.addEventListener('mousemove', e => {
            var box = this.getBoundingClientRect(),
                starIndex = Math.floor((e.pageX - box.left) / box.width * this.stars.length);
            console.log(starIndex);
            this.highlight(starIndex);
        });

        this.addEventListener('mouseout', () => {
            this.value = this.value;
        });

        this.addEventListener('click', e => {
            var box = this.getBoundingClientRect(),
                starIndex = Math.floor((e.pageX - box.left) / box.width * this.stars.length);
            this.value = starIndex + 1;

            var rateEvent = new Event('rate');
            this.dispatchEvent(rateEvent);
        });
    }
}

// rating.addEventListener('rate', () => {
//     console.log("Rating: " + rating.value);
// });

window.customElements.define('x-star-rating', StarRating);

$("#showModal").click(function() {
    $(".modal").addClass("is-active");
});

$(".modal-close").click(function() {
    $(".modal").removeClass("is-active");
});

$("#sub").on("click", function(event) {
    event.preventDefault();
    $(".modal").addClass("is-active");

});