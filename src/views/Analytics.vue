<template>
  <div class="analytics">
    <h1>Analytics</h1>

    <div>
      <h3>Credit Score Pie Chart using FICO's scoring rubric</h3>
      <CreditScorePieChart
        v-if="isLoaded"
        :creditScore="this.filterCreditScore(this.accounts)"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import CreditScorePieChart from "../components/CreditScorePieChart.vue";

export default {
  name: "Analytics",
  components: {
    CreditScorePieChart,
  },
  data() {
    return {
      accounts: [],
      creditScore: [],
      isLoaded: false,
    };
  },
  methods: {
    async fetchAllAccounts() {
      this.isLoaded = false;
      try {
        const { data } = await axios.get("/api/accounts");
        this.accounts = data;
        this.isLoaded = true;
      } catch (error) {
        console.log(error);
      }
    },
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
    this.fetchAllAccounts();
  },
};
</script>
