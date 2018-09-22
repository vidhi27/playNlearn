// var bcrypt = require("bcrypt");

$(document).ready(function () {

    // INDEX PAGE: Set variables for user input fields.
    let firstname = $("#first-name");
    let lastname = $("#last-name");
    let username = $("#user-name");
    let password = $("#password");
    let country = $("#country");
    let age = $("#age");

    // var userKeystroke = document.getElementById("password");

    // INDEX PAGE: This is the index page submit button.
    var indexSubmit = $("#index-submit");

    // Adding event listeners for deleting, editing, and adding users
    indexSubmit.on("click", insertUser);

    // This function inserts a new user into our database and then updates the view
    function insertUser(event) {
        event.preventDefault();

        // let pwd = password.val().trim();
        // let hash = bcrypt.hashSync(pwd, 10);

        // if (bcrypt.compareSync('somePassword', hash)) {
        //     console.log("Success, password matches!");
        //     // passwords match
        // } else {
        //     console.log("Error!");
        //     // passwords don't match
        // }

        // Record keystrokes for password field
        $(document).on("keyup", "#password", function(event) {
            console.log(event.key);
            passwordArray.push(event.key);
        });

        // Array that will contain the keys for the password.
        var passwordArray = [];
        console.log(passwordArray);

        var user = {
            first_name: firstname.val().trim(),
            last_name: lastname.val().trim(),
            username: username.val().trim(),
            password: passwordArray.join(''),
            age: age.val().trim(),
            country: country.val().trim(),
        };

        console.log(user);

        $.post("/api/users", user);

        // Clear form data on index page.
        firstname.val(""),
            lastname.val(""),
            username.val(""),
            password.val(""),
            age.val(""),
            country.val("")

    }
});
