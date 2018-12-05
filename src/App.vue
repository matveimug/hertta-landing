<template>
  <div id="app">
    <Logo :f="color" :w="500" :h="250"/>
    <Contact :contacts="contacts" :color="color"/>
  </div>
</template>

<script>
    import Contact from './components/Contact.vue'
    import Logo from './components/Logo.vue'

    export default {
        name: 'app',
        components: {
            Contact, Logo
        },
        data: function () {
            return {
                color: 'black',
                contacts: [
                    {fa: ['fas', 'envelope'], txt: 'contact@hertta.ee', url: 'mailto:contact@hertta.ee'},
                    {fa: ['fab', 'instagram'], txt: 'herttaknitwear', url: 'https://www.instagram.com/herttaknitwear/'},
                    {fa: ['fab', 'facebook-square'], txt: 'atelierhertta', url: 'https://www.facebook.com/atelierhertta'},
                ]
            }
        },
    }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    padding: 2em;
  }
  html, body {
    margin: 0;
    padding: 0;
  }
  *, *:before, *:after {
    box-sizing: border-box;
  }
</style>
