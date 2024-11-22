document.addEventListener("DOMContentLoaded", function () {
  const texts = ["Turn ideas into reality", "through a very", "simple process.", "HARDWARE CUSTOMIZATION", "SOFTWARE CUSTOMIZATION", "ASSIGNED PRODUCTION", "TESTING AND CERTIFICATION"];
  let index = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingTextElement = document.getElementById("typing-text");

  function type() {
    const currentText = texts[index];
    typingTextElement.textContent = isDeleting
      ? currentText.substring(0, charIndex--)
      : currentText.substring(0, charIndex++);

    if (!isDeleting && charIndex === currentText.length) {
      setTimeout(() => (isDeleting = true), 1000);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      index = (index + 1) % texts.length;
    }

    setTimeout(type, isDeleting ? 100 : 200);
  }

  type();
});