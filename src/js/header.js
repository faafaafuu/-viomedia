// меняет кнопку на хэдэр
export default (btn) => {
    const wrap = document.querySelector('.btn_wrap')
    const header = "Pictures";
    
    btn.style.display = 'none';

    return wrap.innerHTML = header.toUpperCase()
}