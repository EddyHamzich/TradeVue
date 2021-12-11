<script>
import { Line } from 'vue-chartjs'
import 'chartjs-plugin-streaming'

const updateInterval = 300

export default {
  extends: Line,
  data() {
    return {
      tickData: [],
      last: Date.now(),
    }
  },
  methods: {
    getRealtimeData() {
      const ws = new WebSocket("wss://fstream.binance.com/ws/btcusdt@aggTrade")
      ws.onmessage = (msg) => {
        if(Date.now() - this.last < updateInterval) {
          return
        }
        this.last = Date.now()
        let parsed = JSON.parse(msg.data)
        let time = Date.now()
        let price = +(Number(parsed.p).toFixed(0))
        if(this.tickData.length === 0) {
          this.tickData.push({
            x: time,
            y: price - price * 0.0005
          })
          this.tickData.push({
            x: time,
            y: price
          })
        }
        else if(this.tickData.length > 0) {
          this.tickData.push({
            x: time,
            y: price
          })
        }
      }
      ws.onopen = () => {
        setInterval(() => {
          if(this.tickData.length) {
            let prev = JSON.stringify(this.tickData[this.tickData.length-1])
            let copy = JSON.parse(prev)
            copy.x = Date.now()
            this.tickData.push(copy)
          }
        }, 100)
      }
    }
  },
  created() {
    this.getRealtimeData()
  },
  mounted () {
    this.renderChart(
    {
      datasets: [{
        label: 'BTCUSDT',
        data: [],
        borderColor: "black",
        borderWidth: 2,
        pointRadius: 0,
        fill: false,
        spanGaps: true,
      }]
    },
    {
      responsive: true,
      maintainAspectRatio: false,
      animation: false,
      scales: {
        xAxes: [{
          type: 'realtime',
          realtime: {
            duration: 1000 * 45, // chart should show last n seconds (by show I mean contain in width)
            delay: 0,
            frameRate: 60,
            refresh: updateInterval,
            pause: false,
            ttl: undefined,
            onRefresh: chart => {
              chart.data.datasets[0].data = this.tickData
            }
          },
          ticks: {
            fontFamily: "Barlow",
          }
        }],
        yAxes: [{
          position: "right",
          ticks: {
            fontFamily: "Barlow",
          }
        }]
      },
      tooltips: {
        enabled: false
      },
      hover: {
        mode: null
      },
      legend: {
        labels: {
          fontColor: 'black',
          fontFamily: "Barlow"
        }
      }
    })
  }
}
</script>