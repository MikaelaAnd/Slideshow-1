window.onload = main;
// dessa är ungefär samma, men onload fungerar nu.
//window.addEventListener('load', main);

/**Start of the program */
function main() {
    startSlideshowAnimation();
    
}
function startSlideshowAnimation() {
    setInterval(changeActiveImage, 2000);
    changeActiveImage();
}


function changeActiveImage() {
    const images = document.querySelectorAll('.slideshow-container > img');
   

    for(let i = 0; i < images.length; i++) {
        
        if (images[i].classList.contains('show')) {
        //1. ta bort show-klassen från aktuellt index
        images[i].classList.remove('show');

        //2. lägg till show-klassen på nästa index
        let nextIndex = i + 1;

        if (nextIndex >= images.length) {
            nextIndex = 0;
        }

        images[nextIndex].classList.add('show');

        //3. hoppa ur loopen när vi bytt bild
        break;
        }
    }
}