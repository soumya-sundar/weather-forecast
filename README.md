## Weather Forecast App

This App calls Open Weather Map's API for 5 days weather forecast and displays them in React components.

## Installations

- Install latest version of Node.js
- Clone or download this Git repository.
- In the project root directory run command - 'npm install'

## Build and run the App
### Run the following commands
- npm build
- npm start
- You should be able to see the app in localhost:3000

Refer to Weather_forecast_snapshot.JPEG file.

## Tests
- Run tests using command  - npm test


## App Layout Design
* The layout of this app is inspired from existing news weather pages and also Open Weather Map's Widgets. After    collecting user inputs the app calls the API with the given inputs. The API return is processed and displayed in two main React components which are ForeCast Summary and DisplayHourlyForecast.

* Summary section - Displays the location, day, date, temperature, wind, pressure, humidity etc. The details displayed here are for the nearest time for the current day. If other day buttons are clicked it would display 00:00 hour details of that particular day.

* Hourly Forecast section - Open Weather API returns forecast details in 3 hour basis spanning over 5 or 6 days. Based on the API hourly returns the data are displayed for every day. Header buttons could be clicked to view that particular day's hourly forecast and summary details.


## Limitations

* User search inputs are restricted to certain patterns. The API returns are consistent for town names, city names, post codes along with country codes (i.e., us,in). 

* API returns accurate values for town names or city names provided it is not present in US. If we dont specify the country code and a similar town name is in US then it will default the search to US. The same applies to city name.

* For postcode relates searches Open Weather API team firmly recommends to use country code for accurate results.

* API doesn't return data for UK postal code search even along with country code such as uk or gb.

* The App is not fully responsive to different screen widths. It displays fine when width is reduced until 850px.

* Temperatures are displayed in degrees Centigrade.


## Improvements

* Make the web page fully responsive using media sizes.

* Include a toggle button for the user to select the temperature metric(Centigrade or Farenheit)

* Improve the styling throughout the page especially in hourly forecast columns to accomodate more details using animations.

* Include eslint corrections throughout the code.

* Use module bundler such as Webpack with plugin support.

* Use location detectors to display the current location forecast on page loads.






