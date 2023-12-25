document.addEventListener("DOMContentLoaded", function() {
    // Змінюємо колір тексту усіх елементів h1, h3
     const headers = document.querySelectorAll('h1, h3');
    headers.forEach(header => {
        header.style.color = 'yellow';
    });

    // Змінюємо стиль таблиці
    const table = document.querySelector('table');
    table.style.borderCollapse = 'collapse';
    table.style.width = '100%';
    table.style.height = '100%';

    // Змінюємо фоновий колір та розмір тексту усіх елементів ul
    const ulElements = document.querySelectorAll('ul');
    ulElements.forEach(ul => {
        ul.style.backgroundColor = '#92a8d1';
        ul.style.fontSize = '20px';
    });

    // Змінюємо розміри усіх картинок з класом "image"
    const images = document.querySelectorAll('.image');
    images.forEach(image => {
        image.style.width = '55px';
        image.style.height = '55px';
    });

    // Змінюємо ширину і висоту iframe для відео
    const iframe = document.querySelector('iframe');
    iframe.style.width = '50%';
    iframe.style.height = '100%';
});
