import './styles/reset.scss'
import './styles/style.scss'
import './styles/header.scss'
import './styles/form.scss'
import './styles/entry.scss'

import { handleSubmit } from './js/formHandler'

const entryForm = document.getElementById('entry-form');

entryForm.addEventListener('submit', handleSubmit);
