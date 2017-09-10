function generatemanager()
{
    this.notifications = {
      addSuccess : function(text){atomaddnotification(text,"success")},
      addInfo : function(text){atomaddnotification(text,"info")},
      addError : function(text){atomaddnotification(text,"error")},
      addWarning : function(text){atomaddnotification(text,"warning")}
    }
  }

  function atomaddnotification(text,type)
  {
    var div = document.createElement("atom-notification");
    div.classList.add(type);
    div.id = new Date().getUTCMilliseconds();
    switch (type){
      case "success" : type = "check"; break;
      case "warning" : type = "alert";break;
      case "error" : type = "flame";break;
    }
    div.innerHTML = '  <div class="notification-icon"><span class="icon-e octicon octicon-' + type + '"></span></div>';
    div.innerHTML += '  <div class="content"> <div class="message item"><p>' + text +  '</p></div> </div>';
    document.querySelector("atom-notifications").appendChild(div);
    notificationarray.push(div.id);
    setTimeout(discardnotification,3000);
  }

function discardnotification()
{
document.getElementById(notificationarray[0]).classList.add("remove");
removearray.push(notificationarray[0])
notificationarray.shift();
setTimeout(removenotification,500)
}

function removenotification(id)
{
  document.getElementById(removearray[0]).remove();
  removearray.shift();
}

document.write('<link rel="stylesheet" type="text/css" href="build/css/notifications.css">');
document.write('<atom-notifications></atom-notifications>');

notificationarray = [];
removearray = [];
atom = new generatemanager();
