# CENG311 Web Technology Applications
#Summary Document
Meeting the specifications
 My website is meeting the specifications for photography club students or people
involved in photography.
Homepage of my website includes most liked pictures from users and
announcements about photography. These pictures displayed on the page as a slide
thanks to the Image Carousel with Blurred Background – Product slider.
Events page has two main sections. One of them creates event and the other
one shows created events. Created events shows in the calendar and there will be a dot
below the date if that date has an event or events. When you click it details of the event
shows in the right side of the page. Event name, Event time and Event location will be
showed. Event information coming from local JSON file. Requests to JSON file and fills
the calendar thanks to the AJAX.
Other section of the page is about create event part. When user/visitor enter Event
name, Event Location, Date, and Time he/she could create an event. In this page there
is Weather widget where right side of the page. It shows today's weather in Ankara. If
user enter event location different such as Istanbul, weather will be changed according
to entered city values. After fill the event location, users/visitors must enter event date.
When he/she enter the event date thanks to the datepicker jQuery widget and if a date
is entered within the next 7 days, the weather will be updated according to the selected
date. Temperature information coming from openweathermap.org. The page uses API
from that website and pull data according to selected date thanks to the AJAX. Coming
information is formatted by XML or JSON, I used JSON format in that page. Thus,
user/visitor will have information about the weather conditions on the planned event
date.

Explore Photos is a photo gallery. Webpage uses responsive Fullscreen photo
gallery written with jQuery and its name is Story Show Gallery. In this page when you
hover the mouse over the photo, the photo moves a little and becomes more colorful.
When you click on the photo, the photo will open in full screen. In this opened screen,
the user can navigate through the photos by using the up and down keys on the
keyboard or the mouse wheel, see who added the photo, and exit the full screen by
pressing the esc key or clicking the X key at the top right of the screen.
Education page has two sections. One of them gives information about
photography techniques and the other choosing the right camera.
Contact Us page includes text input areas and location of the club in google map.
The page uses validation script thanks to the JavaScript. When a user/visitor wants to 
contact with club admin he/she enter information which are name, last name, email, and
message after click submit. If the information that he/she entered does not follow the
rules it will have error. For example, he/she could not enter symbol or number for name
input or not enter compatible with e-mail format for email input. After clicking the submit,
he/she will have an information about success or fail.
Login page is using for user login. If you are a user, you can enter your
username and password for login. Default username: “test”, password: “testtest”. After
clicking login button, you will have information about success or fail. This information will
show up thanks to the sweetalert2.