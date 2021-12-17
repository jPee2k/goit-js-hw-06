const app = () => {
  const categoriesList = document.querySelector('#categories');
  const categoryItems = categoriesList.querySelectorAll('.item');
  console.log('Number of categories: ', categoryItems?.length);
  console.log('');

  categoryItems.forEach((item) => {
    console.log('Category: ', item.querySelector('h2').textContent);
    console.log('Elements: ', item.querySelectorAll('ul > li').length);
    console.log('');
  });
};

app();

/* --------------- or --------------- */

// const spareApp = () => {
//   const categoriesList = document.querySelector('#categories');
//   console.log('Number of categories: ', categoriesList.childElementCount);
//   console.log('');
//
//   [...categoriesList.children].forEach((item) => {
//     console.log('Category: ', item.firstElementChild.textContent);
//     console.log('Elements: ', item.lastElementChild.children.length);
//     console.log('');
//   });
// };
// spareApp();
