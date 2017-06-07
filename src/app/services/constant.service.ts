import { Injectable } from '@angular/core';

const CONSTANTS = {
  "homeFields" : [
    {
      "img" : "burgers_img.jpeg",
      "title" : "BURGER TYPE",
      "types" : ["BASIC", "HEALTHY", "DELUXE", "SUPER"]
    },
    {
      "img" : "breads_img.jpg",
      "title" : "BREAD TYPE",
      "types" : ["PLAIN WHITE", "WHITE BUN WITH SESAME SEEDS", "BRIOCHE", "ENGLISH MUFFIN", "PRETZEL ROLL", "TORTA ROLL", "CHALLAH ROLL", "RYE BREAD"]
    },
    {
      "img" : "meat_img.jpg",
      "title" : "MEAT/VEGAN",
      "types" : ["VEGAN", "EGG", "CHICKEN", "HAM", "BEEF", "PORK"]
    },
    {
      "img" : "cheese_img.jpg",
      "title" : "CHEESES",
      "types" : ["CHEDDAR CHEESE", "BLUE CHEESE", "SWISS CUSINE", "BRIE", "PROVOLONE"]
    },
    {
      "img" : "add1_img.JPG",
      "title" : "TOPPINGS",
      "types" : ["TOMATOES", "ONIONS", "CARROT", "VEGGIES"]
    },
    {
      "img" : "add2_img.jpg",
      "title" : "ADDITIONAL TOPPINGS",
      "types" : ["AVACADO", "JALAPENOS", "LETTUCE", "GRILLED MUSHROOMS"]
    },
    {
      "img" : "sauces_img.jpg",
      "title" : "SAUCES",
      "types" : ["AIOLI", "KETCHUP", "MUSTARD", "MAYONNAISE"]
    }
  ]
};
@Injectable()
export class ConstantService {
  getConstants() {
    return CONSTANTS;
  }

  getHomeFields() {
    return CONSTANTS.homeFields;
  }
}
