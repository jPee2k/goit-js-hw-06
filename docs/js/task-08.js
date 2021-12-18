const app = () => {
  const form = document.querySelector('.login-form');
  const formData = {
    isValid: false,
    elements: {},

    validate (...elements) {
      this.isValid = elements.every((el) => el.value.length);
      this.isValid && this.saveData(elements);
      return this;
    },

    saveData (elements) {
      this.elements = elements.reduce((acc, el) => {
        acc[el.name] = el.value;
        return acc;
      }, {});
    },

    alert () {
      if (this.isValid) {
        console.log(this.elements);
      } else {
        alert('All fields are required');
      }

      return this;
    },
  };

  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const { email, password } = evt.target.elements;
    formData.validate(email, password).alert();
    formData.isValid && evt.target.reset();
  });
};

app();
