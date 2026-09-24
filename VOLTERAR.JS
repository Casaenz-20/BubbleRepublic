
document.addEventListener('DOMContentLoaded', () => {

    const cards = document.querySelectorAll('.tarjeta-producto');

    cards.forEach(card => {

        const flipBtn = card.querySelector('.boton-voltear');
        const unflipBtn = card.querySelector('.boton-regresar');

        if (flipBtn) {
            flipBtn.addEventListener('click', () => {
                card.classList.add('volteada');
            });
        }

        if (unflipBtn) {
            unflipBtn.addEventListener('click', () => {
                card.classList.remove('volteada');
            });
        }

    });

});
