//Logging in//
$(document).ready(function(){
  $("form").submit(function(event){
      event.preventDefault()
    var username = $("#username").val()
   var passw=$("#password0").val()
   if(username==="Moringa" && passw ==="password"){
  window.location.href="trip.html"
     console.log("you have been logged")
   }
  else{
  console.log("wrong creds")
  }

  })
})

//show password//
function show(showPassword, confirmPassword) {
    var showPassword= document.getElementById("password1");
    var confirmPassword=document.getElementById("password2");
    if (showPassword.type === "password") {
        showPassword.type = "text";
    } else {
      showPassword.type = "password";
    }
    if (confirmPassword.type === "password") {
      confirmPassword.type= "text";
    } else {
      confirmPassword.type = "password";
    }
}
function reveal(revealPassword) {
  var revealPassword= document.getElementById("password0");
  if (revealPassword.type === "password") {
      revealPassword.type= "text";
  }else {
    revealPassword.type= "password";
  }
}



//
