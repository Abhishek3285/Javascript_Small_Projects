const btn = document.querySelector('.getnews')
const card = document.querySelector('.card')
const showCard = document.querySelector('.show-card')
const closeIcon = document.querySelector('.close-icon')



btn.addEventListener('click', () => {
    card.classList.add('hide-card');
    showCard.classList.add('open')
})
closeIcon.addEventListener('click', () => {
    card.classList.remove('hide-card');
    showCard.classList.remove('open')
})