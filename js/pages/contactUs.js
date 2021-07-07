
/*
    contactUs.js, javascript that responsible for click event in the page, ContactUs.html
    if user click the Submit button getting values from form and send to the admin
*/
$(document).ready(function () {
    $("#btnClickSubmit").click(function (e) {
        e.preventDefault();
        var username = document.getElementById("form_fname").value;
        var lastname = document.getElementById("form_sname").value;
        var email = document.getElementById("form_email").value;
        var message = document.getElementById("form_message").value;

        if (username == "" || lastname == "" || email == "" || message == "") {
            Swal.fire({
                title: 'Error!',
                text: 'Please fill the form correctly',
                icon: 'error',
                confirmButtonText: 'Confirm'
            });
        }
        //alert("Fill all necessary information.")
        else {
            Swal.fire({
                title: 'Successfull',
                text: 'Your message has been sent.',
                icon: 'success',
                confirmButtonText: 'Confirm'
            }).then(() => location.reload());
        }

    })
})