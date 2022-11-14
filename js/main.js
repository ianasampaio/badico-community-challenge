const toogles = document.querySelectorAll('.toogle');

toogles.forEach(toogle => {
    toogle.addEventListener('click', () => {
        toogle.classList.toggle('open');
    })
})