import data from './data.js';

const productContainer = document.getElementsByClassName('content');
const searchInput = document.getElementsByClassName('search');
const catContainer = document.getElementsByClassName('cats');
const priceRange = document.getElementsByClassName('priceRange');
const priceValue = document.getElementsByClassName('priceValue');

const display = (filteredData) => {
  let products = '';
  filteredData.forEach((product) => {
    products += `
            <div class="products">
            <img src="${product.image}" alt="${product.title}" />
            <span class="name">${product.title}</span>
            <span class="priceTag">$${product.price}</span>
            </div>
        `;
  });
  productContainer[0].innerHTML = products;
};
display(data);

searchInput[0].addEventListener('keyup', (event) => {
  const value = event.target.value.toLowerCase();
  if (value) {
    display(
      data.filter((item) => {
        return item.title.toLowerCase().indexOf(value) !== -1;
      })
    );
  } else {
    display(data);
  }
});

const setCategories = () => {
  const allCategories = data.map((item) => item.category);
  const uniqueCategories = [];
  const mappy = {};
  for (let st of allCategories) {
    if (!mappy[st]) {
      mappy[st] = true;
      uniqueCategories.push(st);
    }
  }
  let c = '<span class="cat">All</span>';
  uniqueCategories.forEach((cat) => {
    c += `
    <span class="cat">${cat}</span>
        `;
  });
  catContainer[0].innerHTML = c;
};
setCategories();

catContainer[0].addEventListener('click', (event) => {
  console.log(event.target.textContent);
  const value = event.target.innerHTML;
  value === 'All'
    ? display(data)
    : display(data.filter((item) => item.category === value));
});

const setPrices = () => {
  const allPrices = data.map((item) => item.price);
  const minPrice = Math.min(...allPrices);
  const maxPrice = Math.max(...allPrices);
  priceRange[0].min = minPrice;
  priceRange[0].max = maxPrice;
  priceRange[0].value = minPrice;
  priceValue[0].innerHTML = `$${Math.trunc(minPrice)}`;
};
setPrices();

priceRange[0].addEventListener('input', (event) => {
  priceValue[0].innerHTML = `$${Math.trunc(event.target.value)}`;
  console.log(event.target.value);
  display(data.filter((item) => item.price <= event.target.value));
});
