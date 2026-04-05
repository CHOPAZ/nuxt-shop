<script setup lang="ts">
import Footer from "~/components/Footer.vue";
import Header from "~/components/Header.vue";
</script>

<template>
  <div>
    <Header />
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>

<style scoped>
div {
  margin: 0 auto;
  max-width: 1248px;
}

main {
  margin-top: 30px;
  margin-bottom: 30px;
}
</style>
