/*
  eventCallender.js, javascript file is responsible to read JSON file from local storage
  and fill the callender with that values
*/

// create global variable with name myEvents
var myEvents = [];

// ready function
$(document).ready(function () {

  // read JSON file from local storage
  $.getJSON('../../JSON/events.json', function (data) {

    //get datas from JSON file
    myEvents = data;

    // create an Calendar
    new Calendar({

      // set properties of Calendar
      id: '#color-calendar',
      calendarSize: 'small',
      eventsData: myEvents,
      theme: 'glass',
      primaryColor: '#FF6E35',
      headerBackgroundColor: '#FF6E35',

      // When the user select a date from calender,
      // show event information in table if selected date has one
      dateChanged: (currentDate, events) => {
        const events_display = document.querySelector('.events-display');
        let events_html = '';
        //console.log(currentDate, events);
        events.forEach(event => {
          events_html += `
              <div class="card">
                <div class="card-body">
                  <p class="card-title"><u><b>Event Name:</b></u>  ${event.name}</p>
                  <p class="card-text"><u><b>Event Time:</b></u> ${event.time}</p>
                  <p class="card-text"><u><b>Event Location:</b></u> ${event.location}</p>
                </div>
              </div>
            `
        });
        if (events_html) {
          events_display.innerHTML = events_html;
        } else {
          events_display.innerHTML = '<div class="no-events-text">No events on this day</div>';
        }
      }
    })
  });

  /*
    creatre a click event for button
    when the user click the button after filled the necessary boxes, 
    the event will be created, but that difference could not saved on the local storage 
    because JS is client side language and it is not allow to IO operations
  */
  $("#btn").click(function (e) {
    e.preventDefault();
    var eventName = document.getElementById("eventName").value;
    var eventLocation = document.getElementById("eventLocation").value;
    var date = document.getElementById("datepicker").value;
    var eventTime = document.getElementById("eventTime").value;

    if (eventName == "" || eventLocation == "" || date == "" || eventTime == "") {
      Swal.fire({
        title: 'Error!',
        text: 'Please fill the form correctly',
        icon: 'error',
        confirmButtonText: 'Confirm'
      });
    }
    else {
      Swal.fire({
        title: 'Successfull',
        text: 'Event has been created.',
        icon: 'success',
        confirmButtonText: 'Confirm'
      }).then(() => location.reload());
    }

    //alert("Event Created\n" + "Event Name: " + eventName + "\nEvent Location: " + eventLocation + "\nEvent Date: " + date + "\nEvent Time: " + eventTime);
  });
});