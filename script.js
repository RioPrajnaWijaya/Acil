let menu = document.querySelector('#menu-bar');
let bar = document.querySelector('.bar');
let heart = document.querySelector('#love');
let school = document.querySelector('#school');
let musics = document.querySelector('#music');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    bar.classList.toggle('active');
}

heart.onclick = () => {
    alert("Thanks For Loving Our Website. Have Fun ^_^");
}

school.onclick = () => {
    alert("Do Your Best ❤");
}

musics.onclick = () => {
    alert("Free Music to Accompany Your Study");
}

let section = document.querySelectorAll('section');
let barLink = document.querySelectorAll('header .bar a');

const search = document.querySelector('.search-input');
const input = search.querySelector('input');
const suggestion = search.querySelector('.auto-complete');

input.onkeyup = (e) => {
    let userData = e.target.value;
    let emptyArray = [];
    if (userData) {
        emptyArray = suggestions.filter((data) => {
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map((data) => {
            return data = '<li>'+ data + '</li>';
        });
        console.log(emptyArray);
        search.classList.add('active');
    }
    else {
        
    }
    showSuggestion(emptyArray);
}

function showSuggestion(list) {
    let listData;
    if(!list.length) {

    }
    else {
        listData = list.join('');
    }
    suggestion.innerHTML = listData;
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    bar.classList.remove('active');

    section.forEach(sec => {
        let top = window.scrollY;
        let height = sec.offsetHeight;
        let offset = sec.offsetTop - 150;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            barLink.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header .bar a[href*='+id+']').classList.add('active');
            });
        };
    });
}

document.querySelector('#search-icon').onclick = () => {
    document.querySelector('#form').classList.toggle('active');
  }
  
document.querySelector('#close').onclick = () => {
    document.querySelector('#form').classList.remove('active');
}

var swiper2 = new Swiper(".swipe", {
    spaceBetween: 30,
    centeredSize: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
});

var swiper1 = new Swiper(".slide-home", {
    spaceBetween: 30,
    centeredSize: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
});

var swiper3 = new Swiper('.slide-review', {
    spaceBetween: 30,
    centeredSize: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

function loader() {
    document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut() {
    setInterval(loader, 10000);
}

window.onload = fadeOut;