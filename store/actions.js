import backendService from '../services/backend.service';

const dataService = new backendService();

const actions = {
  async getData({ commit }) {
    console.log('in get data');
    let data = {};
    const cities = ['Pasadena, CA'];
    await Promise.all(
      cities.map(async city => {
        console.log(city);
        let url = `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(
          city
        )}&units=imperial&APPID=e2215f02d2e8308870ff32b020df1a13`;
        let res = await dataService.getResource(url);
        data[city] = res;
      })
    );
    console.log('back in action', data);
    commit('setData', data);
  }
};

export default actions;
