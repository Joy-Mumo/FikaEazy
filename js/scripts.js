//UNFINISHED TRIAL CODE:
// function Trip (currentLocation, destination) {
//     this.currentLocation = currentLocation;
//     this.destination = destination;
//   }
// function Transportoptions() {
//   var currentLocation = document.getElementById("current-location").value;
//   var destination = document.getElementById("destination").value;

  // var currentLocation = $("#current-location").val();
  //
  // var destination = $("#destination").val();
  //
  // var currentLocation = {
  //   var hilton = {var matatu, var motorbike, var train, var taxi}
  //   var langata = {var matatu, var motorbike, var train, var taxi}
  //   var machakos = {var matatu, var motorbike, var train, var taxi}
  //   var westlands = {var matatu, var motorbike, var train, var taxi}
  //   var ngong = {var matatu, var motorbike, var train, var taxi}
  // }
  //
  // var destination = {
  //   var moringa = {var matatu, var motorbike, var train, var taxi}
  //   var twoRivers= {var matatu, var motorbike, var train, var taxi}
  //   var galleria = {var matatu, var motorbike, var train, var taxi}
  //   var juja = {var matatu, var motorbike, var train, var taxi}
  //   var westlands = {var matatu, var motorbike, var train, var taxi}
  // }
  //
  // var transportMode = {
  //   var matatu = {var stage, var fare, var duration}
  //   var motorbike = {var stage, var fare, var duration}
  //   var train = {var stage, var fare, var duration}
  //   var taxi = {var stage, var fare, var duration}
  // }

    // var westlands={ matatu,motorbike,train,taxi}
    //  this.matatu=matatu;
    //


//     if (currentLocation=hilton && destination=moringa) {
//       ans.textContent= "Safe trip!"
//     }
// }



//This is the begining of the User Interface

        // $("p#summary").append(<p><span class='summary'> + newTrip.currentLocation + " " + newTrip.destination + </span></p>);

        // $("#tripsummary").show();
        // $("#newrequest").hide();
        //
    //     event.preventDefault();
    //   });
    // });
// };

// function getUserName() {
// var nameField = document.getElementById('nameField').value;
// var result = document.getElementById('result');
//
// if (nameField.length < 3) {
//     result.textContent = 'Username must contain at least 3 characters';
//     //alert('Username must contain at least 3 characters');
// } else {
//     result.textContent = 'Your username is: ' + nameField;
//     //alert(nameField);
// }
// }

//BUSINESS LOGIC

// function tripOptions() {
//    var currentLocation = $("#current-location").find(":selected").text();
//    var destination = $("#destination").find(":selected").text();
//    var modeOfTransport = $("#transportmode").find(":selected").text();

