<script>
import TradeItem from './TradeItem.vue'

const updateInterval = 20

export default {
  components: { TradeItem },
  data() {
    return {
      tradesData: [],
      last: Date.now()
    }
  },
  methods: {
    getRealtimeData() {
      const ws = new WebSocket("wss://fstream.binance.com/ws/btcusdt@aggTrade")
      ws.onmessage = (msg) => {
        if(Date.now() - this.last >= updateInterval) {
          let parsed = JSON.parse(msg.data)
          if(parsed.q > 0.1) {
            this.tradesData.unshift(parsed)
          }
          this.last = Date.now()
        }
      }
    }
  },
  created() {
    this.getRealtimeData()
  }
}
</script>

<template>
  <ul class="trade-list">
    <li v-for="trade in tradesData" :key="trade.a">
      <trade-item :trade="trade" />
    </li>
  </ul>
</template>

<style scoped>
  .trade-list {
    width: 50%;
    list-style: none;
    border-left: 2px solid black;
  }
  .trade-list li {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>