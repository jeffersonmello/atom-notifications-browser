$(document).ready(function(){


  $("body").append("<atom-notifications></atom-notifications>")
  notificationarray = [];
  removearray = [];

  atom = new generatemanager();

  function generatemanager()
  {
    this.notifications = {
      addSuccess : function(text){atomaddnotification(text,"success")},
      addInfo : function(text){atomaddnotification(text,"info")},
      addError : function(text){atomaddnotification(text,"error")},
      addWarning : function(text){atomaddnotification(text,"warning")}
    }
  }

})

  function atomaddnotification(text,type)
  {
    div = $('<atom-notification><atom-notification>');
    div.addClass(type)
    div.attr("id",new Date().getUTCMilliseconds())
    switch (type){
      case "success" : type = "check"; break;
      case "warning" : type = "alert";break;
      case "error" : type = "flame";break;
    }
    subdiv = $('  <div class="notification-icon"><span class="icon-e octicon octicon-' + type + '"></span></div>')
    div.append(subdiv);
    subdiv = $('  <div class="content"> <div class="message item"><p>' + text +  '</p></div> </div>')
    div.append(subdiv)
    div.appendTo("atom-notifications")
    notificationarray.push(div.attr("id"));
    setTimeout(discardnotification,3000);
  }

function discardnotification()
{
$("#"+notificationarray[0]).addClass("remove");
removearray.push(notificationarray[0])
notificationarray.shift();
setTimeout(removenotification,500)

}

function removenotification(id)
{

  $("#"+removearray[0]).remove();
  removearray.shift();
}
