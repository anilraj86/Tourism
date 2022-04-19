
function changeColor() {
    
    var emailtext=document.getElementById('txt-styl').value;
    var password=document.getElementById('txt-styl1').value;
    if(emailtext==""|| password=="")
    {
        alert("Required Fields are empty");
        return false;
    }
    else
    {
        alert("Login Success");
        return true;
    }
    
  }