function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const app = () => {
  const elements = {
    input: document.querySelector('#controls [type="number"]'),
    createButton: document.querySelector('#controls [data-create]'),
    destroyButton: document.querySelector('#controls [data-destroy]'),
    boxWrapper: document.querySelector('#boxes'),
  };

  const data = {
    amount: 0,
    size: 30,
    boxes: [],

    createBoxes () {
      for (let i = 0; i < this.amount; i += 1) {
        const box = document.createElement('div');
        box.style.backgroundColor = getRandomHexColor();
        box.style.height = `${this.size}px`;
        box.style.width = `${this.size}px`;
        this.incrementSize();
        this.boxes.push(box);
      }
      return this;
    },

    removeBoxes() {
      this.boxes.length = 0;
      this.resetSize();
      return this;
    },

    renderBoxes ()  {
      elements.boxWrapper.replaceChildren(...this.boxes);
      return this;
    },

    incrementSize () {
      this.size += 10;
    },

    resetSize () {
      this.size = 30;
    },
  };

  elements.input.addEventListener('input', (evt) => {
    data.amount = parseInt(evt.target.value || 0, 10);
  });
  elements.createButton.addEventListener('click', () => {
    data.createBoxes().renderBoxes();
  });
  elements.destroyButton.addEventListener('click', () => {
    data.removeBoxes().renderBoxes();
  });
};

app();
