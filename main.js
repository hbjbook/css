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
window.newEventName = getQueryVariable('name')
window.newEventContent = getQueryVariable('content')
document.getElementById('hcb_form_name').value = window.newEventName;
document.getElementById("hcb_form_content").value = window.newEventContent;
document.getElementById("hcb_submit").click();
window.event = comments[0].comment;
document.getElementById('event').value = event;
}
