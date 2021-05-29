function CreateEvent ()
{
    var name = document.getElementById("eventName").value;
    var location = document.getElementById("eventLocation").value;
    var date = document.getElementById("datepicker").value;
    alert("Event Created\nEvent Name: " + name + "\nLocation: "+location + "\nDate: "+date);
}