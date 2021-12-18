const app = () => {
  const elements = {
    range: document.querySelector('#font-size-control'),
    span: document.querySelector('#text'),
  };

  elements.range.addEventListener('input', (evt) => {
    const { value } = evt.target;
    elements.span.style.fontSize = `${value}px`;
  });

  elements.span.style.fontSize = `${elements.range.value}px`;
};

app();
