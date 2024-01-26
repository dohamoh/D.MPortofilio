import { Component } from '@angular/core';
import * as AOS from 'aos';
AOS.init();
declare let particlesJS: any;

AOS.init({
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1000, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  text: Array<String> = [
    'mean fullstack developer',
    'frontend developer',
    'backend developer',
    'freelancer',
  ];
  innerHtml: String = '';
  i: any = 0;
  ngOnInit(): void {
    this.innerHtml = this.text[this.i];

    this.animation();
    this.initializeParticles();
  }


  animation() {
    setTimeout(() => {
      document.getElementById('ani')?.classList.replace('w-ani', 'w-0');
      setTimeout(() => {
        if (this.i + 1 == this.text.length) {
          this.i = 0;
        } else {
          this.i += 1;
        }
        this.innerHtml = this.text[this.i];
        document.getElementById('ani')?.classList.replace('w-0', 'w-ani');
        this.animation();
      }, 2000);
    }, 2000);
  }

  initializeParticles() {

    particlesJS('particles-js', {
      particles: {
        number: {
          value: 110,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: '#fff'
        },
        shape: {
          type: 'circle',
          stroke: {
            width: 0,
            color: '#000000'
          },
          polygon: {
            nb_sides: 5
          },
        },
        opacity: {
          value: 0.5,
          random: true,
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false
          }
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: '#fff',
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 6,
          direction: 'none',
          random: false,
          straight: false,
          out_mode: 'out',
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200
          }
        }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: true,
            mode: 'grab'
          },
          onclick: {
            enable: true,
            mode: 'push'
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 200,
            line_linked: {
              opacity: 1
            }
          },
          bubble: {
            distance: 200,
            size: 80,
            duration: 0.4,
            opacity: 0.8,
            speed: 3
          },
          repulse: {
            distance: 100,
            duration: 1
          },
          push: {
            particles_nb: 4
          },
          remove: {
            particles_nb: 2
          }
        }
      },
      retina_detect: true
    });
  }
}
