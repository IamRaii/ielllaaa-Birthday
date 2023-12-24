let isFlipped = false;

function flipCard() {
    const card = document.querySelector('.card');
    if (!isFlipped) {
        card.classList.add('flipped');
    } else {
        card.classList.remove('flipped');
    }
    isFlipped = !isFlipped;
}