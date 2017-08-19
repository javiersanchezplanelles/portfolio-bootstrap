
//Text intro animations
$(document).ready(function () {
$(function () {
  $('.sayHi').textillate({ 
    in: { effect: 'fadeInDown', callback: function() {
      $('.intro').textillate({
    in: { effect: 'bounceInLeft'}
  });
        }
        }});
});
// Skills and portfolio animations
var config = {
        mobile: true,
        reset:  true
      }
window.sr = new ScrollReveal(config);
sr.reveal('h5', { duration: 900 });
sr.reveal('.progress', { duration: 900});

sr.reveal('.img-thumbnail', {duration: 900, origin: 'right'});


//particles.js

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 50,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#6c9dc6"
    },
    "shape": {
      "type": "polygon",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});
 }); 
// end ready 

// change name sizing according to screen
changeName();
window.addEventListener('resize', changeName);

function changeName() {
     var title = document.querySelector(".navbar-brand");
     var home = document.querySelector(".home");
     var greeting = document.querySelector(".intro");
if (window.innerWidth && document.documentElement.clientWidth < 458) {
   title.style.fontSize = "1em";
  home.style.height = "250px";
  greeting.style.fontSize = "13px";
 } else {
   title.style.fontSize ="1.7em";
 }
}

//Click arrow to scroll down

var arrow = document.getElementsByClassName("arrow-down")[0];

//Finds y value of given object
function findPos(obj) {
    var curtop = 0;
    if (obj.offsetParent) {
        do {
            curtop += obj.offsetTop;
        } while (obj = obj.offsetParent);
    return [curtop];
    }
}
arrow.addEventListener('click', function () {
  //scroll down from home to about section
  window.scroll(0,findPos(document.getElementById("about")));
})