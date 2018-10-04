//current location=Westlands//

$ (document).ready (function () {

  function tripOptions() {
    var currentLocation = $("#current-location").find(":selected").text();
    var destination = $("#destination").find(":selected").text();
    var modeOfTransport = $("#transportmode").find(":selected").text();

    if((currentLocation="Westlands") && (destination="Moringa School") && (transportmode="Matatu") ); {
     message.innerHTML="fare is 100ksh,estimated time is 40minutes,stage is Parklands Baptist Stage (Ring Road)";
      alert("fare is 100ksh")
      alert("estimated time is 40minutes")
      alert("stage is Parklands Baptist Stage (Ring Road)")

    }else if((currentLocation="Westlands") && (destination="Moringa School") && (transportmode="Motorbike")); {
      message.innerHTML="fare is 300ksh,estimated time is 30minutes,stage is Waiyaki Way";
      alert("fare is 300ksh")
      alert("estimated time is 30minutes")
      alert(" Waiyaki Way")

    }else if((currentLocation="Westlands") && (destination="Moringa School") && (transportmode="Taxi")); {
      message.innerHTML="fare is 500ksh,estimated time is 45minutes,stage is Waiyaki Way";
      alert("fare is 300ksh")
      alert("estimated time is 30minutes")
      alert(" Waiyaki Way")
    }


    if((currentLocation="Westlands") && (destination="Two Rivers Mall") && (transportmode="Motorbike")); {
      message.innerHTML="fare is 150ksh,estimated time is 40 minutes,stage is Waiyaki Way";
      alert("fare is 150ksh")
      alert("estimated time is 40minutes")
      alert(" Waiyaki Way")

    }else if((currentLocation="Westlands") && (destination="Two Rivers Mall") && (transportmode="Taxi")); {
      message.innerHTML="fare is 500ksh,estimated time is 1 hour,stage is Waiyaki Way";
      alert("fare is 300ksh")
      alert("estimated time is 1 hour")
      alert(" Waiyaki Way")
    }


    if((currentLocation="Westlands") && (destination="Nakumatt Galleria") && (transportmode="Motorbike")); {
      message.innerHTML="fare is 300ksh,estimated time is 1 hour,stage is Waiyaki Way";
      alert("fare is 300ksh")
      alert("estimated time is 1 hour")
      alert(" Waiyaki Way")

    }else if((currentLocation="Westlands") && (destination="Nakumatt Galleria") && (transportmode="Taxi")); {
        message.innerHTML="fare is 400ksh,estimated time is 1 hour 20 minutes,stage is Waiyaki Way";
        alert("fare is 400ksh")
        alert("estimated time is 1hour 20minutes")
        alert(" Waiyaki Way")
    }


    if((currentLocation="Westlands") && (destination="Juja") && (transportmode="Motorbike")); {
        message.innerHTML="fare is 250ksh,estimated time is 45 minutes,stage is Waiyaki Way";
        alert("fare is 250ksh")
        alert("estimated time is 45minutes")
        alert(" Waiyaki Way")

    }else if((currentLocation="Westlands") && (destination="Juja") && (transportmode="Taxi")); {
        message.innerHTML="fare is 120ksh,estimated time is 1 hour,stage is Waiyaki Way";
        alert("fare is 120ksh")
        alert("estimated time is 1 hour")
        alert(" Waiyaki Way")
    }


});
