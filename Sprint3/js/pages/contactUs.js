function contactUs() {
    var username = document.getElementById("form_fname").value;
    var lastname = document.getElementById("form_sname").value;
    var email = document.getElementById("form_email").value;
    var message = document.getElementById("form_message").value;

    if (username == "" || lastname == "" || email == "" || message == "")
        alert("Fill all necessary information.")
    else
        alert("Your message has been sent.");
}