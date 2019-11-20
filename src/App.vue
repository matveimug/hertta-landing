<template>
  <div id="app">
    <main>
      <Logo :w="500" :h="250"/>
      <Contact :contacts="contacts" />
      <Events :data="sheets" />
    </main>
  </div>
</template>

<script>
  import Contact from './components/Contact.vue'
  import Logo from './components/Logo.vue'
  import Events from './components/Events.vue'

  export default {
    name: 'app',
    components: {
      Contact, Logo, Events
    },
    data: function () {
      return {
        contacts: [
          {fa: ['fas', 'envelope'], txt: 'atelier.hertta@gmail.com', url: 'mailto:atelier.hertta@gmail.com'},
          {fa: ['fab', 'instagram'], txt: 'herttaknitwear', url: 'https://www.instagram.com/herttaknitwear/'},
          {fa: ['fab', 'facebook-square'], txt: 'atelierhertta', url: 'https://www.facebook.com/atelierhertta'},
          {fa: ['fas', 'shopping-cart'], txt: 'shop<sup><var>beta</var></sup>', url: 'https://shop.hertta.ee'},
        ],
        id: '1mt5KuWcilbSv7Z8Ypfm71-Qkr8ApvShbEsxfno3pU2s',
        sheets: [],
        colors: ['rgb(0, 119, 174)', 'rgb(27, 63, 81)', 'rgb(226, 0, 105)', 'rgb(191, 193, 49)', 'rgb(192, 135, 171)', 'rgb(113, 42, 43)']
      }
    },
    methods: {
      parseSheet(data) {
        return data.feed.entry.map(entry => {
          return Object.keys(entry)
              .map(field => {
                if (field.startsWith("gsx$")) {
                  return [field.split("$")[1], entry[field].$t];
                }
              })
              .filter(field => field)
              .reduce((field, item) => {
                field[item[0]] = item[1];
                return field;
              }, {});
        });
      },
      random(from, to, float = false) {
        const r = from + Math.random() * (to - from);
        return float ? r : Math.floor(r, 2);
      }
    },
    created() {
      fetch(`https://spreadsheets.google.com/feeds/list/${this.id}/od6/public/values?alt=json`)
          .then(res => res.json())
          .then(res => {
            this.sheets = this.parseSheet(res);
          });
      let root = document.documentElement;
      root.style.setProperty('--hover', this.colors[this.random(0, this.colors.length -1)]);
    },
  }
</script>

<style>
  @import url('https://rsms.me/inter/inter.css');
  :root {
    --hover: rgb(113, 42, 43);
  }
  html {
    font-family: 'Inter', sans-serif;
  }

  @supports (font-variation-settings: normal) {
    html {
      font-family: 'Inter var', sans-serif;
      letter-spacing: -0.02em;
    }
  }
  #app {
    width: 100%;
    min-height: 100vh;
    padding: 2em;
  }
  @media (min-width: 767px) {
    #app {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    main {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  a, a:visited {
    text-decoration: none;
    color: black;
    transition: all .2s ease;
  }
  a:hover, a:focus {
    color: var(--hover);
  }

  html, body {
    margin: 0;
    padding: 0;
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }

  sup {
    opacity: .3;
    text-transform: uppercase;
    font-size: .5em;
    font-weight: 800;
  }

  hr {
    max-width: 20vw;
    width: 100%;
    margin-top: 2rem;
    border: none;
    border-bottom: 1px solid rgba(0,0,0,.1);
    margin-bottom: 2rem;
  }

</style>
