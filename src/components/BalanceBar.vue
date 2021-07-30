<template>
  <div class="balance-bar">
    <canvas id="balance-bar-graph"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js";

export default {
  name: "BalanceBarGraph",
  props: {
    balances: Array,
  },
  data() {
    return {
      balanceBarData: {
        type: "bar",
        data: {
          labels: [
            "0-3999",
            "4000-7999",
            "8000-11999",
            "12000-15999",
            "16000-20000",
          ],
          datasets: [
            {
              label: "Balance Ranges in US Dollars",
              data: this.balances,
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(255, 205, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(153, 102, 255, 0.2)",
              ],
              borderColor: [
                "rgb(255, 99, 132)",
                "rgb(255, 205, 86)",
                "rgb(75, 192, 192)",
                "rgb(54, 162, 235)",
                "rgb(153, 102, 255)",
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            yAxes: [
              {
                display: true,
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          responsive: false,
        },
      },
    };
  },
  mounted() {
    const balanceBar = document.getElementById("balance-bar-graph");
    new Chart(balanceBar, this.balanceBarData);
  },
};
</script>

<style scoped>
canvas {
  margin: 0 auto;
}

#balance-bar-graph {
  width: 400px;
}
</style>
