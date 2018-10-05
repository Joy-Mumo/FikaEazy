function tripOptions() {
  var currentLocation = $("#currentLocation").find(":selected").text();
  var destination = $("#destination").find(":selected").text();
  var modeOfTransport = $("#transportmode").find(":selected").text();

  if((currentLocation=="Lang'ata") && (destination=="Two Rivers Mall")); {
        message.innerHTML="Fare:Ksh.200,Time estimate:1hour,Stage:Prestige";
        // alert("Fare:Ksh.200")
        // alert("Time estimate:1hour")
        // alert("Stage:Prestige")

  }
  // else{
  //   message.innerHTML="Route is not available current";
  // }

if((currentLocation=="Lang'ata") && (destination="Galleria")); {
        message.innerHTML="Fare:Ksh.400,Time estimate:1hour,Stage:Prestige";
        alert("Fare:Ksh.400")
        alert("Time estimate:1hour")
        alert("Stage:Prestige")
      }

  }
  if((currentLocation="Lang'ata") && (destination="Galleria"); && (transportmode="Matatu")); {
          message.innerHTML="Fare:Ksh.60,Time estimate:30minutes,Stage:Uhuru Gardens";
          alert("Fare:Ksh.60")
          alert("Time estimate:30minutes")
          alert("Stage:Uhuru Gardens")

  }
  if((currentLocation=="Lang'ata") && (destination=="Galleria") && (transportmode=="Motorbike")); {
          message.innerHTML="Fare:Ksh.150,Time estimate:20minutes,Stage:Uhuru Gardens";
          alert("Fare:Ksh.150")
          alert("Time estimate:20minutes")
          alert("Stage:Uhuru Gardens")

  }
  if((currentLocation=="Lang'ata") && (destination=="Galleria") && (transportmode=="Taxi")); {
          message.innerHTML="Fare:Ksh.150,Time estimate:20minutes,Stage:Uhuru Gardens";
          alert("Fare:Ksh.300")
          alert("Time estimate:40minutes")
          alert("Stage:Uhuru Gardens")

  }
  if((currentLocation="Lang'ata") && (destination="Moringa School") && (transportmode="Matatu")); {
          message.innerHTML="Fare:Ksh.80,Time estimate:40minutes,Stage:Uhuru Gardens";
          alert("Fare:Ksh.80")
          alert("Time estimate:40minutes")
          alert("Stage:Uhuru Gardens")

  }
  if((currentLocation="Lang'ata") && (destination="Moringa School") && (transportmode="Taxi")); {
          message.innerHTML="Fare:Ksh.500,Time estimate:20minutes,Stage:Uhuru Gardens";
          alert("Fare:Ksh.500")
          alert("Time estimate:40minutes")
          alert("Stage:Uhuru Gardens")

  }
  if((currentLocation="Lang'ata") && (destination="Moringa School") && (transportmode="Motorbike")); {
          message.innerHTML="Fare:Ksh.150,Time estimate:40minutes,Stage:Uhuru Gardens";
          alert("Fare:Ksh.150")
          alert("Time estimate:40minutes")
          alert("Stage:Uhuru Gardens")

  }
  if((currentLocation="Lang'ata") && (destination="Juja") && (transportmode="Motorbike")); {
          message.innerHTML="Fare:Ksh.300,Time estimate:1hour,Stage:Uhuru Gardens";
          alert("Fare:Ksh.300")
          alert("Time estimate:1hour")
          alert("Stage:Uhuru Gardens")

  }
  if((currentLocation="Lang'ata") && (destination="Juja") && (transportmode="Taxi")); {
          message.innerHTML="Fare:Ksh.300,Time estimate:1hour,Stage:Uhuru Gardens";
          alert("Fare:Ksh.500")
          alert("Time estimate:1hour")
          alert("Stage:Uhuru Gardens")

  }
    event.preventDefault();
  }
