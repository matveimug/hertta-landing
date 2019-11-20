<template>
  <section>
    <a v-for="(i, index) in contacts" :key="index" :href="i.url"><font-awesome-icon :icon="i.fa" /><span v-html="i.txt"></span></a>
  </section>
</template>

<script>
  export default {
    name: 'Contact',
    props: ['contacts']
  }
</script>

<style scoped>
  @media (min-width: 767px) {
    section {
      display: flex;
      justify-content: center;
      align-items: flex-end;
      flex-wrap: wrap;
    }
  }

  a {
    display: block;
    padding: 1em .5em;
    font-size: small;
  }
  a span {
    padding: 0 .5em;
  }
</style>
