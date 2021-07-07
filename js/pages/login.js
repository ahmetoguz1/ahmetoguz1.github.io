


$(document).ready(function () {

    $("#btnLogin").click(function (e) {
        e.preventDefault();
        var username = document.getElementById("form_fname").value;
        var password = document.getElementById("form_password").value;
        if (username == "test" && password == "testtest") {
            Swal.fire({
                title: 'Successfull',
                text: 'Login Successful.',
                icon: 'success',
                confirmButtonText: 'Confirm'                
            }).then(() => location.reload());
        }
        else
        {
            Swal.fire({
                title: 'Error!',
                text: 'Username or password is not correct. Try again! username: test, password: testtest',
                icon: 'error',
                confirmButtonText: 'Confirm'
            });
        }
    })

})


function login() {

}