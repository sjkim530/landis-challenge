<template>
  <div class="account-card-container">
    <div class="account-card" v-for="account in accounts" :key="account.id">
      <div class="account-card-left">
        <img v-bind:src="account.picture" />
        <h1>{{ account.name_first }}</h1>
        <h1>{{ account.name_last }}</h1>
      </div>
      <div class="account-card-right">
        <ul>
          <li>Email: {{ account.email }}</li>
          <li>Phone: {{ account.phone }}</li>
          <li>Address: {{ account.address }}</li>
          <li>Credit: {{ account.credit }}</li>
          <li>Balance: {{ account.balance }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      accounts: [],
    };
  },
  methods: {
    async fetchAllAccounts() {
      try {
        const { data } = await axios.get("/api/accounts");
        this.accounts = data;
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    this.fetchAllAccounts();
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
  padding: 10px 20px 10px 20px;
}

.account-card-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.account-card img {
  top: 25px;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-bottom: 10px;
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
  align-items: flex-start;
}

.account-card-right ul {
  list-style-type: none;
}
</style>
