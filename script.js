document.addEventListener('DOMContentLoaded', function() {
    const dateElement = document.getElementById('date');
    if (dateElement) {
        const today = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        dateElement.innerHTML = `Today is ${today.toLocaleDateString(undefined, options)}`;
    }

    // Slideshow
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let slides = document.getElementsByClassName("mySlides");
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}    
        slides[slideIndex - 1].style.display = "block";  
        setTimeout(showSlides, 2000); // Change image every 2 seconds
    }
});
