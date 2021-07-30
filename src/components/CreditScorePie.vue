<template>
  <div class="credit-pie">
    <canvas id="credit-score-pie-chart"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js";

export default {
  name: "CreditScorePieChart",
  props: {
    creditScore: Array,
  },
  data() {
    return {
      creditScorePieData: {
        type: "pie",
        data: {
          labels: ["Poor", "Fair", "Good", "Very Good", "Exceptional"],
          datasets: [
            {
              label: "Credit Score Pie Chart using FICO's scoring rubric",
              data: this.creditScore,
              backgroundColor: [
                "rgb(233, 76, 61)",
                "rgb(245, 158, 29)",
                "rgb(240, 197, 22)",
                "rgb(72, 187, 112)",
                "rgb(26, 130, 69)",
              ],
              hoverOffset: 4,
            },
          ],
        },
        options: {
          responsive: false,
        },
      },
    };
  },
  mounted() {
    const creditScorePie = document.getElementById("credit-score-pie-chart");
    new Chart(creditScorePie, this.creditScorePieData);
  },
};
</script>

<style scoped>
canvas {
  margin: 0 auto;
}

#credit-score-pie-chart {
  width: 500px;
}
</style>
