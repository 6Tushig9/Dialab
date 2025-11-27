document.addEventListener("DOMContentLoaded", function () {
    const swiperTestimonial = new Swiper(".testimonial__swiper", {
      loop: true,
      slidesPerView: "auto",
      centeredSlides: "auto",
      spacebetween: 20,
      grabCursor: true,
      speed: 800,
      effect: "coverflow",
      coverflowEffect: {
        rotate: 0,
        depth: 250,
        modifier: 0.4,
        slideShadows: false,
      },

      // If we need pagination
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },

      // Navigation arrows
    //   navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    //   },

      autoplay: {
          delay: 3000,
          disableOnInteraction: false,
      }
    });
})


const backToTopButton = document.getElementById("bttopBTN");

backToTopButton.addEventListener("click", function () {
window.scrollTo({ top: 0, behavior: "smooth" });
});


document.addEventListener("DOMContentLoaded", () => {
  // Select all clickable service cards
  const serviceCards = document.querySelectorAll(".service-card");

  // Select all modal close buttons
  const closeButtons = document.querySelectorAll(".modal-close");

  // Add click event to each service card
  serviceCards.forEach((card) => {
    card.addEventListener("click", () => {
      // Get the modal ID from the card's 'data-modal-target' attribute
      const modalId = card.getAttribute("data-modal-target");
      const targetModal = document.getElementById(modalId);

      // If a matching modal exists, show it
      if (targetModal) {
        targetModal.classList.add("active");
      } else {
        console.warn(`No modal found with ID: ${modalId}`);
      }
    });
  });

  // Add click event to each close button
  closeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Find the parent modal-overlay and remove 'active' class
      const modal = button.closest(".modal-overlay");
      if (modal) {
        modal.classList.remove("active");
      }
    });
  });

  // Add click event to all modal overlays (to close by clicking background)
  const modalOverlays = document.querySelectorAll(".modal-overlay");
  modalOverlays.forEach((overlay) => {
    overlay.addEventListener("click", (event) => {
      // Check if the click was directly on the overlay (not the content)
      if (event.target === overlay) {
        overlay.classList.remove("active");
      }
    });
  });
});


particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 380,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
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


/* ---- stats.js config ---- */

var count_particles, stats, update;
stats = new Stats;
stats.setMode(0);
stats.domElement.style.position = 'absolute';
stats.domElement.style.left = '0px';
stats.domElement.style.top = '0px';
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



