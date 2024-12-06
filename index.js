let items = document.querySelectorAll('.slider .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');

let active = 0; // Start with the first item

function loadShow() {
    items.forEach((item, index) => {
        item.classList.remove('active', 'left', 'right');
        if (index === active) {
            item.classList.add('active');
            item.style.transform = `translateX(0%) scale(1.1) perspective(1000px) rotateY(0deg)`;
        } else if (index === (active - 1 + items.length) % items.length) {
            item.classList.add('left');
            item.style.transform = `translateX(-120%) scale(0.9) perspective(1000px) rotateY(15deg)`;
        } else if (index === (active + 1) % items.length) {
            item.classList.add('right');
            item.style.transform = `translateX(120%) scale(0.9) perspective(1000px) rotateY(-15deg)`;
        } else {
            item.style.transform = 'translateX(300%)';
        }
    });
}

loadShow();

next.onclick = function() {
    active = (active + 1) % items.length;
    loadShow();
}

prev.onclick = function() {
    active = (active - 1 + items.length) % items.length;
    loadShow();
}