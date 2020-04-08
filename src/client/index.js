import './styles/style.scss'
import './styles/header.scss'
import './styles/form.scss'
import './styles/footer.scss'
import './styles/entry.scss'
import 'bootstrap'
import 'bootstrap/js/dist/util';
import 'bootstrap/js/dist/dropdown';


import { handleSubmit } from './js/formHandler'

const entryForm = document.getElementById('entry-form');
console.log(entryForm, handleSubmit);
entryForm.addEventListener('submit', handleSubmit);


var doc = document.getElementById('location').value;