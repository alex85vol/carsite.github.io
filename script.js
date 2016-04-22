function validateForm () {
  var model = document.forms["searchf"]["car"].value;
  var year = document.forms["searchf"]["year"].value;
  var engine = document.forms["searchf"]["engine"].value;
    if (model == null || model == "") {
        alert("Model cannot be empty. Enter car model please");
        return false;
    }
  
    if (year == null || year == "") {
        alert("Year cannot be empty. Choose year please");
        return false;
    }
    
    if (engine == null || engine == "") {
        alert("Engine cannot be empty. Choose year please");
        return false;
    }
    
    alert("You will be redirected on Google")
    
}

function clickFunction2 () {
  var link = document.table["table"].link.value;
  alert("You wil be redirected on" + link)
}

function clickFunction () {
  alert("You will be redirected on other page!")
}

