document.getElementById('more details').addEventListener('click', function(){
    window.scrollTo({
        top: document.querySelector('.about').offsetTop,
        behaviour: 'smooth'
    })
});