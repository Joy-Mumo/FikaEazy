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
