<template>
  <div>
      <a :style="{ color: color }" v-for="i in contacts" :href="i.url"><font-awesome-icon :icon="i.fa" /><span>{{i.txt}}</span></a>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  props: ['contacts', 'color']
}
</script>

<style scoped>
div {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
a {
  text-decoration: none;
  padding: 1em .5em;
}
a span {
  padding: 0 .5em;
}
</style>
