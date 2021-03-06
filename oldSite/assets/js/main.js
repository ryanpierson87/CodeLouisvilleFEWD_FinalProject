const Main = (() => {
  document.addEventListener('DOMContentLoaded', function() {
    // initialize sidenav
    let xSideNav = document.querySelectorAll('.sidenav');
    let xSideNavInstances = M.Sidenav.init(xSideNav);

    // initialize dropdown menu
    $(".dropdown-trigger").dropdown();
    let xDropDown = document.querySelectorAll('.dropdown-trigger');
    let xDropDownInstances = M.Dropdown.init(xDropDown, {
      constrainWidth: false
    });
    
    // initialize collapsable ul
    let xFunkyUL = document.querySelectorAll('.collapsible');
    let xFunkyULInstances = M.Collapsible.init(xFunkyUL);
  });

  const setupParticles = () => {
    particlesJS('particles-js', 
    {
      "particles": {
        "number": {
          "value": 60,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#673ab7"
        },
        "shape": {
          "type": ["circle", "triangle", "star"],
          "stroke": {
            "width": 0,
            "color": "#000000"
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
          "value": 5,
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
          "color": "#673ab7",
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
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      }
    } );
  }

  const setupStats = () => {
    var count_particles, stats, update;
    stats = new Stats;
    stats.setMode(0);
    // stats.domElement.style.position = 'absolute';
    // stats.domElement.style.left = '0px';
    // stats.domElement.style.top = '0px';
    stats.domElement.style.position = 'fixed';
    stats.domElement.style.left = '0px';
    stats.domElement.style.bottom = '1.2rem';
    document.body.appendChild(stats.domElement);
    count_particles = document.querySelector('.js-count-particles');
    update = function() {
      stats.begin();
      stats.end();
      if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
        count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
      }
      requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
  }

  // public methods
  return {
    init: () => {

      setupParticles();

      setupStats();

    }
  }
})();

Main.init();