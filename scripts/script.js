const libImgs = {
    "baby-mobs": 4
};

document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const toggleMenu = () => {
        burger.classList.toggle('toggle');
        document.body.classList.toggle('overflow');
        document.querySelector('nav .links').classList.toggle('show');
    };
    burger.addEventListener('click', () => toggleMenu());
    document.querySelectorAll('nav .links a').forEach(x=>x.addEventListener('click', () => toggleMenu()));
    document.querySelector('.btn-presentation').addEventListener('click', () => {
        if (burger.classList.contains('toggle')) toggleMenu();
    });

    document.querySelectorAll('.slider').forEach(slider => {
        const project = slider.dataset.projet;
        const size = libImgs[project];
        let index = 0;
        const slide = () => {
            if (index < 0) index = size - 1;
            slider.children.slide.src = `assets/${project}/${index % size}.png`;
        };
        slider.children.previous.addEventListener('click', () => (--index, slide()));
        slider.children.next.addEventListener('click', () => (++index, slide()));
    })
});