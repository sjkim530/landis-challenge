<template>
  <div class="credit-pie">
    <canvas id="credit-score-pie-chart"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js";
// import { fetchAndFilterCreditScore } from "../CreditScorePieData";

export default {
  name: "CreditScorePieChart",
  props: {
    creditScore: Array,
  },
  data() {
    console.log(this.creditScore);
    return {
      componentKey: 0,
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
      },
    };
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    filterCreditScore(accounts) {
      const credit = {
        Poor: 0,
        Fair: 0,
        Good: 0,
        "Very Good": 0,
        Exceptional: 0,
      };
      accounts = accounts.map((account) => {
        if (account.credit < 580) {
          credit["Poor"] += 1;
        } else if (account.credit < 670) {
          credit["Fair"] += 1;
        } else if (account.credit < 740) {
          credit["Good"] += 1;
        } else if (account.credit < 800) {
          credit["Very Good"] += 1;
        } else credit["Exceptional"] += 1;
      });

      return [
        credit["Poor"],
        credit["Fair"],
        credit["Good"],
        credit["Very Good"],
        credit["Exceptional"],
      ];
    },
  },
  mounted() {
    const creditScorePie = document.getElementById("credit-score-pie-chart");
    new Chart(creditScorePie, this.creditScorePieData);
  },
};
</script>

<style></style>
