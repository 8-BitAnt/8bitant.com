var global_valfield;

function setFocusDelayed()
{
  global_valfield.focus();
}

function mysetfocus(valfield)
{
  global_valfield = valfield;
  setTimeout( 'setFocusDelayed()', 100 );
}

function hasValue(valfield)
{
  var emptyString = /^\s*$/;

  if (emptyString.test(valfield.value)) return false;

  return true;  
}

function isGroupChecked(btn) 
{
  
  for (var i=btn.length-1; i >= 0; i--)
    if (btn[i].checked) 
        return true;

  return false;
}

function isSelectChecked(btn) 
{
  
    if (btn.selectedIndex > 0) 
        return true;

  return false;
}

function isChecked(btn) 
{
  
    if (btn.checked) 
        return true;

  return false;
}

function isEmail(valfield) 
{
if (valfield.value.search(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/) != -1)
  return true;
else
  return false;
}

function isDate(valfield) 
{
if (valfield.value.search(/^\d{1,2}(\/)\d{1,2}\1\d{4}$/) != -1)
  return true;
else
  return false;
}

function isDomain(valfield) 
{
if (valfield.value.search(/^[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/) != -1)
  return true;
else
  return false;
}

function isNumber(valfield) 
{
if (valfield.value.search(/(^-*\d+$)|(^-*\d+\.\d+$)/) != -1)
  return true;
else
  return false;
}

function myGetElementById(strId)
{

  if (document.getElementById) return document.getElementById(strId);
  else if (document.all) return document.all[strID];
  else if (document.layers) return document[strID];
  else return null;

}

function showInfo(strId, strClass, message)
{
  var emptyString = /^\s*$/;
  var nbsp = 160;		

  var dispmessage;
  if (emptyString.test(message)) 
    dispmessage = String.fromCharCode(nbsp);    
  else  
    dispmessage = message;

  var elem = myGetElementById(strId);
  if (elem)  elem.firstChild.nodeValue = dispmessage;
  if (elem)  elem.className = strClass;   
}

function addError(message, error)
{
  if (""!=message) message+="<br />";
  message+=error;

  return message;
}
