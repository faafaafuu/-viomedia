import card from './card.js'

// api unsplash список коллекций
const url = 'https://api.unsplash.com/photos/?client_id=1938851bc1cf2d902ca81a6ac00869b941592f3d4399ac430e8a65e014b75f62'

// запрос данных
export default () => {
    fetch(url)
        .then(response => {
                if(response.status >= 400) {
                    return Promise.reject()
                } else {
                    return response.json()
                }
        })
        // пробросил полученные данные с unsplash.com в card
        .then(unsplash => {
           card(unsplash)
        })
        .catch((err) => console.error('Something goes wrong'))
}