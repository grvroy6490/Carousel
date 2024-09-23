class Carousel {
    constructor(selector, options = {}) {
      // Get the carousel element and its inner container
      this.carousel = document.querySelector(selector);
      this.carouselInner = this.carousel.querySelector('.carousel-inner');
      this.items = this.carousel.querySelectorAll('.carousel-item');
  
      // Default options with user-provided overrides
      this.slidesPerView = options.slidesPerView || 1;
      this.gap = options.gap || 0;
      this.currentIndex = 0;
      this.totalItems = this.items.length;
  
      // Set initial carousel layout based on options
      this.setupCarousel();
  
      // Add event listeners for navigation buttons
      this.carousel.querySelector('.next').addEventListener('click', () => this.nextSlide());
      this.carousel.querySelector('.prev').addEventListener('click', () => this.prevSlide());
    }
  
    setupCarousel() {
      // Calculate width and apply styling to slides
      const itemWidth = (100 / this.slidesPerView) - (this.gap / this.slidesPerView);
      this.items.forEach(item => {
        item.style.width = `${itemWidth}%`;
        item.style.marginRight = `${this.gap}px`;
      });
  
      // Set the carousel inner container width
      const totalInnerWidth = this.totalItems * (itemWidth + this.gap);
      this.carouselInner.style.width = `${totalInnerWidth}%`;
    }
  
    updateCarousel() {
      const itemWidth = 100 / this.slidesPerView;
      const offset = -this.currentIndex * (itemWidth + this.gap);
      this.carouselInner.style.transform = `translateX(${offset}%)`;
    }
  
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.totalItems;
      this.updateCarousel();
    }
  
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.totalItems) % this.totalItems;
      this.updateCarousel();
    }
  }
  
  // Initialize the carousel with custom options
  const myCarousel = new Carousel('.carousel', {
    slidesPerView: 3,  // Number of visible slides
    gap: 10            // Gap between slides (in pixels)
  });
  
