import './styles/style.scss'
import './styles/header.scss'
import './styles/form.scss'
import './styles/footer.scss'
import './styles/entry.scss'

import { handleSubmit } from './js/formHandler'
console.log("hello")

document.getElementById('entry-form').addEventListener('submit', handleSubmit)

var doc = document.getElementById('location').value;