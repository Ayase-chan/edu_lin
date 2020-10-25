<template>
  <div id="app">
    <First></First>
    <Second></Second>
  </div>
</template>

<script>
import First from "./components/First";
import Second from "./components/Second";

export default {
  name: 'App',
  components: {
    First: First,
    Second: Second,
  }
}
</script>

<style>

</style>
