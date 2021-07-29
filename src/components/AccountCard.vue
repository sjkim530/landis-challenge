<template>
  <div class="account-card-container">
    <div class="account-card" v-for="account in accounts" :key="account.id">
      <div class="account-card-left">
        <img v-bind:src="account.picture" />
        <h1>{{ account.name_first }}</h1>
        <h1>{{ account.name_last }}</h1>
      </div>

      <div class="account-card-right">
        <div class="indicator">
          <p>Mortgage Indicator:</p>
          <h3
            v-bind:style="{
              color: indicatorColor(calculateMortgageScore(account)),
            }"
          >
            {{ calculateMortgageScore(account) }}
          </h3>
        </div>
        <ul>
          <li>Email: {{ account.email }}</li>
          <li>Phone: {{ account.phone }}</li>
          <li>Address: {{ account.address }}</li>
          <li>Credit Score: {{ account.credit }}</li>
          <li>Balance: ${{ account.balance }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AccountCard",
  props: {
    accounts: Array,
  },

  methods: {
    calculateMortgageScore(account) {
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
        return "Needs Assistance";
      } else if (totalScore < 7) {
        return "Getting Closer";
      } else if (totalScore < 9) {
        return "Very Close";
      } else return "Mortgage Approved";
    },
    indicatorColor(status) {
      if (status === "Needs Assistance") {
        return "red";
      } else if (status === "Getting Closer") {
        return "orange";
      } else if (status === "Very Close") {
        return "yellow";
      } else return "green";
    },
  },
};
</script>

<style scoped>
.account-card {
  border-radius: 25px;
  box-shadow: 0px 12px 20px rgba(34, 35, 58, 0.5);
  width: 450px;
  height: 250px;
  background-color: rgba(25, 37, 104, 0.9);
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 25px;
  padding: 10px 20px 10px 25px;
}

.account-card-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}

.account-card img {
  top: 25px;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-bottom: 10px;
  border: 2px solid white;
}

.account-card h1 {
  margin: 0;
}

.account-card-left {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.account-card-right {
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 35px;
}

.account-card-right ul {
  /* list-style-type: none; */
  padding: 0 0 0 20px;
}

.indicator {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.indicator h3 {
  margin: 0;
}

.indicator-light {
  border-radius: 50%;
  width: 20px;
  height: 20px;
}
</style>
