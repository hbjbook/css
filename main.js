function getQueryVariable(variable) 
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}
function addNewEvent() {
window.newEventTime = getQueryVariable("time")
window.newEventName = getQueryVariable('name')
window.newEventContent = getQueryVariable('content')
localStorage.eventTime = window.newEventTime;
localStorage.event = window.newEventContent;
localStorage.eventTitle = window.newEventName;
localStorage.eventAll = localStorage.eventTitle + "," + localStorage.event;
}

function keepEvent() {
       document.getElementById('event-name').innerHTML = localStorage.eventTitle;
       document.getElementById('time').innerHTML = localStorage.eventTime;
       document.getElementById('event').innerHTML = localStorage.event;
}

if (localStorage.eventAll !== undefined) {
       setInterval(keepEvent, 0);
}     

if (document.getElementById('event-name').innerHTML !== localStorage.eventTitle && document.getElementById('event').innerHTML !== localStorage.event) {
       location.reload();
}
