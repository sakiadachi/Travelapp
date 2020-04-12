# Travel Planning App Project
Building a travel planner app that shows you a location's picture, weather forecast and remaining days until a trip. Main task here was to set up webpack for an app and working with APIs through server side code and updating UI with the data from three different APIs. [Udacity Frontend developer nanodegree course](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd0011)

## API
This application gets information from three APIs.
- [GeoNames API](https://www.geonames.org/export/web-services.html) to get Latitude and Longitude of a city name submitted on the app.
- [weatherbit API](https://www.weatherbit.io/) to get weather forecast based on the data from GeoNames API and date submitted on the app.
- [pixabay API](https://pixabay.com/api/docs/) to introduce a picture of a city.

## Webpack scripts
1. "npm install" to install the dependencies.
2. "npm start" to run server.
3. "npm run build-dev" to open localhost:8080 to see the live app.
4. "npm run build-prod" for production.
For testing: "npm test" runs JEST.
