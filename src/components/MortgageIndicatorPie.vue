<template>
  <div class="mortgage-pie">
    <canvas id="mortgage-indicator-pie-chart"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js";

export default {
  name: "MortgageIndicatorPieChart",
  props: {
    mortgageScore: Array,
  },
  data() {
    return {
      mortgageIndicatorPieData: {
        type: "pie",
        data: {
          labels: [
            "Needs Assistance",
            "Getting Closer",
            "Very Close",
            "Mortgage Approved",
          ],
          datasets: [
            {
              label: "How close to getting a mortgage loan indicator",
              data: this.mortgageScore,
              backgroundColor: ["red", "orange", "yellow", "green"],
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
    const mortgageIndicatorPie = document.getElementById(
      "mortgage-indicator-pie-chart"
    );
    new Chart(mortgageIndicatorPie, this.mortgageIndicatorPieData);
  },
};
</script>

<style scoped>
canvas {
  margin: 0 auto;
}

#mortgage-indicator-pie-chart {
  width: 500px;
}
</style>
