const app = () => {
  const elements = {
    value: document.querySelector('#counter #value'),
    decrementButton: document.querySelector('#counter [data-action="decrement"]'),
    incrementButton: document.querySelector('#counter [data-action="increment"]'),
  };

  const counter = {
    counterValue: 0,

    getValue () {
      return this.counterValue;
    },

    incrementValue () {
      this.counterValue += 1;
    },

    decrementValue () {
      this.counterValue -= 1;
    },
  };

  const renderValue = (value) => {
    elements.value.textContent = value;
  };

  elements.decrementButton.addEventListener('click', () => {
    counter.decrementValue();
    renderValue(counter.getValue());
  });
  elements.incrementButton.addEventListener('click', () => {
    counter.incrementValue();
    renderValue(counter.getValue());
  });
};

app();
