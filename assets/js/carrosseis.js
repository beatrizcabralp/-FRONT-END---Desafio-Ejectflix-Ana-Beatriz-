const initSliders = () => {
    const carousels = document.querySelectorAll(".container-itens-carrossel");

    carousels.forEach((carousel, index) => {
        const listaDeImagensDoCarrossel = carousel.querySelector(".listaDeImagensDoCarrossel");
        const slideButtons = carousel.querySelectorAll(".slide-button");

        const slideWidth = listaDeImagensDoCarrossel.clientWidth;
        let isScrolling = false;

        const scrollToSlide = (direction) => {
            if (isScrolling) return;
            isScrolling = true;

            const newScrollLeft = listaDeImagensDoCarrossel.scrollLeft + direction * slideWidth;
            listaDeImagensDoCarrossel.scrollTo({
                left: newScrollLeft,
                behavior: 'smooth'
            });

            setTimeout(() => {
                if (listaDeImagensDoCarrossel.scrollLeft >= listaDeImagensDoCarrossel.scrollWidth - slideWidth) {
                    listaDeImagensDoCarrossel.scrollTo({ left: 0, behavior: 'smooth' });
                } else if (listaDeImagensDoCarrossel.scrollLeft <= 0) {
                    listaDeImagensDoCarrossel.scrollTo({ left: listaDeImagensDoCarrossel.scrollWidth - slideWidth, behavior: 'smooth' });
                }
                isScrolling = false;
            }, 500);
        };

        slideButtons.forEach(button => {
            button.addEventListener("click", () => {
                const direction = button.id.includes("prev-slide") ? -1 : 1;
                scrollToSlide(direction);
            });
        });

        listaDeImagensDoCarrossel.scrollTo({ left: 0 });
    });
};

window.addEventListener("load", initSliders);
