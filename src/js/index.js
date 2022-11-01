const compartilhar = document.querySelector('.btn-share')
const share = document.querySelector('.box')

compartilhar.addEventListener('click', () => {
    if(share.classList.contains('mostrar')){
        share.classList.remove('mostrar')
    } else{
        share.classList.add('mostrar')
    }
})