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

rating.addEventListener('rate', () => {
    console.log("Rating: " + rating.value);
});

window.customElements.define('x-star-rating', StarRating);

$("#showModal").click(function() {
    $(".modal").addClass("is-active");
});

$(".modal-close").click(function() {
    $(".modal").removeClass("is-active");
});