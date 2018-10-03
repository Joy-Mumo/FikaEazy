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

    $(document).ready(function() {
      $("#details").submit(function(event) {
        var details = ["new-current-location", "new-destination"];

        details.forEach(function(detail) {
          var userOption = $("option#" + detail).val();
          $("#" + detail).text(userOption);
        });

        // $("p#summary").append(<p><span class='summary'> + newTrip.currentLocation + " " + newTrip.destination + </span></p>);

        $("#tripsummary").show();
        $("#newrequest").hide();

        event.preventDefault();
      });
    });
// };
