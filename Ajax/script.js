// $(document).ready(function () {
//   $("#getLocation").click(function () {
//     var ipAddress = $("#ipAddress").val();
//     getCountry(ipAddress);
//   });
// });

// function getCountry(ipAddress) {
//   $.ajax({
//     type: "GET",
//     url: "http://www.geoplugin.net/xml.gp?ip=" + ipAddress,
//     dataType: "xml",
//     success: function (xml) {
//       var countryName = $(xml).find("geoplugin_countryName").text();
//       $("#country").text(countryName);
//     },
//   });
// }

// Vezba 2

// $(document).ready(function () {
//   $("#getImage").click(function () {
//     getDogImage();
//   });
// });

// function getDogImage() {
//   $.ajax({
//     type: "GET",
//     url: "https://dog.ceo/api/breeds/image/random",
//     dataType: "json",
//     success: function (data) {
//       var imageUrl = data.message;
//       var imageElement = $("<img>").attr("src", imageUrl);
//       $("#dogImageContainer").append(imageElement);
//     },
//   });
// }

$(document).ready(function () {
  $("#searchBox").on("keyup", function (event) {
    if (event.keyCode === 13) {
      var searchQuery = $("#searchBox").val();
      searchUsers(searchQuery);
    }
  });
});

function searchUsers(searchQuery) {
  $.ajax({
    type: "GET",
    url: "https://api.github.com/search/users?q=" + searchQuery,
    dataType: "json",
    success: function (data) {
      var userList = data.items;
      $("#userListContainer").empty();
      for (var i = 0; i < userList.length; i++) {
        var user = userList[i];
        var imageElement = $("<img>").attr("src", user.avatar_url);
        var usernameElement = $("<p>").text(user.login);
        var userContainer = $("<div>").append(imageElement, usernameElement);
        $("#userListContainer").append(userContainer);
      }
    },
  });
}
