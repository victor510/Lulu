const menuBtn = document.getElementById('menu_btn')
const btn = document.getElementById('btn');
const button = document.querySelector('button')

const menuBtnOpen = false;

menuBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if (!menuBtnOpen) {
        menuBtn.classList.toggle('open');
        menuBtnOpen = true;
    } else {
        // menuBtn.className = '.menu_btn'
        menuBtn.classList.remove('.open');
        menuBtnOpen = false;
    }
})

btn.addEventListener('click', () =>{
    btn.className = 'form_btn jello-vertical'

    setTimeout(function(){
        btn.className = 'form_btn'
    },1000);
})

button.addEventListener('click', () =>{
    button.className = 'button animate'
})