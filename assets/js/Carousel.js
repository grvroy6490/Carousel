class Carousel{
    //constructor(){}  // default constructor

    constructor(selector, options = {}) {  // Parameterized constructor
        this.selector = document.querySelector(selector)
        this.innerCarousel = this.selector.querySelector('.carousel-inner')
        this.items = this.selector.querySelectorAll('.carousel-item')

        this.slidesPerView = options.slidesPerView || 1
        this.spaceBetween = options.spaceBetween || 0
        this.totalItems = this.items.length

        this.currentIndex = 0;

        this.innerCarousel.style.display = "flex"
        this.containerWidth = this.selector.clientWidth;

        this.setupCarousel()

        this.selector.querySelector('.next').addEventListener('click', () => this.nextSlide());
        this.selector.querySelector('.prev').addEventListener('click', () => this.prevSlide());

    } 

    setupCarousel() {
        // Calculate width and apply styling to slides
        const itemWidth = (this.containerWidth / this.slidesPerView) - (this.spaceBetween)
        this.items.forEach(item => {
            item.style.minWidth = `${itemWidth}px`;            
        });

        this.innerCarousel.style.columnGap = `${this.spaceBetween}px`

        // Set the carousel inner container width
        const totalInnerWidth = this.totalItems * (itemWidth + this.spaceBetween);
        this.innerCarousel.style.width = `${totalInnerWidth}px`;
    }

    updateSlide() {
        const itemWidth = (this.containerWidth / this.slidesPerView) - (this.spaceBetween)
        const offset = -this.currentIndex * (itemWidth + this.spaceBetween)
        this.innerCarousel.style.transform = `translateX(${offset}px)`
    }


    nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.totalItems
        this.updateSlide()
    }

    prevSlide() {
        this.currentIndex = (this.currentIndex - 1 + this.totalItems) % this.totalItems
        this.updateSlide()
    }

   
}



const instance = new Carousel('.carousel', {
    slidesPerView: 2,
    spaceBetween: 10,
}) // object initialize