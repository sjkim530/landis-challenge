<template>
  <div class="accounts">
    <h1>Accounts</h1>
    <AccountCard :accounts="accounts" />
  </div>
</template>

<script>
import axios from "axios";
import AccountCard from "../components/AccountCard.vue";

export default {
  name: "Accounts",
  components: {
    AccountCard,
  },
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