function tripOptions() {
  var currentLocation = $("#current-location").find(":selected").text();
  var destination = $("#destination").find(":selected").text();
  var modeOfTransport = $("#transportmode").find(":selected").text();

  // var modeOfTransport = {
  //
  // }
  var hiltonMoringa = (currentLocation == "Hilton Hotel" && destination == "Moringa School");
  var hiltonTwoRivers = (currentLocation == "Hilton Hotel" && destination == "Two Rivers Mall");
  var hiltonGalleria = (currentLocation == "Hilton Hotel") && (destination == "Galleria");
  var syokimauGalleria = (currentLocation = "Syokimau") && (destination = "Galleria");
  var syokimauJuja = (currentLocation = "Syokimau") && (destination = "Galleria");
  var westlandsMoringa = (currentLocation="Westlands") && (destination="Moringa School");
  var westlandsTwoRivers = (currentLocation="Westlands") && (destination="Two Rivers Mall");
  var westlandsJuja = (currentLocation="Westlands") && (destination="Juja");
  var langataGalleria = (currentLocation="Lang'ata") && (destination="Galleria");
  var langataMoringa = (currentLocation="Lang'ata") && (destination="Moringa School");
  var langataJuja = (currentLocation="Lang'ata") && (destination="Juja");



     if (hiltonMoringa == (modeOfTransport == "Matatu")) {
       message.innerHTML = "Fare: Kshs.50, Time estimate: 40 minutes, Stage= Railways Station";
       // alert("fare is 50ksh");
       // alert("estimated time is 40minutes");
       // alert("stage is Railways Station");
    }
     else if (hiltonMoringa == (modeOfTransport == "Motorbike")) {
       message.innerHTML = "Fare: Kshs.150, Time estimate: 30 minutes, Stage: Kencom";
     //   alert("fare is 150ksh");
     //   // alert("estimated time is 30minutes");
       // alert("stage is Kencom");
    }
     else if (hiltonMoringa == (modeOfTransport == "Taxi")) {
       message.innerHTML = "Fare: Kshs.250, Time estimate: 45 minutes, Stage: Kencom";
    //    alert("fare is 250ksh");
    //    alert("estimated time is 45minutes");
    //    alert("stage is Kencom");
     }
     else if (hiltonTwoRivers == (modeOfTransport == "Matatu")) {
        message.innerHTML = "Fare: Kshs.70, Time estimate: 40 minutes, Stage: Odeon";
    //     alert("fare is 70ksh");
    //     alert("estimated time is 40minutes");
    //     alert("stage is Odeon");
    }
    else if (hiltonTwoRivers == (modeOfTransport == "Motorbike")) {
        message.innerHTML = "Fare: Kshs.150ksh,Time estimate: 1 hour, Stage: Archives";
    //     alert("fare is 150ksh")
    //     alert("estimated time is 1hour")
    //     alert("stage is Archives")
    }
    else if (hiltonTwoRivers == (modeOfTransport == "Taxi")) {
      message.innerHTML = "Fare: Kshs.400, Time estimate: 45 minutes, Stage: Archives";
    //   alert("fare is 400ksh")
    //   alert("estimated time is 45minutes")
    //   alert("stage is Archives")
    }
    else if (hiltonGalleria == (modeOfTransport == "Matatu")) {
      message.innerHTML = "Fare: Kshs.80, Time estimate: 45 minutes, Stage: Railways Station";
    //   alert("fare is 80ksh")
    //   alert("estimated time is 45minutes")
    //   alert("stage is Railways Station")
    }
    else if (hiltonGalleria == (modeOfTransport == "Motorbike")) {
      message.innerHTML = "Fare: Kshs.200, Time estimate: 1 hour 45 minutes, Stage: Moi Avenue";
    //   alert("fare is 200ksh")
    //   alert("estimated time is 1hour 45minutes")
    //   alert("stage is Moi Avenue")
    }
    else if (hiltonGalleria == (modeOfTransport == "Taxi")) {
      message.innerHTML = "Fare: Kshs.400, Time estimate: 1 hour, Stage: Moi Avenue";
    //   alert("fare is 400ksh")
    //   alert("estimated time is 1hour")
    //   alert("stage is Moi Avenue")
    }
    else if (syokimauGalleria == (modeOfTransport == "Matatu")) {
      message.innerHTML = "Fare: Kshs.500, Time estimate: 1 hour 40minutes, Stage: Mombasa Road";
    //   alert("fare is 500ksh")
    //   alert("estimated time is 1hour 40minutes")
    //   alert("stage is Mombasa Road")
    }
    else if (syokimauGalleria == (modeOfTransport == "Taxi")) {
      message.innerHTML = "Fare: Kshs.600, Time estimated: 2 hours, Stage: Mombasa Road";
    //   alert("fare is 600ksh")
    //   alert("estimated time is 2hours")
    //   alert("stage is Mombasa Road")
    }
    else if (syokimauGalleria == (modeOfTransport == "Train")) {
      message.innerHTML = "Fare: Kshs.500,Time estimate: 1 hour 40minutes, Stage: Mombasa Road";
    //   alert("fare is 500ksh")
    //   alert("estimated time is 1hour 40minutes")
    //   alert("stage is Mombasa Road")
    }
    else if (syokimauJuja == (modeOfTransport == "Motorbike")) {
      message.innerHTML = "Fare: Kshs.600, Time estimate: 2 hours, Stage: Mombasa Road";
    //   alert("fare is 600ksh")
    //   alert("estimated time is 2hours")
    //   alert("stage is Mombasa Road")
    }
    else if (syokimauJuja == (modeOfTransport == "Taxi")) {
      message.innerHTML = "Fare: Kshs.300, Time estimate: 1 hour, Stage: Mombasa Road";
    //   alert("fare is 300ksh")
    //   alert("estimated time is 1hour")
    //   alert("stage is Mombasa Road")
    }
    else if (syokimauJuja == (modeOfTransport == "Train")) {
      message.innerHTML = "Fare: Kshs.400, Time estimate: 45 minutes, Stage: Mombasa Road";
    //   alert("fare is 400ksh")
    //   alert("estimated time is 1hour")
    //   alert("stage is Mombasa Road")
    }
    else if (westlandsMoringa == (modeOfTransport == "Matatu")) {
       message.innerHTML="Fare: KShs.100, Time estimate: 40 minutes, Stage: Parklands Baptist";
        // alert("fare is 100ksh")
        // alert("estimated time is 40minutes")
        // alert("stage is Parklands Baptist Stage (Ring Road)")
      }
      else if (westlandsMoringa == (modeOfTransport == "Motorbike")) {
        message.innerHTML="Fare: KShs.300, Time estimate: 30 minutes, Stage: Waiyaki Way";
        // alert("fare is 300ksh")
        // alert("estimated time is 30minutes")
        // alert(" Waiyaki Way")

      }
      else if (westlandsMoringa == (modeOfTransport == "Taxi")) {
        message.innerHTML="Fare: Kshs.500, Time estimate: 45 minutes, Stage: Waiyaki Way";
        // alert("fare is 300ksh")
        // alert("estimated time is 30minutes")
        // alert(" Waiyaki Way")
      }


      else if (westlandsTwoRivers == (modeOfTransport == "Motorbike")) {
        message.innerHTML="Fare: KShs.150ksh, Time estimate: 40 minutes, Stage: Waiyaki Way";
        // alert("fare is 150ksh")
        // alert("estimated time is 40minutes")
        // alert(" Waiyaki Way")

      }
      else if (westlandsTwoRivers == (modeOfTransport == "Matatu")) {
        message.innerHTML="Fare: Kshs.300, Time estimate: 1 hour, Stage: Waiyaki Way";
        // alert("fare is 300ksh")
        // alert("estimated time is 1 hour")
        // alert(" Waiyaki Way")
      }

      else if (westlandsTwoRivers == (modeOfTransport == "Taxi")) {
        message.innerHTML="Fare: Kshs.500, Time estimate: 1 hour, Stage: Waiyaki Way";
        // alert("fare is 300ksh")
        // alert("estimated time is 1 hour")
        // alert(" Waiyaki Way")
      }


      else if (westlandsJuja == (modeOfTransport == "Matatu")) {
          message.innerHTML="Fare: Kshs.400, Time estimate: 1 hour 20 minutes, Stage: Waiyaki Way";
          // alert("fare is 400ksh")
          // alert("estimated time is 1hour 20minutes")
          // alert(" Waiyaki Way")
      }


      else if (westlandsJuja == (modeOfTransport == "Motorbike")) {
          message.innerHTML="Fare: Kshs.250, Time estimate: 45 minutes, Stage: Waiyaki Way";
          // alert("fare is 250ksh")
          // alert("estimated time is 45minutes")
          // alert(" Waiyaki Way")
      }
      else if (westlandsJuja == (modeOfTransport == "Taxi")) {
          message.innerHTML="Fare: Kshs.120, Time estimate= 1 hour, Stage: Waiyaki Way";
          // alert("fare is 120ksh")
          // alert("estimated time is 1 hour")
          // alert(" Waiyaki Way")
      }

      // else if((currentLocation=="Lang'ata") && (destination="Galleria")); {
      //        message.innerHTML="Fare:Ksh.400,Time estimate:1hour,Stage:Prestige";
      //        alert("Fare:Ksh.400")
      //        alert("Time estimate:1hour")
      //        alert("Stage:Prestige")
      //      }

       // }

       else if (langataGalleria == (modeOfTransport == "Matatu")) {
          message.innerHTML="Fare: Ksh.60, Time estimate: 30 minutes, Stage: Uhuru Gardens";
               // alert("Fare:Ksh.60")
               // alert("Time estimate:30minutes")
               // alert("Stage:Uhuru Gardens")

       }
       else if (langataGalleria == (modeOfTransport == "Motobike")) {
               message.innerHTML="Fare: Ksh.150, Time estimate: 20 minutes, Stage: Uhuru Gardens";
               // alert("Fare:Ksh.150")
               // alert("Time estimate:20minutes")
               // alert("Stage:Uhuru Gardens")
               //
       }
       else if (langataGalleria == (modeOfTransport == "Taxi")) {
               message.innerHTML="Fare: Ksh.150, Time estimate: 20 minutes, Stage: Uhuru Gardens";
               // alert("Fare:Ksh.300")
               // alert("Time estimate:40minutes")
               // alert("Stage:Uhuru Gardens")
       }
       else if (langataGalleria == (modeOfTransport == "Train")) {
               message.innerHTML="Fare: Ksh.80, Time estimate: 40 minutes, Stage: Uhuru Gardens";
               // alert("Fare:Ksh.80")
               // alert("Time estimate:40minutes")
               // alert("Stage:Uhuru Gardens")

       }
       else if (langataGalleria == (modeOfTransport == "Matatu")) {
               message.innerHTML="Fare: Ksh.500, Time estimate: 20 minutes, Stage: Uhuru Gardens";
               // alert("Fare:Ksh.500")
               // alert("Time estimate:40minutes")
               // alert("Stage:Uhuru Gardens")

       }
       else if (langataMoringa == (modeOfTransport == "Motorbike")) {
               message.innerHTML="Fare: Ksh.150, Time estimate:40 minutes, Stage:Uhuru Gardens";
               // alert("Fare:Ksh.150")
               // alert("Time estimate:40minutes")
               // alert("Stage:Uhuru Gardens")

       }
       else if (langataJuja == (modeOfTransport == "Motorbike")) {
               message.innerHTML="Fare: Ksh.300, Time estimate: 1 hour, Stage: Uhuru Gardens";
               // alert("Fare:Ksh.300")
               // alert("Time estimate:1hour")
               // alert("Stage:Uhuru Gardens")

       }
       else if (langataJuja == (modeOfTransport == "Taxi")) {
               message.innerHTML="Fare: Ksh.300,Time estimate: 1 hour, Stage: Uhuru Gardens";
               // alert("Fare:Ksh.500")
               // alert("Time estimate:1hour")
               // alert("Stage:Uhuru Gardens")

       }


    else {
      message.innerHTML = "Option not available. Kindly choose another.";
      }

      // $("#tripsummary").show();
      // $("#newrequest").hide();

    event.preventDefault();
};

// var result=parseInt(question1)+parseInt(question2)+parseInt(question3)+parseInt(question4)+parseInt(question5);
//     $("#result").text("Your total score is: " +result + "%. Would you like to attempt the quiz again?");
//
//     $("button").click(function() {
//       $("#result-showing").toggle();
//       $("#quizboard-hidden").toggle();
//     });
//       $("form#quizboard").hide();
//       $("#result").show();
