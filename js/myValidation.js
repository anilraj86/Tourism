// Login
function loginValidate()
{
    var email=document.getElementById('txt-styl').value;
    var password=document.getElementById('txt-stylpw').value;
    var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
       if (email=="" && password=="")
       {
        alert("Required Fileds are Empty");
       }
       else if(email!=""&&!pattern.test(email))
       {
          alert("invalid email Address !!");
       }
       else if(email==""||password=="")
       {
            if(email=="")
             {
                alert("Email Address Required.!!");
             }
            else if(password=="")
            {
                alert("Please enter the password to Login.!!");
             }
       }
       else
       {
           alert("Successfully Logged in");
       }
}
    // Login ends

    // Sign Up

    var boolSignup = false;
    function emailAddr()
    {
        var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
        var  str = document.getElementById('emailAddr').value;

        if(pattern.test(str))
        {
            //alert(str);
            document.getElementById('emailAddr').style.borderColor="black";    
            boolSignup=true;
         }
        else
        {
            document.getElementById('emailAddr').style.borderColor="red";
            boolSignup = false;
        }
    }

    function firstName()
    {
        var fname=document.getElementById('firstName');
        if(fname.value=="")
        {
            document.getElementById('firstName').style.borderColor="red";
            boolSignup = false;
        }
        else
        {
            document.getElementById('firstName').style.borderColor="black";
            boolSignup = true;
        }
    }

    function mobileNo()
    {
        boolSignup=false;
        var mobnopat=/^([0-9]{3})?[- .]?([0-9]{3})[- .]?([0-9]{4})$/;
        var mobno=document.getElementById('mobileNo').value;
        if(!mobnopat.test(mobno))
        {
           document.getElementById('mobileNo').style.borderColor="red";
            //alert("Please enter a Valid Phone Number !!")
            boolSignup=false;
        }
        else
        {
            document.getElementById('mobileNo').style.borderColor="black";
            boolSignup=true;

        }
     
    }
    function passwordCheck()
    {
        boolSignup=false;
        // password pattern based on the strength
        var weakPassword=/^(?=.*[A-Z])(?=.*[a-z])([A-Za-z]{8,})$/; // without number
        var moderatePassword=/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])([A-Za-z0-9]{8,})$/; // without special characters
        var strongpassword=/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])([A-Za-z0-9@!%*$#]{8,})$/; // including special character 
        var password=document.getElementById('password').value;
        //alert(password);
        let strengthBadge=document.getElementById('StrengthDisp');
        strengthBadge.textContent="";
        if(weakPassword.test(password))
        {
            strengthBadge.style.backgroundColor="red";
            strengthBadge.textContent="Weak";
        // alert("error");
        boolSignup=true;
         }
        else if(moderatePassword.test(password))
        {
            strengthBadge.style.backgroundColor="orange";
            strengthBadge.textContent="Moderate";
            //alert("Moderror");
            boolSignup=true;
        }
        else if(strongpassword.test(password))
        {
            strengthBadge.style.backgroundColor="green";
            strengthBadge.textContent="Strong";
            //alert("eStrrror");
            boolSignup=true;
        }
        else if(password!="")
        {
            strengthBadge.style.backgroundColor="blue";
            strengthBadge.textContent="Password Should be 8 characters long and contains A-Z, a-z, 0-9, @!%*$# ";
            boolSignup=false;
        }
        else
        {
            boolSignup=false;
        }
   
    }

    function passwordMatch()
    {
        boolSignup=false;
        var password=document.getElementById('password').value;
        var confirmPassword=document.getElementById('confPassword').value;
        let passwordSpan= document.getElementById('passwordMatch');
        passwordSpan.textContent="";
        if(password!=confirmPassword)
        {
            passwordSpan.style.backgroundColor="red";
            passwordSpan.textContent="Passwords are not Matching !!";
            boolSignup=false;
        }
        else
        {
            boolSignup=true;
        }
    }

    function buttonClick()
    {
       
       firstName()
       mobileNo();
       emailAddr();
       passwordCheck();
      // alert(boolSignup);
       if(boolSignup)
       {
           alert("Account cretated Successfully");
       }
    }

    // Signup ends

                        