const bar = document.getElementById('ber');
const nav = document.getElementById('navber'); 
const close = document.getElementById('close'); 

if(ber){
    ber.addEventListener('click',() => {
        nav.classList.add('active');
    })
}
if(close){
    close.addEventListener('click',() => {
        nav.classList.remove('active');
    })
}