let sheos = document.querySelectorAll('.shoes');
let index=0;
function next(){
    sheos[index].classList.remove('active');
    index = (index + 1)%sheos.length;
    sheos[index].classList.add('active');
}

function prev(){
    sheos[index].classList.remove('active');
    index = (index - 1 + sheos.length)%sheos.length;
    sheos[index].classList.add('active');
}

window.addEventListener("scroll", function () {
    var nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0);
})

window.addEventListener('scroll',function(){
    var scroll = document.querySelector('.scrollTop'); 
    scroll.classList.toggle("active", window.scrollY > 800)
})
