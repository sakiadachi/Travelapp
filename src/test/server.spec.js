import { getNewEntry } from '../server/server.js';


describe("getNewEntry", () => {
  test("it returns the correct entry", () => {


    const expected = {
      forecast: "sunny",
      lowTemp: "5",
      maxTemp: "10",
      cityName: "Paris",
      forecastDate: "2020-04-12",
      picture: "https://pixabay.com/get/53e3d5434f57b10ff3d8992cc62d31771439dfe04e50744173297dd19e44c0_640.jpg"
    }
    const days = 0;
    const weather = {data:[{weather:{description:'sunny'},low_temp:'5', max_temp:'10', datetime: '2020-04-12'}],city_name:'Paris'};
    const placePicFirstResult = {webformatURL:'https://pixabay.com/get/53e3d5434f57b10ff3d8992cc62d31771439dfe04e50744173297dd19e44c0_640.jpg'};

    expect(getNewEntry(days, weather, placePicFirstResult)).toStrictEqual(expected)
  });
});
