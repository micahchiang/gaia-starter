<template>
  <main>
    <section class="forecast__container" v-for="(city, index) in cities" :key="index">
      <h2>{{index}}</h2>
      <div class="forecast__container-box-container">
        <div class="forecast__container-box" v-for="(day, index) in city" :key="index">
          <h3>{{day.day}}</h3>
          <p>Prediction: {{day.weather[0].description}}</p>
          <p>Temperature at Noon: {{Math.ceil(day.main.temp_max)}}F</p>
          <p v-if="day.snow['3h']">Snow forecasted: {{Math.ceil(day.snow['3h'])}}mm.</p>
          <p v-if="day.rain && day.rain['3h']">Rain forecasted: {{Math.ceil(day.rain['3h'])}}mm.</p>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      cities: state => state.cities
    })
  }
};
</script>

<style lang="scss" scoped>
main {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: flex;
  flex-direction: column;
  font-weight: 300;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 1rem;
  color: #ffffff;
  letter-spacing: 1px;

  .forecast__container {
    background-color: rgba(#35495e, 0.6);
    border-radius: 3px;
    width: 100%;
    max-width: 800px;
    margin: 1rem 0;
    padding: 2rem 1rem;

    @media screen and (max-width: 800px) {
      width: 100%;
    }

    &-box-container {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-column-gap: 1rem;
      padding: 2rem 0;

      @media screen and (max-width: 800px) {
        grid-template-columns: 1fr;
        grid-row-gap: 1rem;
      }
    }

    &-box {
      text-align: left;
      h3 {
        font-weight: 600;
      }
      p {
        font-size: 0.9rem;
        margin: 0.5rem 0;
      }
    }
  }
}
</style>
