const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const app = () => {
  const ingredientList = document.querySelector('#ingredients');
  const elements = ingredients.map((item) => {
    const el = document.createElement('li');
    el.classList.add('item');
    el.textContent = item;
    return el;
  });
  ingredientList.append(...elements);
};

app();
