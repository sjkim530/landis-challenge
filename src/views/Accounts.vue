<template>
  <div class="accounts">
    <h1>This is an accounts page</h1>
    <AccountCard />
  </div>
</template>

<script>
import AccountCard from "../components/AccountCard.vue";

export default {
  name: "Accounts",
  components: {
    AccountCard,
  },
};
</script>
