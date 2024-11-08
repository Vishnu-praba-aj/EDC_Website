export function triggerConfetti() {
    const confettiContainer = document.querySelector(".confetti-container");

    for (let i = 0; i < 50; i++) { // Creates 50 confetti pieces
        const confetti = document.createElement("div");
        confetti.classList.add("confetti");
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.animationDelay = Math.random() * 2 + "s";
        confettiContainer.appendChild(confetti);

        // Remove confetti after animation ends
        setTimeout(() => confetti.remove(), 3000);
    }
}
