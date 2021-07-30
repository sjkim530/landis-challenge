<template>
  <div class="analytics">
    <h1>Analytics</h1>

    <div class="credit-score-pie-container">
      <h3>Credit Score Pie Chart using FICO's scoring rubric</h3>
      <CreditScorePieChart
        v-if="isLoaded"
        :creditScore="filterCreditScore(accounts)"
      />
    </div>
    <div class="balance-bar-container">
      <h3>Balance Range Bar Graph</h3>
      <BalanceBarGraph v-if="isLoaded" :balances="filterBalances(accounts)" />
    </div>
  </div>
  <div class="mortgage-indicator-pie-container">
    <h3>Accounts Mortgage Loan Indicator</h3>
    <MortgageIndicatorPieChart
      v-if="isLoaded"
      :mortgageScore="filterMortgageScore(accounts)"
    />
  </div>
</template>

<script>
import axios from "axios";
import CreditScorePieChart from "../components/CreditScorePie.vue";
import BalanceBarGraph from "../components/BalanceBar.vue";
import MortgageIndicatorPieChart from "../components/MortgageIndicatorPie.vue";

export default {
  name: "Analytics",
  components: {
    CreditScorePieChart,
    BalanceBarGraph,
    MortgageIndicatorPieChart,
  },
  data() {
    return {
      accounts: [],
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
    // eslint-disable-next-line no-unused-vars
    filterBalances(accounts) {
      const balances = {
        "0-3999": 0,
        "4000-7999": 0,
        "8000-11999": 0,
        "12000-15999": 0,
        "16000-20000": 0,
      };

      accounts = accounts.map((account) => {
        const balance = Number(account.balance);

        if (balance < 4000) {
          balances["0-3999"] += 1;
        } else if (balance < 8000) {
          balances["4000-7999"] += 1;
        } else if (balance < 12000) {
          balances["8000-11999"] += 1;
        } else if (balance < 16000) {
          balances["12000-15999"] += 1;
        } else balances["16000-20000"] += 1;
      });

      return [
        balances["0-3999"],
        balances["4000-7999"],
        balances["8000-11999"],
        balances["12000-15999"],
        balances["16000-20000"],
      ];
    },
    // eslint-disable-next-line no-unused-vars
    filterMortgageScore(accounts) {
      const indicator = {
        "Needs Assistance": 0,
        "Getting Closer": 0,
        "Very Close": 0,
        "Mortgage Approved": 0,
      };
      accounts = accounts.map((account) => {
        let totalScore = 0;
        let balance = Number(account.balance);

        if (account.credit < 580) {
          totalScore += 1;
        } else if (account.credit < 670) {
          totalScore += 2;
        } else if (account.credit < 740) {
          totalScore += 3;
        } else if (account.credit < 800) {
          totalScore += 4;
        } else totalScore += 5;

        if (balance < 4000) {
          totalScore += 1;
        } else if (balance < 8000) {
          totalScore += 2;
        } else if (balance < 12000) {
          totalScore += 3;
        } else if (balance < 16000) {
          totalScore += 4;
        } else totalScore += 5;

        if (totalScore < 5) {
          indicator["Needs Assistance"] += 1;
        } else if (totalScore < 7) {
          indicator["Getting Closer"] += 1;
        } else if (totalScore < 9) {
          indicator["Very Close"] += 1;
        } else indicator["Mortgage Approved"] += 1;
      });
      return [
        indicator["Needs Assistance"],
        indicator["Getting Closer"],
        indicator["Very Close"],
        indicator["Mortgage Approved"],
      ];
    },
  },
  mounted() {
    this.fetchAllAccounts();
  },
};
</script>

<style scoped>
.credit-score-pie-container,
.balance-bar-container,
.mortgage-indicator-pie-container {
  margin-top: 100px;
}
</style>
