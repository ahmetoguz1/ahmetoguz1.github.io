function login()
{
    var username = document.getElementById("form_fname").value;
    var password = document.getElementById("form_password").value;
    if(username =="test" && password=="testtest")
        alert("Login succesful");
    else
        alert("Login failed. Check username and password");
}