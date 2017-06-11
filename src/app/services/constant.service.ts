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
  ],
  "breadType" : [
    {
      "id" : "plainBread",
      "name" : "Plain Bread",
      "calories" : 115,
      "image" : "plain_bread.png",
      "additionalPrice" : 0
    },
    {
      "id" : "plainBreadSesame",
      "name" : "Plain Bread With Sesame",
      "calories" : 155,
      "image" : "plain_bread_sesame.png",
      "additionalPrice" : 0
    },
    {
      "id" : "brioche",
      "name" : "Brioche",
      "calories" : 177,
      "image" : "brioche_bread.png",
      "additionalPrice" : 0
    },
    {
      "id" : "englishMuffin",
      "name" : "English Muffin",
      "calories" : 67,
      "image" : "english_muffin_bread.png",
      "additionalPrice" : 0
    },
    {
      "id" : "pretzelRoll",
      "name" : "Pretzel Roll",
      "calories" : 165,
      "image" : "pretzel_bread.png",
      "additionalPrice" : 0
    },
    {
      "id" : "tortaRoll",
      "name" : "Torta Roll",
      "calories" : 186,
      "image" : "torta_roll_bread.png",
      "additionalPrice" : 0
    },
    {
      "id" : "challahRoll",
      "name" : "Challah Roll",
      "calories" : 128,
      "image" : "torta_bread.png",
      "additionalPrice" : 0
    },
    {
      "id" : "ryeBread",
      "name" : "Rye Bread",
      "calories" : 103,
      "image" : "rye_bread.png",
      "additionalPrice" : 0
    }
  ],
  "meat" : [
    {
      "id" : "vegan",
      "name" : "Vegan",
      "calories" : 80,
      "image" : "vegan_meat.png",
      "additionalPrice" : 0
    },
    {
      "id" : "egg",
      "name" : "Egg",
      "calories" : 90,
      "image" : "egg_meat.png",
      "additionalPrice" : 0
    },
    {
      "id" : "chicken",
      "name" : "Chicken",
      "calories" : 100,
      "image" : "chicken_meat.png",
      "additionalPrice" : 0.75
    },
    {
      "id" : "ham",
      "name" : "Ham",
      "calories" : 105,
      "image" : "ham_meat.jpg",
      "additionalPrice" : 0.75
    },
    {
      "id" : "beef",
      "name" : "Beef",
      "calories" : 110,
      "image" : "beef_meat.png",
      "additionalPrice" : 0.75
    },
    {
      "id" : "pork",
      "name" : "Pork",
      "calories" : 110,
      "image" : "pork_meat.png",
      "additionalPrice" : 0.75
    }
  ],
  "cheese" : [
    {
      "id" : "none",
      "name" : "None",
      "calories" : 0,
      "image" : "none.png",
      "additionalPrice" : 0
    },
    {
      "id" : "cheddarCheese",
      "name" : "Cheddar Cheese",
      "calories" : 113,
      "image" : "chedar_cheese.png",
      "additionalPrice" : 0
    },
    {
      "id" : "blueCheese",
      "name" : "Blue Cheese",
      "calories" : 80,
      "image" : "blue_cheese.png",
      "additionalPrice" : 0
    },
    {
      "id" : "swissCusine",
      "name" : "Swiss Cuisine",
      "calories" : 106,
      "image" : "swiss_cusine_cheese.png",
      "additionalPrice" : 0
    },
    {
      "id" : "brieCheese",
      "name" : "Brie Cheese",
      "calories" : 77,
      "image" : "brie_cheese.png",
      "additionalPrice" : 0
    },
    {
      "id" : "provoloneCheese",
      "name" : "Provolone Cheese",
      "calories" : 85,
      "image" : "provolone_cheese.png",
      "additionalPrice" : 0
    }
  ],
  "sauce" : [
    {
      "id" : "aioli",
      "name" : "Aioli",
      "calories" : 65,
      "image" : "aioli_sauce.png",
      "additionalPrice" : 0
    },
    {
      "id" : "ketchup",
      "name" : "Ketchup",
      "calories" : 38,
      "image" : "ketchup_sauce.png",
      "additionalPrice" : 0
    },
    {
      "id" : "mustard",
      "name" : "Mustard",
      "calories" : 10,
      "image" : "musturd_sauce.png",
      "additionalPrice" : 0
    },
    {
      "id" : "mayonnaise",
      "name" : "Mayonnaise",
      "calories" : 70,
      "image" : "mayonnaise_sauce.png",
      "additionalPrice" : 0
    }
  ],
  "toppings" : [
    {
      "id" : "tomato",
      "name" : "Tomato Slices",
      "calories" : 11,
      "image" : "tomato_add1.png",
      "additionalPrice" : 0.25
    },
    {
      "id" : "onion",
      "name" : "Onion Slices",
      "calories" : 15,
      "image" : "onion_add1.png",
      "additionalPrice" : 0.25
    },
    {
      "id" : "carrot",
      "name" : "Carrot Slices",
      "calories" : 10,
      "image" : "carrot_add1.png",
      "additionalPrice" : 0.25
    },
    {
      "id" : "veggies",
      "name" : "Veggies",
      "calories" : 20,
      "image" : "veggies_add1.png",
      "additionalPrice" : 0.25
    }
  ],
  "addToppings" : [
    {
      "id" : "avacado",
      "name" : "Avacado",
      "calories" : 80,
      "image" : "avacado_add2.png",
      "additionalPrice" : 0.49
    },
    {
      "id" : "jalapenos",
      "name" : "Jalapenos",
      "calories" : 10,
      "image" : "jalapenos_add2.png",
      "additionalPrice" : 0.49
    },
    {
      "id" : "lettuce",
      "name" : "Lettuce",
      "calories" : 3,
      "image" : "lettuce_add2.png",
      "additionalPrice" : 0.49
    },
    {
      "id" : "grilledMushrooms",
      "name" : "Grilled Mushrooms",
      "calories" : 35,
      "image" : "grilled_mushrooms_add2.jpg",
      "additionalPrice" : 0.49
    }
  ],
  "burgerType" : [
    {
      "id" : "basic",
      "type" : "Basic",
      "name" : "BASIC",
      "calories" : "205 - 732",
      "price" : 4.99
    },
    {
      "id" : "healthy",
      "type" : "Healthy",
      "name" : "HEALTHY",
      "calories" : "157 - 732",
      "price" : 5.99
    },
    {
      "id" : "deluxe",
      "type" : "Deluxe",
      "name" : "DELUXE",
      "calories" : "157 - 741",
      "price" : 6.99
    },{
      "id" : "super",
      "type" : "Super",
      "name" : "SUPER",
      "calories" : "157 - 741",
      "price" : 7.99
    }
  ]
};

