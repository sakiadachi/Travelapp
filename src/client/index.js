import './styles/style.scss'
import './styles/header.scss'
import './styles/form.scss'
import './styles/footer.scss'
import './styles/entry.scss'


// import { handleSubmit } from './js/app.js';
import { getPlace } from './js/app.js';

const getLocation = document.getElementById('location').addEventListener('submit', getPlace);
// document.getElementById('deperture-date').addEventListener('submit', handleSubmit);

export{
    // handleSubmit,
    getPlace
}