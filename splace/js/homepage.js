mapboxgl.accessToken = 'pk.eyJ1IjoicmFmZmFlbGVyaWNjYXJkZWxsaSIsImEiOiJjazNpcmZoMzIwYWVzM2NwNm92eWpxbTdiIn0.15M15i30LdC8jUWkVsMSfg';
var bounds = [
  [9.077, 45.411], // Southwest coordinates
  [9.327, 45.553] // Northeast coordinates
];
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/raffaelericcardelli/ckpi7qoex04lt17t72gud5nuv',
  center: [9.190, 45.467],
  zoom: "11.93",
  maxBounds: bounds
});

const toggleButton = document.getElementsByClassName('navbar-toggle')[0];
const navbarText = document.getElementsByClassName('navbarText');
const navbarLine = document.getElementsByClassName('navbarLine')[0];
const menu = document.querySelector(".menu ul");
const logo = document.querySelector(".vale");

var counter_animation = 0;

toggleButton.addEventListener('click', function() {
  navbarLine.classList.toggle('active');
  for (var i = 0; i < navbarText.length; i++)
    navbarText[i].classList.toggle('active');
});

function toggleMenu() {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
    menu.classList.add("border-radius-active");
    toggleButton.innerHTML = "<i class='fas fa-bars'></i>";
    toggleButton.classList.add("menu-closed");
    logo.classList.add("menu-closed");
    toggleButton.classList.remove("menu-open");
    toggleButton.classList.remove("menu-open-ham");
    logo.classList.remove("menu-open");
  } else {
    menu.classList.add("active");
    menu.classList.remove("border-radius-active");
    toggleButton.innerHTML = "<i class='fas fa-times'></i>";
    toggleButton.classList.add("menu-open");
    logo.classList.add("menu-open");
    logo.classList.add("logo-position");
    toggleButton.classList.add("menu-open-ham");
    toggleButton.classList.remove("menu-closed");
    logo.classList.remove("menu-closed");
  }
}

toggleButton.addEventListener("click", toggleMenu, false);

//loop through each button
$('.next-section').each(function() {
  $(this).on('click', function() {
    //find the button's parent, in this case it is the section wrapper #about
    var nextSection = $(this).parent().next();
    //animate to the next section, edit the offset and time
    // note: having an offset can be handy, especially if you have fixed elements that depend on these scroll bahaviours. I'll leave it up to you to decide if you need an offset or not. Feel free to delete the 1 pixel altogether, you are the captain your own ship!
    $('html, body').animate({
      scrollTop: nextSection.offset().top + 1
    }, 200);
  });
});


const observer = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      if (counter_animation == 0) {
        $('.worker-count').each(function() {
          $(this).prop('Counter', 100000).animate({
            Counter: $(this).text()
          }, {
            duration: 3000,
            easing: 'easeOutExpo',
            step: function(now) {
              $(this).text(Math.ceil(now).toLocaleString('it-IT'));
            }
          });
        });
        $('.places-count').each(function() {
          $(this).prop('Counter', 1000).animate({
            Counter: $(this).text()
          }, {
            duration: 3000,
            easing: 'easeOutExpo',
            step: function(now) {
              $(this).text(Math.ceil(now).toLocaleString('it-IT'));
            }
          });
        });
        counter_animation = 1;
      }
    }
  });
});

observer.observe(document.querySelector('.worker-count'));

map.on('click', function() {
  if (map.scrollWheelZoom.enabled()) {
    map.scrollWheelZoom.disable();
  } else {
    map.scrollWheelZoom.enable();
  }
});


function resize() {
  if (window.innerWidth <= 768) {
    document.getElementById("worker").innerHTML = "lavoratori da conoscere";
  } else {
    document.getElementById("worker").innerHTML = "lavoratori da conoscere,";
  }
}

$(document).ready(function() {
  resize();
  $(window).resize(resize);
});
