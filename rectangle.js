'use strict';

const rectangle = {
  heightValue: 5,
  widthValue: 5,

  set width(width) {
    if (typeof width === 'number') {
      this.widthValue = width;
    } else {
      console.log('Width must be a number');
    }
  },

  set height(height) {
    if (typeof height === 'number') {
      this.heightValue = height;
    } else {
      console.log('Height must be a number');
    }
  },

  get perimeter() {
    return `${(this.heightValue + this.widthValue) * 2}см`;
  },

  get area() {
    return `${this.heightValue * this.widthValue}см²`;
  },
};

rectangle.width = 10;
rectangle.height = 20;
console.log(rectangle.perimeter);
console.log(rectangle.area);
