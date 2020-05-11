/* --------------------------------------------------------------- */
/*
/*                  NAVBAR
/*
/* --------------------------------------------------------------- */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
/* --------------------------------------------------------------- */
/*
/*                  SCROLL MENU
/*
/* --------------------------------------------------------------- */

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

/* --------------------------------------------------------------- */
/*
/*                  TRAD TAB
/*
/* --------------------------------------------------------------- */

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

/* --------------------------------------------------------------- */
/*
/*                 SOCIAL
/*
/* --------------------------------------------------------------- */
var button = document.querySelector("#stop");
var shouldKeepAnimating = false;
var addClassTimeouts = [];
var containers = document.querySelectorAll(".container");
containers = Array.prototype.slice.call(containers, 0);

setTimeout(setActiveClasses, 500);


function setActiveClasses() {
	var time = 0;

	if (!shouldKeepAnimating) {
		return;
	}

	addClassTimeouts = [];

	containers.forEach(function (container) {
		time += 1000;
		var timeoutId = setTimeout(function () {
			container.classList.add("active");
		}, time);
		addClassTimeouts.push(timeoutId);
	});

	setTimeout(function () {
		clearActiveClasses();
		setTimeout(setActiveClasses, 2000);
	}, time + 2000);
}

function clearActiveClasses() {
	containers.forEach(function (container) {
		container.classList.remove("active");
	});
}
