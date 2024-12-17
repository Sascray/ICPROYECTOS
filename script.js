document.querySelector('.menu-toggle').addEventListener('click', function () {
    const menu = document.querySelector('.menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
});
