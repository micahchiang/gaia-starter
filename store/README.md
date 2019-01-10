# Forecast

## Why

This is an open-ended creative programming problem designed to give you a chance to show off your web development skills.

## What

Imagine it's Thursday evening and you're trying to decide which of your **three** favorite parks or wilderness areas to visit this weekend.

Build a tool to help you decide where to go by comparing their **precipitation forecasts**.

## How

You will work on your own laptop in whatever development environment you’d like.

For the sake of time, I recommend using the provided scaffolding:

- a simplified version of [`react-create-app`](https://www.github.com/facebook/create-react-app)
- a function which fetches the 5 day weather forecast for a given city using [OpenWeatherMap](https://openweathermap.org/forecast5)

You should be able to get everything running with:

```
npm install
npm start
```

## Hints

- Don't worry about making the tool configurable. Feel free to hardcode everything other than the forecasts.
- OpenWeatherMap provides forecasts by "city." You'll need to find the nearest "city" to each park. You may want to use the [search engine](https://openweathermap.org/find?q=) or [weather map](https://openweathermap.org/weathermap?basemap=map&cities=true) for this.
- Documentation for the relevant OpenWeatherMap API is at https://openweathermap.org/forecast5
- You don't have much time, so keep it simple!