const buildFields = [
  {
    "type" : "Basic",
    "basePrice" : 4.99,
    "values" : [
      {
        "item" : "Bread Type",
        "question" : "Select the Bread Type",
        "subHead" : "Please select any one",
        "isMultiple" : false, //to check if we can select more than one option.
        "max" : 1, // to check how many one can select without extra price.
        "isExtra" : false, //to check is we can select more than max.
        "extraPrice" : -1, //Extra price for element 2 onwards (1 means arrays 2nd element)
        "subValues" : [CONSTANTS.breadType[0], CONSTANTS.breadType[1], CONSTANTS.breadType[2]]
      },
      {
        "item" : "Meat Type",
        "question" : "Select the Meat Type",
        "subHead" : "Please select any one, additional $0.75 for Chicken, Ham, Beef, Pork",
        "isMultiple" : false, //to check if we can select more than one option.
        "max" : 1, // to check how many one can select without extra price.
        "isExtra" : false, //to check is we can select more than max.
        "extraPrice" : 2, //Extra price for element 3 onwards (2 means array's 3rd element)
        "subValues" : CONSTANTS.meat
      },
      {
        "item" : "Cheese Type",
        "question" : "Select the Cheese Type",
        "subHead" : "Please select any one",
        "isMultiple" : false, //to check if we can select more than one option.
        "max" : 1, // to check how many one can select without extra price.
        "isExtra" : false, //to check is we can select more than max.
        "extraPrice" : -1, //Extra price for element 2 onwards (1 means arrays 2nd element)
        "subValues" : CONSTANTS.cheese
      },
      {
        "item" : "Sauce Type",
        "question" : "Select the Sauce Type",
        "subHead" : "Please select any number",
        "isMultiple" : true, //to check if we can select more than one option.
        "max" : 4, // to check how many one can select without extra price.
        "isExtra" : false, //to check is we can select more than max.
        "extraPrice" : -1, //Extra price for element 2 onwards (1 means arrays 2nd element)
        "subValues" : CONSTANTS.sauce
      },
      {
        "item" : "Toppings",
        "question" : "Select the Toppings",
        "subHead" : "Please select any two, additional $0.25 for extra toppings per each",
        "isMultiple" : true, //to check if we can select more than one option.
        "max" : 2, // to check how many one can select without extra price.
        "isExtra" : true, //to check is we can select more than max.
        "extraPrice" : -1, //Extra price for element 2 onwards (1 means arrays 2nd element)
        "subValues" : CONSTANTS.toppings
      },
      {
        "item" : "Additional Toppings",
        "question" : "Select the Additional Toppings",
        "subHead" : "Additional $0.49 per each",
        "isMultiple" : true, //to check if we can select more than one option.
        "max" : 0, // to check how many one can select without extra price.
        "isExtra" : true, //to check is we can select more than max.
        "extraPrice" : -1, //Extra price for element 2 onwards (1 means arrays 2nd element)
        "subValues" : CONSTANTS.addToppings
      }
    ]
  },
  {
    "type" : "Healthy",
    "basePrice" : 5.99,
    "values" : [
      {
        "item" : "Bread Type",
        "question" : "Select the Bread Type",
        "subHead" : "Please select any one",
        "isMultiple" : false, //to check if we can select more than one option.
        "max" : 1, // to check how many one can select without extra price.
        "isExtra" : false, //to check is we can select more than max.
        "extraPrice" : -1, //Extra price for element 2 onwards (1 means arrays 2nd element)
        "subValues" : [CONSTANTS.breadType[0], CONSTANTS.breadType[1], CONSTANTS.breadType[2], CONSTANTS.breadType[3]]
      },
      {
        "item" : "Meat Type",
        "question" : "Select the Meat Type",
        "subHead" : "Please select any one, additional $0.75 for Ham, Beef, Pork",
        "isMultiple" : false, //to check if we can select more than one option.
        "max" : 1, // to check how many one can select without extra price.
        "isExtra" : false, //to check is we can select more than max.
        "extraPrice" : 3, //Extra price for element 2 onwards (1 means arrays 2nd element)
        "subValues" : CONSTANTS.meat
      },
      {
        "item" : "Cheese Type",
        "question" : "Select the Cheese Type",
        "subHead" : "Please select any one",
        "isMultiple" : false, //to check if we can select more than one option.
        "max" : 1, // to check how many one can select without extra price.
        "isExtra" : false, //to check is we can select more than max.
        "extraPrice" : -1, //Extra price for element 2 onwards (1 means arrays 2nd element)
        "subValues" : CONSTANTS.cheese
      },
      {
        "item" : "Sauce Type",
        "question" : "Select the Sauce Type",
        "subHead" : "Please select any number",
        "isMultiple" : true, //to check if we can select more than one option.
        "max" : 4, // to check how many one can select without extra price.
        "isExtra" : false, //to check is we can select more than max.
        "extraPrice" : -1, //Extra price for element 2 onwards (1 means arrays 2nd element)
        "subValues" : CONSTANTS.sauce
      },
      {
        "item" : "Toppings",
        "question" : "Select the Toppings",
        "subHead" : "Please select any two, additional $0.25 for extra toppings per each",
        "isMultiple" : true, //to check if we can select more than one option.
        "max" : 2, // to check how many one can select without extra price.
        "isExtra" : true, //to check is we can select more than max.
        "extraPrice" : -1, //Extra price for element 2 onwards (1 means arrays 2nd element)
        "subValues" : CONSTANTS.toppings
      },
      {
        "item" : "Additional Toppings",
        "question" : "Select the Additional Toppings",
        "subHead" : "Please select any one, Additional $0.49 per each",
        "isMultiple" : true, //to check if we can select more than one option.
        "max" : 1, // to check how many one can select without extra price.
        "isExtra" : true, //to check is we can select more than max.
        "extraPrice" : -1, //Extra price for element 2 onwards (1 means arrays 2nd element)
        "subValues" : CONSTANTS.addToppings
      }
    ]
  },
  {
    "type" : "Deluxe",
    "basePrice" : 6.99,
    "values" : [
      {
        "item" : "Bread Type",
        "question" : "Select the Bread Type",
        "subHead" : "Please select any one",
        "isMultiple" : false, //to check if we can select more than one option.
        "max" : 1, // to check how many one can select without extra price.
        "isExtra" : false, //to check is we can select more than max.
        "extraPrice" : -1, //Extra price for element 2 onwards (1 means arrays 2nd element)
        "subValues" : [CONSTANTS.breadType[0], CONSTANTS.breadType[1], CONSTANTS.breadType[2], CONSTANTS.breadType[3], CONSTANTS.breadType[4], CONSTANTS.breadType[5]]
      },
      {
        "item" : "Meat Type",
        "question" : "Select the Meat Type",
        "subHead" : "Please select any one",
        "isMultiple" : false, //to check if we can select more than one option.
        "max" : 1, // to check how many one can select without extra price.
        "isExtra" : false, //to check is we can select more than max.
        "extraPrice" : -1, //Extra price for element 2 onwards (1 means arrays 2nd element)
        "subValues" : CONSTANTS.meat
      },
      {
        "item" : "Cheese Type",
        "question" : "Select the Cheese Type",
        "subHead" : "Please select any one",
        "isMultiple" : false, //to check if we can select more than one option.
        "max" : 1, // to check how many one can select without extra price.
        "isExtra" : false, //to check is we can select more than max.
        "extraPrice" : -1, //Extra price for element 2 onwards (1 means arrays 2nd element)
        "subValues" : CONSTANTS.cheese
      },
      {
        "item" : "Sauce Type",
        "question" : "Select the Sauce Type",
        "subHead" : "Please select any number",
        "isMultiple" : true, //to check if we can select more than one option.
        "max" : 4, // to check how many one can select without extra price.
        "isExtra" : false, //to check is we can select more than max.
        "extraPrice" : -1, //Extra price for element 2 onwards (1 means arrays 2nd element)
        "subValues" : CONSTANTS.sauce
      },
      {
        "item" : "Toppings",
        "question" : "Select the Toppings",
        "subHead" : "Please select any two, additional $0.25 for extra toppings per each",
        "isMultiple" : true, //to check if we can select more than one option.
        "max" : 2, // to check how many one can select without extra price.
        "isExtra" : true, //to check is we can select more than max.
        "extraPrice" : -1, //Extra price for element 2 onwards (1 means arrays 2nd element)
        "subValues" : CONSTANTS.toppings
      },
      {
        "item" : "Additional Toppings",
        "question" : "Select the Additional Toppings",
        "subHead" : "Please select any two, Additional $0.49 per each",
        "isMultiple" : true, //to check if we can select more than one option.
        "max" : 2, // to check how many one can select without extra price.
        "isExtra" : true, //to check is we can select more than max.
        "extraPrice" : -1, //Extra price for element 2 onwards (1 means arrays 2nd element)
        "subValues" : CONSTANTS.addToppings
      }
    ]
  },
  {
    "type" : "Super",
    "basePrice" : 7.99,
    "values" : [
      {
        "item" : "Bread Type",
        "question" : "Select the Bread Type",
        "subHead" : "Please select any one",
        "isMultiple" : false, //to check if we can select more than one option.
        "max" : 1, // to check how many one can select without extra price.
        "isExtra" : false, //to check is we can select more than max.
        "extraPrice" : -1, //Extra price for element 2 onwards (1 means arrays 2nd element)
        "subValues" : CONSTANTS.breadType
      },
      {
        "item" : "Meat Type",
        "question" : "Select the Meat Type",
        "subHead" : "Please select any one",
        "isMultiple" : false, //to check if we can select more than one option.
        "max" : 1, // to check how many one can select without extra price.
        "isExtra" : false, //to check is we can select more than max.
        "extraPrice" : -1, //Extra price for element 2 onwards (1 means arrays 2nd element)
        "subValues" : CONSTANTS.meat
      },
      {
        "item" : "Cheese Type",
        "question" : "Select the Cheese Type",
        "subHead" : "Please select any one",
        "isMultiple" : false, //to check if we can select more than one option.
        "max" : 1, // to check how many one can select without extra price.
        "isExtra" : false, //to check is we can select more than max.
        "extraPrice" : -1, //Extra price for element 2 onwards (1 means arrays 2nd element)
        "subValues" : CONSTANTS.cheese
      },
      {
        "item" : "Sauce Type",
        "question" : "Select the Sauce Type",
        "subHead" : "Please select any number",
        "isMultiple" : true, //to check if we can select more than one option.
        "max" : 4, // to check how many one can select without extra price.
        "isExtra" : false, //to check is we can select more than max.
        "extraPrice" : -1, //Extra price for element 2 onwards (1 means arrays 2nd element)
        "subValues" : CONSTANTS.sauce
      },
      {
        "item" : "Toppings",
        "question" : "Select the Toppings",
        "subHead" : "Please select any three, additional $0.25 for extra toppings per each",
        "isMultiple" : true, //to check if we can select more than one option.
        "max" : 3, // to check how many one can select without extra price.
        "isExtra" : true, //to check is we can select more than max.
        "extraPrice" : -1, //Extra price for element 2 onwards (1 means arrays 2nd element)
        "subValues" : CONSTANTS.toppings
      },
      {
        "item" : "Additional Toppings",
        "question" : "Select the Additional Toppings",
        "subHead" : "Please select any two, Additional $0.49 per each",
        "isMultiple" : true, //to check if we can select more than one option.
        "max" : 2, // to check how many one can select without extra price.
        "isExtra" : true, //to check is we can select more than max.
        "extraPrice" : -1, //Extra price for element 2 onwards (1 means arrays 2nd element)
        "subValues" : CONSTANTS.addToppings
      }
    ]
  }
];
@Injectable()
export class ConstantService {
  getConstants() {
    return CONSTANTS;
  }

  getHomeFields() {
    return CONSTANTS.homeFields;
  }

  getBurgerTypes() {
    return CONSTANTS.burgerType;
  }

  getBuildFields() {
    return buildFields;
  }
}
