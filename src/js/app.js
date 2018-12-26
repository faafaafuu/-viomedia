import fetch from './api.js'
import header from './header.js'

export default () => {
  const load_button = document.querySelector('.btn-default')
    // запрос на сервер по клику
    load_button.addEventListener('click', () => {
      fetch();

      header(load_button)
    })
}