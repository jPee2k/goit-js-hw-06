const app = () => {
  const elements = {
    input: document.querySelector('#name-input'),
    output: document.querySelector('#name-output'),
  };

  elements.input.addEventListener('input', (evt) => {
    const value = evt.target.value.trim();
    elements.output.textContent = value.length ? value : 'Anonymous';
  });
};

app();
