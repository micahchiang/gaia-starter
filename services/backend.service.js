import axios from 'axios';

export default class backendService {
  constructor() {
    this.days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ];
  }

  async getResource(city) {
    try {
      let url = `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(
        city
      )}&units=imperial&appid=634ab40d1fd51482f9e8d2891c5e45a0`;
      let res = await axios.get(url);
      let weather = res.data.list
        .filter(el => {
          // take the data for midday on each day.
          return el.dt_txt.indexOf('12:00:00') > -1;
        })
        .filter(el => {
          // take only the weekend days (friday, saturday, sunday)
          let day = new Date(el.dt_txt).getDay();
          el['day'] = this.days[day];
          return day === 0 || day > 4;
        });
      return weather;
    } catch (e) {
      console.log(e);
    }
  }
}
