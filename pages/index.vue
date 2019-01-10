<template>
  <section class="container">
    <Header/>
    <Body/>
  </section>
</template>

<script>
import Header from "~/components/Header.vue";
import Body from "~/components/Body.vue";
import backendService from "../services/backend.service.js";

const service = new backendService();

export default {
  components: {
    Header,
    Body
  },
  async fetch({ store }) {
    let cities = ["Lancaster, CA", "Pasadena, CA", "Riverside, CA"];
    const data = {};
    for (let city of cities) {
      let res = await service.getResource(city);
      data[city] = res;
    }
    store.commit("setData", data);
  }
};
</script>

<style lang='scss'>
.container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;

  header {
  }
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
