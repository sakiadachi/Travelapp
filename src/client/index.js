import './styles/style.scss'
import './styles/header.scss'
import './styles/form.scss'
import './styles/footer.scss'
import './styles/entry.scss'

import { handleSubmit } from './js/formHandler'
// import { getCount } from './js/formHandler';
// import { getImage } from './js/app.js';

const entryForm = document.getElementById('entry-form');
console.log(entryForm, handleSubmit);
entryForm.addEventListener('submit', handleSubmit);
// document.getElementById('entry-form').addEventListener('submit', getCount)
// document.getElementById('entry-form').addEventListener('submit', getImage)

var doc = document.getElementById('location').value;