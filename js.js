const burger = document.querySelector('.burger');
const menu = document.querySelector('.hide-menu');
const link = document.querySelector('.header-main__item')


if (burger){
    burger.addEventListener("click", function(e){
        document.body.classList.toggle('lock');
        burger.classList.toggle('active');
        menu.classList.toggle('active');
    });

    // menu.querySelectorAll('.header-main__item').forEach(link => {
    //     link.addEventListener('click', function(e) {
    //         document.body.classList.remove('lock');
    //         menu.classList.remove('active');
    //         burger.classList.remove('active');
    //     })
    // })
    
}
