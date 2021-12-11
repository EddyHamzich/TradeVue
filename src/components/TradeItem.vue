<script>

import { formatCash, prettyDate } from "../util";

export default {
  props: ["trade"],
  methods: {
    formatCash: formatCash,
    prettyDate: prettyDate
  }
}

</script>

<template>
  <div
    class="trade-item"
    v-bind:style="{
      paddingTop: ((+trade.q)*(+trade.p) / 10000) + 'px',
      paddingBottom: ((+trade.q)*(+trade.p) / 10000) + 'px',
      background: trade.m ? 'black' : 'white',
      color: !trade.m ? 'black' : 'white',
      borderBottom: !trade.m ? '2px solid black' : '2px solid white',
    }"
  >
    <div>{{ "$" + this.formatCash(+(trade.q * trade.p).toFixed(0)) }}</div>
    <div>{{ "$" + (+(+trade.p).toFixed(0)).toLocaleString() }}</div>
    <div>{{ this.prettyDate(trade.T) }}</div>
  </div>
</template>

<style>
  .trade-item {
    position: relative;
    left: -0.02vw;
    width: 100%;
    min-height: 1rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  .trade-item div {
    width: 15%;
  }
</style>