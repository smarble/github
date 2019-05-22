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
        //you could just use "return._courses" here and it would do the same thing ass all the lines below.
        return {
            appetizers: this.appetizers,
            mains: this. mains,
            desserts: this.desserts,
        }
    },
    addDishToCourse(courseName, dishName, dishPrice){
    const dish = {
        name: dishName,
        price: dishPrice,
    };
return this._courses[courseName].push(dish);
}


};