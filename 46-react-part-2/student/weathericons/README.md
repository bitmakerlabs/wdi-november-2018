# Creating a WeatherIcons Component

This lab is meant to provide additional practice creating reusable React Components.

In `index.html` you will find five weather elements that generate the output you are seeing now.

Perform the following to complete the lab:

  - Create an array called `weatherData` that will contain five objects with the following properties:  `img`, `conditions` and `time`.
  - Populate those objects based on those values assigned in the HTML.
  - Create a `WeatherIcons`  component and pass it the `weatherData` array as `props`.
  - The `WeatherIcons` component will then render five `weather` divs based on properties of the objects in the `weatherData` array.
