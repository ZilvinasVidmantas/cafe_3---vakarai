/*
  Skirtas patikrinti, ar elementas egiztuoja masyve

  parametrai:
    * ieškomas elementas

  grąžinimas:
    * true - jeigu elementas yra masyve
    * false - jeigu elemento nėra masyve
*/

console.group('Veikimo pavyzdys');
{
  const tags = ['JavaScript', 'Arrays', 'Algorythms', 'Array methods'];
  const search = 'JavaScript';
  const hasTag = tags.includes(search);
  if (hasTag) {
    console.log(`'${search}' yra tags masyve`);
  } else {
    console.log(`'${search}' nerastas tags masyve`);
  }
}
console.groupEnd();

console.group('Praktinis pavyzdys');
{
  const findItemsByCategory = (items, category) => {
    const foundItems = [];
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      if (item.categories.includes(category)) {
        foundItems.push(item);
      }
    }

    return foundItems;
  }

  const shopItems = [{
    title: 'Playing cards',
    price: 7.99,
    categories: ['playing', 'games', 'used', 'accessories', 'kids']
  }, {
    title: 'Pants',
    price: 30.99,
    categories: ['women', 'men', 'new', 'jeans', 'clothes']
  }, {
    title: 'Nike shoes',
    price: 7.99,
    categories: ['clothes', 'shoes', 'used', 'sport']
  }, {
    title: 'Dish washer',
    price: 89.99,
    categories: ['home', 'electronics', 'new']
  }, {
    title: 'Keyboard',
    price: 11.99,
    categories: ['playing', 'games', 'electronics', 'new']
  }, {
    title: 'Sport Bicycle',
    price: 49.99,
    categories: ['playing', 'games', 'sport', 'used', 'kids']
  }];

  console.log('%c Category: new', 'font-size: 20px');
  console.table(findItemsByCategory(shopItems, 'new'));

  console.log('%c Category: games', 'font-size: 20px');
  console.table(findItemsByCategory(shopItems, 'games'));

  console.log('%c Category: clothes', 'font-size: 20px');
  console.table(findItemsByCategory(shopItems, 'clothes'));
}
console.groupEnd();