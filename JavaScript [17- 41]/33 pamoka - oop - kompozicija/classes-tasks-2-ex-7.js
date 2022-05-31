class IceCream {
  constructor(flavor, numSprinkles) {
    this.flavor = flavor
    this.numSprinkles = numSprinkles
  }
}

const sweetnessByFlavor = {
  Plain: 0,
  Vanilla: 5,
  ChocolateChip: 5,
  Strawberry: 10,
  Chocolate: 10,
}

const calcIceCreamSweetness = (ice) => sweetnessByFlavor[ice.flavor] + ice.numSprinkles;

const sweetestIcecream = (ices) => {
  const constSweetnessArr = ices.map(calcIceCreamSweetness);
  return Math.max(...constSweetnessArr);
}

const ice1 = new IceCream("Chocolate", 13);
const ice2 = new IceCream("Vanilla", 0);
const ice3 = new IceCream("Strawberry", 7);
const ice4 = new IceCream("Plain", 18);
const ice5 = new IceCream("ChocolateChip", 3);

console.log(sweetestIcecream([ice1, ice2, ice3, ice4, ice5]))
