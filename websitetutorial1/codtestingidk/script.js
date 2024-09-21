window.addEventListener('scroll', function() {
    const background = document.querySelector('.background-image');
    const scrolled = window.pageYOffset;
    background.style.transform = 'translateY(' + scrolled * 0.5 + 'px)';
});