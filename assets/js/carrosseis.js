const initSlider = () => {
    const listaDeImagensDoCarrossel = document.querySelector(".container-itens-carrossel .listaDeImagensDoCarrossel");
    const slideButtons = document.querySelectorAll(".container-itens-carrossel .slide-button");

    // Usando a seleção correta para a largura
    const slideWidth = listaDeImagensDoCarrossel.clientWidth;

    let isScrolling = false;

    const scrollToSlide = (direction) => {
        if (isScrolling) return;
        isScrolling = true;

        // Calcula o novo scrollLeft baseado na direção
        const newScrollLeft = listaDeImagensDoCarrossel.scrollLeft + direction * slideWidth;
        listaDeImagensDoCarrossel.scrollTo({
            left: newScrollLeft,
            behavior: 'smooth'
        });

        // Reinicia a rolagem após o fim do carrossel
        setTimeout(() => {
            if (listaDeImagensDoCarrossel.scrollLeft >= listaDeImagensDoCarrossel.scrollWidth - slideWidth) {
                listaDeImagensDoCarrossel.scrollTo({ left: 0, behavior: 'smooth' });
            } else if (listaDeImagensDoCarrossel.scrollLeft <= 0) {
                listaDeImagensDoCarrossel.scrollTo({ left: listaDeImagensDoCarrossel.scrollWidth - slideWidth, behavior: 'smooth' });
            }
            isScrolling = false;
        }, 500); // Tempo para garantir que o scroll tenha sido concluído
    };

    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            scrollToSlide(direction);
        });
    });

    // Inicializa o carrossel com o scroll no início
    listaDeImagensDoCarrossel.scrollTo({ left: 0 });
};

window.addEventListener("load", initSlider);
