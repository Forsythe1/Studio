document.querySelector('.nav__toggle').addEventListener('click', (event) => {
    document.querySelector('.section-header-menu').classList.toggle('section-header-menu--active');
    document.querySelector('.section-header-icons').classList.toggle('section-header-icons--active');
});

function clickButton(picture) {
    let buttonGallery = document.getElementById("galleryPhoto");
    buttonGallery.src = picture.src;
}


const swiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
});


const getId = (link) => link.getAttribute('href').replace('#', '');

document.querySelector('.section-header-menu-links').addEventListener('click', (e) => {
    if (e.target.classList.contains('nav-list__item-link')) {
        e.preventDefault();


        window.scrollTo ({
            top: document.getElementById(getId(e.target)).offsetTop -120,
            behavior: 'smooth',
        });
    }
});
