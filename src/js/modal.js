export default function checkModal(mod) {
  // toggle на модальное окно через делегирование
  document.addEventListener('click', (e) => {
			for(let i = 0; i < mod.length; i++) {
					if(e.target.id == mod[i].id){
							mod[i].style.display = 'block'
					}
					if(e.target.classList.contains('close')){
							mod[i].style.display = 'none'
					}
					if(e.target.classList.contains('_modal')) {
							mod[i].style.display = 'none'
					}
			}
	})
} 