<template>
  <div id='particles-js'></div>
</template>

<script>
  export default {
    name: 'Particles',

    mounted () {
      require('particles.js')
      this.$nextTick(() => {
        this.initParticlesJS()
      })
    },

    methods: {
      initParticlesJS () {
        /* eslint-disable */
        particlesJS('particles-js', {
          "particles": {
            "number": {
              "value": 80,
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
              "polygon": {
                "nb_sides": 6
              },
            },
            "opacity": {
              "value": 1,
              "random": true,
              "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.7,
                "sync": false
              }
            },
            "size": {
              "value": 2,
              "random": true,
              "anim": {
                "enable": false,
                "speed": 20,
                "size_min": 0.4,
                "sync": false
              }
            },
            "line_linked": {
              "enable": false,
            },
            "move": {
              "enable": true,
              "speed": 5,
              "direction": "bottom",
              "random": true,
              "straight": false,
              "out_mode": "out",
              "bounce": false,
              "attract": {
                "enable": true,
                "rotateX": 300,
                "rotateY": 1200
              }
            }
          },
          "interactivity": {
            "detect_on": "window",
            "events": {
              "onhover": {
                "enable": true,
                "mode":  "bubble"
              },
              "onclick": {
                "enable": true,
                "mode": "repulse"
              },
              "resize": true
            },
            "modes": {
              "grab": {
                "distance": 150,
                "line_linked": {
                  "opacity": 1
                }
              },
              "bubble": {
                "distance": 200,
                "size": 10,
                "duration": 2,
                "opacity": 0.9,
                "speed": 3
              },
              "repulse": {
                "distance": 200,
                "duration": 0.2
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
        })
      }
    }

  }
</script>

<style>
  #particles-js {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    pointer-events: none;
  }
</style>