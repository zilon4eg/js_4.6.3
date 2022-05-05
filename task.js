function sliderLogic(arrow, sliders, slidersCount, sliderActive) {
    if (arrow.className.includes('slider__arrow_prev')) {
        sliders[sliderActive].className = 'slider__item';

        sliderActive -= 1;
        if (sliderActive < 0) {
            sliderActive = slidersCount - 1;
        }

        sliders[sliderActive].className = 'slider__item slider__item_active';
    }

    if (arrow.className.includes('slider__arrow_next')) {
        sliders[sliderActive].className = 'slider__item';

        sliderActive += 1;
        if (!(sliderActive < slidersCount)) {
            sliderActive = 0;
        }

        sliders[sliderActive].className = 'slider__item slider__item_active';
    }
    return sliderActive;
}


const sliderArrows = document.querySelectorAll('.slider__arrow');

const sliders = document.querySelectorAll('.slider__item');
let slidersCount = sliders.length;
let sliderActive;

for (i=0; i<slidersCount; i++) {
    if (sliders[i].className.includes('slider__item_active')) {
        sliderActive = i;
    }
}

sliderArrows.forEach(function(arrow) {
    arrow.onclick = function() {
        sliderActive = sliderLogic(arrow, sliders, slidersCount, sliderActive);
    }
});
