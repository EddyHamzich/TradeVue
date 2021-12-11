<script>
import MyChart from './components/MyChart.vue'
import TradesList from './components/TradesList.vue'

export default {
  name: 'app',
  components: {
    MyChart,
    TradesList
  }
}
</script>

<template>
  <div id="app" class="app">
    <div class="chart-cover"></div>
    <my-chart class="chart"/>
    <trades-list />
  </div>
</template>

<style>
  .app {
    display: flex;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
  }

  .chart {
    width: 50vw;
    height: 100vh;
  }

  .chart-cover {
    position: absolute;
    top: 0;
    left: 0;
    width: 50vw;
    height: 100vh;
    z-index: 999;
  }

  /* CSS Reset below */

  @import url('https://fonts.googleapis.com/css2?family=Barlow&family=Barlow+Condensed:wght@100&display=swap');

  *,
  *::before,
  *::after {
    font-family: Barlow, sans-serif;
    box-sizing: border-box;
    margin: 0;
    margin-block: 0;
    margin-inline: 0;
    padding-inline: 0;
  }

  /* Remove default margin */
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  figure,
  blockquote,
  dl,
  dd,
  ul {
    margin: 0;
  }

  /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
  ul[role='list'],
  ol[role='list'] {
    list-style: none;
  }

  /* Set core root defaults */
  html:focus-within {
    scroll-behavior: smooth;
  }

  /* Set core body defaults */
  body {
    min-height: 100vh;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
  }

  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  /* Make images easier to work with */
  img,
  picture {
    max-width: 100%;
    display: block;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }
</style>