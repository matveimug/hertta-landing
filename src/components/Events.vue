<template>
  <section v-if="data.length >= 1 && data[0].syndmus">
    <a v-for="(item, index) in data" :key="index" :href="item.link">
      <h1>{{ dateme(item.kuup2ev).weekday }}</h1>
      <div>
        <label>
          {{ dateme(item.kuup2ev).day }}.
          {{ dateme(item.kuup2ev).month }},
          {{ dateme(item.kuup2ev).year }}
        </label>
        <article>
          {{ item.syndmus }}
        </article>
      </div>
    </a>
  </section>
</template>

<script>
  export default {
    name: 'Events',
    props: ['data'],
    methods: {
      dateme(date) {
        const datejs = new Date(date);
        const monthNames = [
          "jaanuar", "veebruar", "märts",
          "aprill", "mai", "juuni", "juuli",
          "august", "september", "oktoober",
          "november", "detsember"
        ];
        const weekdays = [
          "P", "E", "T", "K", "N", "R", "L"
        ];

        const day = datejs.getDate();
        const weekday = datejs.getDay();
        const monthIndex = datejs.getMonth();
        const year = datejs.getFullYear();

        return {
          day: day,
          weekday: weekdays[weekday],
          month: monthNames[monthIndex],
          year: year
        };
      }
    }
  }
</script>

<style scoped>
  a, a:visited {
    padding: 1em .5em 1em .3em;
    display: flex;
    align-items: center;
  }
  h1 {
    font-size: 4em;
    margin: 0 0.3em 0 0;
    width: 0.7em;
  }
  label {
    cursor: pointer;
    font-size: 0.7em;
    letter-spacing: -0.02em;
    font-weight: 600;
    text-transform: uppercase;
  }
  article {
    letter-spacing: -0.02em;
    font-weight: 600;
    padding-bottom: 0.3em;
  }
</style>
