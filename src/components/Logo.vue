<template>
  <figure :style="{ maxWidth: w + 'px', maxHeight: h + 'px' }">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 176.78 58.62">
      <g data-name="Layer 2">
        <g data-name="Layer 1">
          <path d="M36.99 58.25h13.72v-1.29H41.6v-27.6h6.71v-1.38H41.6V1.38h9.11V0H36.99v58.25zM168.87 0h-4l-7.73 58.34h1.2l3.88-29h6.61l4 28.89h3.95zm-6.42 28l3.1-23.19h.19L168.68 28zM13.71 27.98H4.6V0H0v58.25h4.6V29.36h9.11v28.89h4.6V0h-4.6v27.98zM76.84 0h-9.2v58.25h4.51V29.36h4.42c1.84.09 4 .55 4.23 4.6v24.66h4v-24c-.19-4.05-2.12-5.24-4.51-5.89v-.18c2.39-.65 4.32-1.84 4.51-5.89.18-5.16.18-10.31 0-15.92C84.57 2.3 82.09 0 76.84 0zm4 23.37c-.19 4.05-2.39 4.51-4.23 4.61h-4.46V1.29h4c2.21.09 4.41 1.29 4.6 4.88.25 6.07.25 11.59.05 17.2zM129.57 1.38h4.51v56.87h4.6V1.38h4.51V0h-13.62v1.38zM101.23 1.38h4.6v56.87h4.51V1.38h4.6V0h-13.71v1.38z"/>
        </g>
      </g>
    </svg>
  </figure>
</template>

<script>
  export default {
    name: 'logo',
    props: ['f', 'w', 'h']
  }
</script>

<style scoped>
  figure {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    margin: 0 0 1.2rem 0;
    padding: 1em .5em;
  }

  figure svg {
    width: 100%;
    height: 100%;
    fill: var(--color)
  }
</style>