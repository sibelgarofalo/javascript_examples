const menu = {
  _meal: "",
  _price: 0,
  set meal(mealToCheck) {
    if (typeof mealToCheck === "string") {
      this._meal = mealToCheck;
    }
  },
  set price(priceToCheck) {
    if (typeof priceToCheck === "number") {
      this._price = priceToCheck;
    }
  },
  get todaySpecial() {
    if (this._meal && this._price) {
      return `Today's Special is ${this._meal} for ${this._price}\$!`;
    } else {
      return "Meal or price was not set correctly!";
    }
  },
};

menu.price = "borek";
menu.meal = 10;

console.log(menu.todaySpecial);

menu.price = 5;
menu.meal = "borek";

console.log(menu.todaySpecial);
