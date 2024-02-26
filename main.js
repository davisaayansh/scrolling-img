window.addEventListener('scroll', () => {
    let scrollTop = window.scrollY;
    let windowHeight = window.innerHeight;

    let images = document.querySelectorAll('.image');

    images.forEach((image, index) => {
        let imageOffset = image.offsetTop;
        if (scrollTop > imageOffset - windowHeight / 2) {
            image.classList.add('show');
        } else {
            image.classList.remove('show');
        }
    });
});