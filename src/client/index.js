import './styles/style.scss'
import { handleSubmit } from './js/app.js';
import { getWeather } from './js/app.js';

console.log(getWeather);

document.getElementById('location').addEventListener('submit', getWeather);
document.getElementById('deperture-date').addEventListener('submit', handleSubmit);

export{
    handleSubmit,
    getWeather
}