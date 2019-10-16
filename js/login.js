var emailex="nguyendinhdung@gmail.com"
var passwordex="1234567890"
function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validate() {
  var result=$("#result");
  result.text("");
  var email = $("#inputEmail").val();
  var password=$("#inputPassword").val();
  if(email!="")
  {
    if (validateEmail(email)) {
      // alert(email + " is valid ");
      if(email==emailex&&password==passwordex)
      {
        result.text(email+password);
      }
      else{
        alert("Please check your email or password !")
      }
    } 
    else {
      alert(email + " is not valid ");
    }
    return false;
  }
  else{
    alert("Enter your email address,Please !")
  }
}
$("#validate").on("click", validate);