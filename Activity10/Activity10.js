// create array for Programming Languages to autocomplate
var programmingLanguages = [
    "ActionScript",
    "AppleScript",
    "Asp",
    "C++",
    "C#",
    "JavaScript",
    "Lisp",
    "Perl",
    "Python"
];

// create global variables for error detection
var error_pl = false;
var error_email = false;
var error_website = false;

// use jquery ui datepicker without default parameters
$("#birthday").datepicker(
    {
        numberOfMonths: 1,
        changeYear: true,
        changeMonth: true
    }
);

// make programmingLanguage field autocomplate with programmingLanmguages array
$("#programmingLanguage").autocomplete({
    source: programmingLanguages
});

// check input coming from user and be sure it is not empty
function checkProgrammingLanguage() {
    var pl = $("#programmingLanguage").val();
    if (pl !== "") {
        $("#programmingLanguage").css("border", "2px solid #34F458");
    }
    else {
        $("#programmingLanguage").css("border", "2px solid #F90A0A");
        error_pl = true;
    }
}

// check email with regex for entered email address is valid or not
function checkEmail() {
    var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    var email = $("#email").val();
    if (pattern.test(email) && email !== '') {
        $("#email").css("border", "2px solid #34F458");
    } else {
        $("#email").css("border", "2px solid #F90A0A");
        error_email = true;
    }
}

// check website with regex for entered website is valid or not
function checkWebsite() {
    var pattern = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    var website = $("#website").val();
    if (pattern.test(website) && website !== '') {
        $("#website").css("border", "2px solid #34F458");
    }
    else {
        $("#website").css("border", "2px solid #F90A0A");
        error_website = true;
    }
}

// function trigger when submit button clicked in the page
function clickSubmit() {
    error_pl = false;
    error_email = false;
    error_website = false;

    checkProgrammingLanguage();
    checkEmail();
    checkWebsite();

    if (error_pl === false && error_email === false && error_website === false) {
        alert("Submit Successfull");
        return true;
    } else {
        alert("Please Fill the form Correctly");
        return false;
    }
}

