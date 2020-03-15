//MealMaker.js
// use JavaScript to randomly create a three-course meal based on what is available on a menu
//Part of Codecademy/CS Track

//create menu object
const menu = {
  _courses: {
    _appetizers: [],
    _mains: [],
    _desserts: [],
    
    get appetizers() {
      return this._appetizers;
    },
    set appetizers(appetizersIn) {
      this._appetizers = appetizersIn;
    },
    get mains() {
      return this._mains;
    },
    set mains(mainsIn) {
      this._mains = mainsIn;
    },
    get desserts() {
      return this._desserts;
    },
    set desserts(dessertsIn) {
      this._desserts = dessertsIn;
    },
  },
  
  get courses() {
    return {
      appetizers: this._courses.appetizers,
      mains: this._courses.mains,
      desserts: this._courses.desserts,
    };
},
  
  
  addDishToCourse (courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    };
    
    this._courses[courseName].push(dish);
  },
  
  getRandomDishFromCourse (courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },
  
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
    
    return `Your meal is ${appetizer.name}, ${main.name} and ${dessert.name}. The price is $${totalPrice.toFixed(2)}.`;
  },
};

menu.addDishToCourse('appetizers','Salad',4.25);
menu.addDishToCourse('appetizers','Spring Rolls',5.25);
menu.addDishToCourse('appetizers','Calamari',5.75);

menu.addDishToCourse('mains','Stir Fry Beef',10.25);
menu.addDishToCourse('mains','Sweet and Sour Shrimp', 12.00);
menu.addDishToCourse('mains','Curry',9.75);

menu.addDishToCourse('desserts','Mango Tart',4.25);
menu.addDishToCourse('desserts','Cheesecake', 5.00);
menu.addDishToCourse('desserts','Ice Cream',3.00);

let meal = menu.generateRandomMeal();
console.log(meal);
