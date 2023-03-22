const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')

open.addEventListener('click', () => {
     container.classList.add('show-nav')           //! adding 'show-nav' class to 'container' class.
    
})

close.addEventListener('click', () => { 
    container.classList.remove('show-nav')         //! removing 'show-nav' class from 'container' class.
})

