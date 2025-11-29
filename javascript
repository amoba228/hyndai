const sliderPhotos = [
    "https://hyundai.com.ua/sites/default/files_actual/models-gallery/elantra-highlights-gallery-highlight-01-pc.jpg",
    "https://hyundai.com.ua/sites/default/files_actual/models-gallery/elantra-highlights-gallery-sophisticated-02-pc.jpg",
    "https://hyundai.com.ua/sites/default/files_actual/models-gallery/elantra-highlights-gallery-rear1-03-pc.jpg",
    "https://hyundai.com.ua/sites/default/files_actual/models-gallery/elantra-highlights-gallery-front-06-pc.jpg",
    "https://hyundai.com.ua/sites/default/files_actual/models-gallery/elantra-highlights-gallery-rear-07-pc.jpg",
    "https://hyundai.com.ua/sites/default/files_actual/models-gallery/elantra-highlights-gallery-side-08-pc.jpg",
    "https://hyundai.com.ua/sites/default/files_actual/models-gallery/elantra-highlights-gallery-on-the-road-10-pc.jpg"
];

let currentSlide = 0;

function updateSlide() {
    document.getElementById("sliderImage").src = sliderPhotos[currentSlide];
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % sliderPhotos.length;
    updateSlide();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + sliderPhotos.length) % sliderPhotos.length;
    updateSlide();
}
