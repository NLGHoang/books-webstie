searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
};

let loginForm = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active');
};

document.querySelector('#close-login-btn').onclick = () => {
    loginForm.classList.remove('active');
};

// scroll spy -- cuộn tới đâu menu sáng tới đó

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.header .header-2 .navbar a');

window.onscroll = () =>{

    searchForm.classList.remove('active');


    if(window.scrollY > 80){
        document.querySelector('.header .header-2').classList.add('active');
    }else{
        document.querySelector('.header .header-2').classList.remove('active');
    }

    section.forEach(sec =>{
      let top = window.scrollY;
      let offset = sec.offsetTop - 200;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');

      if(top >= offset && top < offset + height){
          navLinks.forEach(link => {
              link.classList.remove('active');
              document.querySelector('.header .header-2 .navbar a[href*='+id+']').classList.add('active');
          });
        }
    });

};

window.onload = () =>{

    if(window.scrollY > 80){
        document.querySelector('.header .header-2').classList.add('active');
    }else{
        document.querySelector('.header .header-2').classList.remove('active');

    }
    fadeOut();
};

// loader

function loader(){
  document.querySelector('.loader-container').classList.add('active');
}

function fadeOut(){
  setTimeout(loader,4000);
}

// slider home

var swiper = new Swiper(".books-slider", {
    loop:true,
    centeredSlides: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
      },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

  // swiper featured-slider

var swiper = new Swiper(".featured-slider", {
    spaceBetween:10,
    loop:true,
    centeredSlides: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      450: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  });

// arrivals slider

var swiper = new Swiper(".arrivals-slider", {
    spaceBetween:10,
    loop:true,
    centeredSlides: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
      },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

  // reviews

var swiper = new Swiper(".reviews-slider", {
    spaceBetween:10,
    grabCursor:true,
    loop:true,
    centeredSlides: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
      },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

// blogs

var swiper = new Swiper(".blog-slider", {
    spaceBetween:10,
    // grabCursor:true,
    loop:true,
    centeredSlides: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
      },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });