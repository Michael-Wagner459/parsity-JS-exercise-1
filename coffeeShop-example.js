const coffeeShop = {
  beans: 40,
  drinkRequirements: {
    latte: {
      price: 5,
      beanRequirement: 10,
    },
    americano: {
      price: 5,
      beanRequirement: 5,
    },
    doubleShot: {
      price: 8,
      beanRequirement: 15,
    },
    frenchPress: {
      price: 5,
      beanRequirement: 12,
    },
  },
  money: 100,
  buyBeans(beans) {
    const total = beans * 0.75;
    if (this.money >= total) {
      this.money -= total;
      this.beans += beans;
    } else {
      alert("Sorry! We don't have enough money for those beans!");
    }
  },
  makeDrink(drinkType) {
    // TODO: Finish this method
    if (this.drinkRequirements.hasOwnProperty(drinkType) === false) {
      alert(`Sorry, we don't make ${drinkType}.`);
      return false;
    }

    if (this.beans >= this.drinkRequirements[drinkType].beanRequirement) {
      this.beans -= this.drinkRequirements[drinkType].beanRequirement;
      console.log(this.beans);
      return true;
    }

    alert('Sorry, were all out of beans.');
    return false;
  },
  buyDrink(drink) {
    if (this.makeDrink(drink)) {
      console.log(this.money);
      this.money += this.drinkRequirements[drink].price;
    }
  },
};
coffeeShop.buyDrink('latte');
coffeeShop.buyDrink('americano');
coffeeShop.buyDrink('pourOver');
coffeeShop.buyDrink('doubleShot');
coffeeShop.buyDrink('frenchPress');
