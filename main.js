window.onload = main;
// dessa är ungefär samma, men onload fungerar nu.
//window.addEventListener('load', main);

/**Start of the program */
function main() {
    startSlideshowAnimation();
    
}
function startSlideshowAnimation() {
    //setInterval(changeActiveImage, 2000);
    changeActiveImage();
}


function changeActiveImage() {
    const images = document.querySelectorAll('.slidershow-container > img');
    console.log(images)
}