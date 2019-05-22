const menu = {
    _courses: {
        appetizers:[] ,
        mains:[] ,
        desserts:[] ,
    },
    get appetizers(){
        return this._courses.appetizers;
    },
    get mains(){
        return this._courses.mains;
    },
    get desserts(){
        return this._courses.desserts;
    },

    set appetizers(data){
        this._courses.appetizers = data;
    },
    set mains(data){
        this._courses.mains = data;
    },
    set desserts(data){
        this._courses.desserts = data;
    },
    get courses(){
        //you could just use "return this._courses" here and it would do the same thing ass all the lines below.
        return {
            appetizers: this.appetizers,
            mains: this. mains,
            desserts: this.desserts,
        }
    },
    addDishToCourse(courseName, dishName, dishPrice) {
        const dish = {
            name: dishName,
            price: dishPrice,
        };
        return this._courses[courseName].push(dish);
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


menu.addDishToCourse('appetizers', 'Ceasar Salad', 4.25);
menu.addDishToCourse('appetizers', 'Prawn Coctail', 4.25);
menu.addDishToCourse('appetizers', 'Garlic Bread', 3.50);

menu.addDishToCourse('mains', 'Lasagna', 9.75);
menu.addDishToCourse('mains', 'Ribeye Steak', 14.95);
menu.addDishToCourse('mains', 'Fish & Chips', 12.95);

menu.addDishToCourse('desserts', 'Cheese Cake', 4.50);
menu.addDishToCourse('desserts', 'Creme Brule', 4.25);
menu.addDishToCourse('desserts', 'Cheese Board', 3.25);

let meal = menu.generateRandomMeal();
console.log(meal);

let meal2 = menu.generateRandomMeal();
console.log(meal2);

