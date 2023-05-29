let offset=0;
const sliderLine = document.querySelector('.linecell');


document.querySelector('.slider-next').addEventListener('click', function(){
    offset = offset + 500;
    if (offset > 1500){
        offset=0;
    }
    sliderLine.style.left = -offset + 'px'
});

document.querySelector('.slider-prev').addEventListener('click', function(){
    offset = offset - 500;
    if (offset < 0){
        offset=1500;
    }
    sliderLine.style.left = -offset + 'px'
});