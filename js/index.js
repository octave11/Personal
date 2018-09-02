console.log("Script.js loaded successfully!");

$(document).ready(function () {

  // Strings
  $("#name").text("Lars Vidar Nordli");

  $("#link1").text("Home");
  $("#link2").text("About");
  $("#link3").text("Portfolio");
  $("#link4").text("Contact");

  $("#presentation-title").text("About me");
  $("#presentation-text").html("I am a photographer, a Photoshop wiz, a Blender artist and a freelance tech-reporter." +
  "<br>I fly drones." +
  "<br>Currently learning Java, and front-end web development with HTML, CSS, JavaScript, jQuery and BootStrap." +
  "<br>I love creating things!");

  $("#portfolio-title").text("Portfolio");
  $("#no1-desc").text("Ada Lovelace Tribute page");
  $("#no1-sub").text("HTML, jQuery, CSS");
  $("#no2-desc").text("WoW Guild page");
  $("#no2-sub").text("HTML, PHP-template");
  $("#no3-desc").text("Personal wordpress page");
  $("#no3-sub").text("Wordpress 4.7.1");
  $("#no4-desc").text("Drone photo from Senja, Northern-Norway");
  $("#no4-sub").text("DJI Phantom 3 Professionale");
  $("#no5-desc").text("Photoshop project");
  $("#no5-sub").text("Photoshop CC");
  $("#no6-desc").text("Blender project");
  $("#no6-sub").text("Blender 2.78 with Daz3D-model");

  $("#contact-title").text("Contact me");

  $("#byline").text("Designed and coded by Lars Vidar Nordli");
  $("#profile-link").text(" Twitter");
  $("#profile-link2").text(" LinkedIn");
  $("#profile-link3").text(" Instagram");
  $("#profile-link4").text(" CodePen");
  $("#profile-link5").text(" Free Code Camp");

  // Links
  $("#link1").attr("href", "#");
  $("#link2").attr("href", "#presentation");
  $("#link3").attr("href", "#projects");
  $("#link4").attr("href", "#contact");

  $("#project-link1").attr("href", "https://codepen.io/larsvidar/pen/VPjgJX");

  $("#profile-link").attr("href", "https://twitter.com/larsvidar");
  $("#profile-link2").attr("href", "https://www.linkedin.com/in/lars-vidar-nordli-64749a95");
  $("#profile-link3").attr("href", "https://www.instagram.com/larsvidar/");
  $("#profile-link4").attr("href", "http://codepen.io/larsvidar/");
  $("#profile-link5").attr("href", "https://www.freecodecamp.com/larsvidar");

  // Classes
  $("img").addClass("img-responsive");

  $("#navigation-bar").addClass("text-right");

  $("#bottom-bar").addClass("text-right");
  $("#byline").addClass("text-left");
  $("#profile-link").addClass("fa fa-twitter");
  $("#profile-link2").addClass("fa fa-linkedin");
  $("#profile-link3").addClass("fa fa-instagram");
  $("#profile-link4").addClass("fa fa-codepen");
  $("#profile-link5").addClass("fa fa-free-code-camp");

  // Images
  $("#profile-image").attr("src", "http://larsvidar.no/images/responsiveportfolio/lars_profil.jpg");

  $("#cell1").attr("src", "http://larsvidar.no/images/responsiveportfolio/ada.jpg");
  $("#cell2").attr("src", "http://larsvidar.no/images/responsiveportfolio/theholynine.jpg");
  $("#cell3").attr("src", "http://larsvidar.no/images/responsiveportfolio/larsvidar.no.jpg");
  $("#cell4").attr("src", "http://larsvidar.no/images/responsiveportfolio/drone-photo.jpg");
  $("#cell5").attr("src", "http://larsvidar.no/images/responsiveportfolio/Photoshop - Girl in the woods.jpg");
  $("#cell6").attr("src", "http://larsvidar.no/images/responsiveportfolio/Blender-road-wide-web.jpg");
});