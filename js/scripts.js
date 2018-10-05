    function tripOptions() {

      var currentLocation = $("#current-location").find(":selected").text();
      var destination = $("#destination").find(":selected").text();
      var modeOfTransport = $("#transportmode").find(":selected").text();

      var hiltonMoringa = (currentLocation === "Hilton Hotel" && destination === "Moringa School");
      var hiltonTwoRivers = (currentLocation === "Hilton Hotel" && destination === "Two Rivers Mall");
      var hiltonGalleria = (currentLocation === "Hilton Hotel") && (destination === "Galleria");
      var syokimauGalleria = (currentLocation === "Syokimau") && (destination === "Galleria");
      var syokimauJuja = (currentLocation === "Syokimau") && (destination === "Juja");
      var westlandsMoringa = (currentLocation === "Westlands") && (destination === "Moringa School");
      var westlandsTwoRivers = (currentLocation === "Westlands") && (destination === "Two Rivers Mall");
      var westlandsJuja = (currentLocation === "Westlands") && (destination === "Juja");
      var langataGalleria = (currentLocation === "Lang'ata") && (destination === "Galleria");
      var langataMoringa = (currentLocation === "Lang'ata") && (destination === "Moringa School");
      var langataJuja = (currentLocation === "Lang'ata") && (destination === "Juja");


      if (hiltonMoringa === (modeOfTransport === "Matatu")) {
        message.innerHTML = "Fare: Kshs.50, Time estimate: 40 minutes, Stage: Railways Station";
      } else if (hiltonMoringa === (modeOfTransport === "Motorbike")) {
        message.innerHTML = "Fare: Kshs.150, Time estimate: 30 minutes, Stage: Kencom";
      } else if (hiltonMoringa === (modeOfTransport === "Taxi")) {
        message.innerHTML = "Fare: Kshs.250, Time estimate: 45 minutes, Stage: Kencom";
      } else {
          message.innerHTML = "Sorry. Option not available. Would you like to ammend your request?";
        }
      if (hiltonTwoRivers === (modeOfTransport === "Matatu")) {
        message.innerHTML = "Fare: Kshs.70, Time estimate: 40 minutes, Stage: Odeon";
      } else if (hiltonTwoRivers === (modeOfTransport === "Motorbike")) {
        message.innerHTML = "Fare: Kshs.150, Time estimate: 1 hour, Stage: Archives";
      } else if (hiltonTwoRivers === (modeOfTransport === "Taxi")) {
        message.innerHTML = "Fare: Kshs.400, Time estimate: 45 minutes, Stage: Archives";
      } else {
        message.innerHTML = "Sorry. Option not available. Would you like to ammend your request?";
      }
      if (hiltonGalleria === (modeOfTransport === "Matatu")) {
        message.innerHTML = "Fare: Kshs.80, Time estimate: 45 minutes, Stage: Railways Station";
      } else if (hiltonGalleria === (modeOfTransport === "Motorbike")) {
        message.innerHTML = "Fare: Kshs.200, Time estimate: 1 hour, Stage: Moi Avenue";
      } else if (hiltonGalleria === (modeOfTransport === "Taxi")) {
        message.innerHTML = "Fare: Kshs.400, Time estimate: 1 hour, Stage: Moi Avenue";
      } else {
        message.innerHTML = "Sorry. Option not available. Would you like to ammend your request?";
      }
      if (syokimauGalleria === (modeOfTransport === "Matatu")) {
        message.innerHTML = "Fare: Kshs.500, Time estimate: 1 hour, Stage: Mombasa Road";
      } else if (syokimauGalleria === (modeOfTransport === "Taxi")) {
        message.innerHTML = "Fare: Kshs.600, Time estimated: 2 hours, Stage: Mombasa Road";
      } else if (syokimauGalleria === (modeOfTransport === "Train")) {
        message.innerHTML = "Fare: Kshs.500,Time estimate: 1 hour 40minutes, Stage: Mombasa Road";
      } else {
        message.innerHTML = "Sorry. Option not available. Would you like to ammend your request?";
      }
      if (syokimauJuja === (modeOfTransport === "Motorbike")) {
        message.innerHTML = "Fare: Kshs.600, Time estimate: 2 hours, Stage: Mombasa Road";
      } else if (syokimauJuja === (modeOfTransport === "Taxi")) {
        message.innerHTML = "Fare: Kshs.300, Time estimate: 1 hour, Stage: Mombasa Road";
      } else if (syokimauJuja === (modeOfTransport === "Train")) {
        message.innerHTML = "Fare: Kshs.400, Time estimate: 45 minutes, Stage: Mombasa Road";
      } else {
        message.innerHTML = "Sorry. Option not available. Would you like to ammend your request?";
      }
      if (westlandsMoringa === (modeOfTransport === "Matatu")) {
        message.innerHTML = "Fare: KShs.100, Time estimate: 40 minutes, Stage: Parklands Baptist";
      } else if (westlandsMoringa === (modeOfTransport === "Motorbike")) {
        message.innerHTML = "Fare: KShs.300, Time estimate: 30 minutes, Stage: Waiyaki Way";
      } else if (westlandsMoringa === (modeOfTransport === "Taxi")) {
        message.innerHTML = "Fare: Kshs.500, Time estimate: 45 minutes, Stage: Waiyaki Way";
      } else {
        message.innerHTML = "Sorry. Option not available. Would you like to ammend your request?";
      }
      if (westlandsTwoRivers === (modeOfTransport === "Motorbike")) {
        message.innerHTML = "Fare: KShs.150ksh, Time estimate: 40 minutes, Stage: Waiyaki Way";
      } else if (westlandsTwoRivers === (modeOfTransport === "Matatu")) {
        message.innerHTML = "Fare: Kshs.300, Time estimate: 1 hour, Stage: Waiyaki Way";
      } else if (westlandsTwoRivers === (modeOfTransport === "Taxi")) {
        message.innerHTML = "Fare: Kshs.500, Time estimate: 1 hour, Stage: Waiyaki Way";
      } else {
        message.innerHTML = "Sorry. Option not available. Would you like to ammend your request?";
      }
      if (westlandsJuja === (modeOfTransport === "Matatu")) {
        message.innerHTML = "Fare: Kshs.400, Time estimate: 1 hour 20 minutes, Stage: Waiyaki Way";
      } else if (westlandsJuja === (modeOfTransport === "Motorbike")) {
        message.innerHTML = "Fare: Kshs.250, Time estimate: 45 minutes, Stage: Waiyaki Way";
      } else if (westlandsJuja === (modeOfTransport === "Taxi")) {
        message.innerHTML = "Fare: Kshs.120, Time estimate= 1 hour, Stage: Waiyaki Way";
      } else {
        message.innerHTML = "Sorry. Option not available. Would you like to ammend your request?";
      }
      if (langataGalleria === (modeOfTransport === "Matatu")) {
        message.innerHTML = "Fare: Ksh.60, Time estimate: 30 minutes, Stage: Uhuru Gardens";
      } else if (langataGalleria === (modeOfTransport === "Motobike")) {
        message.innerHTML = "Fare: Ksh.150, Time estimate: 20 minutes, Stage: Uhuru Gardens";
      } else if (langataGalleria === (modeOfTransport === "Taxi")) {
        message.innerHTML = "Fare: Ksh.150, Time estimate: 20 minutes, Stage: Uhuru Gardens";
      } else if (langataGalleria === (modeOfTransport === "Train")) {
        message.innerHTML = "Fare: Ksh.80, Time estimate: 40 minutes, Stage: Uhuru Gardens";
      } else {
        message.innerHTML = "Sorry. Option not available. Would you like to ammend your request?";
      }
      if (langataMoringa === (modeOfTransport === "Matatu")) {
        message.innerHTML = "Fare: Ksh.500, Time estimate: 20 minutes, Stage: Uhuru Gardens";
      } else if (langataMoringa === (modeOfTransport === "Motorbike")) {
        message.innerHTML = "Fare: Ksh.150, Time estimate:40 minutes, Stage:Uhuru Gardens";
      } else {
        message.innerHTML = "Sorry. Option not available. Would you like to ammend your request?";
      }
      if (langataJuja === (modeOfTransport === "Motorbike")) {
        message.innerHTML = "Fare: Ksh.300, Time estimate: 40 minutes, Stage: Uhuru Gardens";
      } else if (langataJuja === (modeOfTransport === "Taxi")) {
        message.innerHTML = "Fare: Ksh.300,Time estimate: 1 hour, Stage: Uhuru Gardens";
      } else {
        message.innerHTML = "Sorry. Option not available. Would you like to ammend your request?";
      }
      event.preventDefault();
    };
