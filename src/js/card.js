import checkModal from './modal.js'

// наполняет handlebars card
export default (jsn) => {
    const res = document.querySelector('.result');
    const template = document.querySelector('#headerTemplate').textContent;
    
    // передает данные в шаблон
    const render = Handlebars.compile(template); 
    let html = render(jsn)
    res.innerHTML = html;

    // массив карточек и модыльных окон  
    const read_more = document.querySelectorAll('.read_more')
    const mods = document.querySelectorAll('._modal')

    console.log(jsn)
    makingId(read_more);
    makingId(mods);
    checkModal(mods);
    
    // присваиваю id кнопке read_more и модальным окнам для checkModal
    function makingId (elements) {
        // запуcк цикла после прогрузки card
        setTimeout(() => {
            for(let i = 0; i < elements.length; i++){
                if(elements) {
                    elements[i].setAttribute("id", i);
                }
            }
        },0)

        return elements;
    }
}