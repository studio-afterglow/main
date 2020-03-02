    
        const images = document.querySelectorAll('.fade-in');

        observer = new IntersectionObserver((entries) => {

            entries.forEach(entry => {
                if(entry.intersectionRatio > 0) {
                    entry.target.style.animation = `1s ease-out 1s 1 normal forwards running fade-in-animation`;
                }
            })

        })

        images.forEach(image => {
            observer.observe(image)
        })