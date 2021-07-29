<template>
  <div>
    <h1>Account Card</h1>
  </div>
  <div v-for="account in accounts" :key="account.id">
    <h1>{{ account.name_first }} {{ account.name_last }}</h1>
    <p>{{ account.email }}</p>
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
