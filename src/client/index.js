import './styles/style.scss'
// import { handleSubmit } from './js/app.js';
import { getPlace } from './js/app.js';

// console.log(getPlace);

document.getElementById('location').addEventListener('submit', getPlace);
// document.getElementById('deperture-date').addEventListener('submit', handleSubmit);

export{
    // handleSubmit,
    getPlace
}