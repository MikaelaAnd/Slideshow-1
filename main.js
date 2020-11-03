window.onload = main;
// dessa är ungefär samma, men onload fungerar nu.
//window.addEventListener('load', main);

/**Start of the program */
function main() {
    startSlideshowAnimation();
    
}
/** Start the animation with a set interval */
function startSlideshowAnimation() {
    setInterval(changeActiveImage, 2000);
    changeActiveImage();
}

/** Presents the next image by checking which image is currently presented */
function changeActiveImage() {
    const images = document.querySelectorAll('.slideshow-container > img');
   

    for(let i = 0; i < images.length; i++) {
        
        if (images[i].classList.contains('show')) {
        //1. ta bort show-klassen från aktuellt index
        images[i].classList.remove('show');

            //2. Make sure we go back to index 0 when at the end of array.
            let nextIndex = (i + 1) % images.length;
        
        //Alternative use an if statement to reset the value to 0
        // if (nextIndex >= images.length) {
        //     nextIndex = 0;
        //}

        //  Modulus, hur många gånger går det att dela, och vad blir över
        // 0 / 4 = 0
        // 1 / 4 = 1
        // 2 / 4 = 2
        // 3 / 4 = 3
        // 4 / 4 = 0
        // 5 / 4 = 1
        // 6 / 4 = 2
        // 7 / 4 = 3
        

            images[nextIndex].classList.add('show');
            //3. hoppa ur loopen när vi bytt bild
            break;
        }
    }
}