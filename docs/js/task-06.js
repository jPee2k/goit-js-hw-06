const getValidationState = (length, maxLength) => {
  if (length > maxLength) {
    return 'invalid';
  } else if (length <= 0) {
    return 'default';
  }
  return 'valid';
};

const renderBorder = (target, state) => {
  target.classList.remove('invalid', 'valid');
  switch (state) {
    case 'valid':
      target.classList.add('valid');
      break;
    case 'invalid':
      target.classList.add('invalid');
      break;
    default:
      target.classList.remove('invalid', 'valid');
  }
};

const app = () => {
  const input = document.querySelector('#validation-input')
  input.addEventListener('blur', (evt) => {
    const maxLength = parseInt(evt.target.dataset.length, 10);
    const { length } = evt.target.value;
    const state = getValidationState(length, maxLength);
    renderBorder(evt.target, state);
  });
};

app();
