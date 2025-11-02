document.addEventListener("DOMContentLoaded", () => {
    const typingElement = document.querySelector(".typing");

    const words = ["Developers", "Designers", "Creators", "YOU!"];
    let wordIndex = 0;
    let charIndex = 0;
    let currentWord = '';
    let isDeleting = false;

    function type() {
        currentWord = words[wordIndex];
        const displayText = currentWord.substring(0, charIndex);
        typingElement.textContent = displayText;

        if (!isDeleting && charIndex < currentWord.length) {
            charIndex++;
            setTimeout(type, 150);
        } else if (isDeleting && charIndex > 0) {
            charIndex--;
            setTimeout(type, 80);
        } else {
            if (!isDeleting) {
                isDeleting = true;
                setTimeout(type, 1200);
            } else {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                setTimeout(type, 200);
            }
        }
    }

    type();
});
