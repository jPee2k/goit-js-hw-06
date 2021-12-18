function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const app = () => {
  const elements = {
    button: document.querySelector('.widget .change-color'),
    span: document.querySelector('.widget .color'),
    body: document.querySelector('body'),
  };

  elements.button.addEventListener('click', () => {
    const color = getRandomHexColor();
    elements.span.textContent = color;
    elements.body.style.backgroundColor = color;
  });
};

app();
