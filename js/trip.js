//UNFINISHED TRIAL CODE:
// function Trip (currentLocation, destination) {
//     this.currentLocation = currentLocation;
//     this.destination = destination;
//   }
//
// function Trip (currentLocation, destination) {
//     this.currentLocation = currentLocation;
//     this.destination = destination;
//   }
//
//   var currentLocation = $("#current-location").val();
//
//   var destination = $("#destination").val();
//
//   var currentLocation = {
//     var nairobi = {var matatu, var motorbike, var train, var taxi}
//     var langata = {var matatu, var motorbike, var train, var taxi}
//     var machakos = {var matatu, var motorbike, var train, var taxi}
//     var westland = {var matatu, var motorbike, var train, var taxi}
//     var ngong = {var matatu, var motorbike, var train, var taxi}
//   }
//
//   var destination = {
//     var moringaSchool = {var matatu, var motorbike, var train, var axi}
//     var twoRiversMall = {var matatu, var motorbike, var train, var taxi}
//     var galleria = {var matatu, var motorbike, var train, var taxi}
//     var juja = {var matatu, var motorbike, var train, var taxi}
//     var westlands = {var matatu, var motorbike, var train, var taxi}
//   }
//
//   var transportMode = {
//     var matatu = {var stage, var fare, var duration}
//     var motorbike = {var stage, var fare, var duration}
//     var train = {var stage, var fare, var duration}
//     var taxi = {var stage, var fare, var duration}
//   }
//
//

$(document).ready(function() {
    $("#blanks form").submit(function(event) {
      var blanks = ["new-current-location", "new-destination"];

      blanks.forEach(function(blank) {
        var userOption = $("option#" + blank).val();
        $("." + blank).text(userOption);
      });

      // $("p#summary").append(<li><span class='summary'> + newTrip.currentLocation + " " + newTrip.destination + </span></li>);

      $("#tripsummary").show();
      $("#newrequest").hide();

      event.preventDefault();
    });
  });
