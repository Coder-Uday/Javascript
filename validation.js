function validate(){
    var name=document.register.name;
    var email=document.register.email;
    var username=document.register.username;
    var password=document.register.password;
    var confirmpassword=document.register.confirmpassword;
    if(name.value.length>0)
    {
        if(email_validate(email))
        {
            if(username_validate(username))
            {
                if(password_validate(password,confirmpassword))
                {
                    return true;
                }
            }
        }
    }
    else
    {
        alert("Name should not be empty");
        name.focus();
        return false;
    }
    return false;
}
function email_validate(email)
{
    var re=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(re.test(email.value))
    {
        return true;
    }
    else{
        alert("Please Enter a valid Email Id");
        email.focus();
        return false;
    }
}
function username_validate(username)
{
    var user_length=username.value.length;
    if(user_length>=5)
    return true;
    return false;
}
function password_validate(password,confirmpassword)
{
    if(password.value=="")
    {
        alert("password should not be empty");
        password.focus();
        return false;
    }
    if(confirmpassword.value=="")
    {
        alert("confirm password should not be empty");
        confirmpassword.focus();
        return false;
    }
    if(password.value==confirmpassword.value)
    {
        if(password.value.length>=8)
        {
            var re=/[0-9]/;
            if(re.test(password.value))
            {
                re=/[a-z]/;
                if(re.test(password.value))
                {
                    re=/[A-Z]/;
                    if(re.test(password.value))
                    {
                        re=/\W|_/;
                        if(re.test(password.value))
                        {
                            return true;
                        }
                        else
                        {
                            alert("password must have atleast one special character");
                            password.focus();
                            return false;
                        }
                    }
                    else
                    {
                        alert("password must have atleast one Uppercase letter");
                        password.focus();
                        return false;
                    }
                }
                else
                {
                    alert("password must have atleast one lower case letter");
                    password.focus();
                    return false;
                }
            }
            else
            {
                alert("password should have atleast one number");
                password.focus();
                return false;
            }
        }
        else{
            alert("password should be greater than 8 in length");
            password.focus();
            return false;
        }
    }
    else
    {
        alert("Password and confirm password donot match");
        confirmpassword.focus();
        return false;
    }
}