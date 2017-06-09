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
      "name" : "Plain Bread",
      "calories" : 115,
      "image" : "plain_bread.png",
      "additional-price" : 0
    },
    {
      "name" : "Plain Bread With Sesame",
      "calories" : 155,
      "image" : "plain_bread_sesame.png",
      "additional-price" : 0
    },
    {
      "name" : "Brioche",
      "calories" : 177,
      "image" : "brioche_bread.png",
      "additional-price" : 0
    },
    {
      "name" : "English Muffin",
      "calories" : 67,
      "image" : "english_muffin_bread.png",
      "additional-price" : 0
    },
    {
      "name" : "Pretzel Roll",
      "calories" : 165,
      "image" : "pretzel_bread.png",
      "additional-price" : 0
    },
    {
      "name" : "Torta Roll",
      "calories" : 186,
      "image" : "torta_roll_bread.png",
      "additional-price" : 0
    },
    {
      "name" : "Challah Roll",
      "calories" : 128,
      "image" : "torta_bread.png",
      "additional-price" : 0
    },
    {
      "name" : "Rye Bread",
      "calories" : 103,
      "image" : "rye_bread.png",
      "additional-price" : 0
    }
  ],
  "meat" : [
    {
      "name" : "Vegan",
      "calories" : 80,
      "image" : "vegan_meat.png",
      "additional-price" : 0
    },
    {
      "name" : "Egg",
      "calories" : 90,
      "image" : "egg_meat.png",
      "additional-price" : 0
    },
    {
      "name" : "Chicken",
      "calories" : 100,
      "image" : "chicken_meat.png",
      "additional-price" : 0.75
    },
    {
      "name" : "Ham",
      "calories" : 105,
      "image" : "ham_meat.jpg",
      "additional-price" : 0.75
    },
    {
      "name" : "Beef",
      "calories" : 110,
      "image" : "beef_meat.png",
      "additional-price" : 0.75
    },
    {
      "name" : "Pork",
      "calories" : 110,
      "image" : "pork_meat.png",
      "additional-price" : 0.75
    }
  ],
  "cheese" : [
    {
      "name" : "None",
      "calories" : 0,
      "image" : "none.png",
      "additional-price" : 0
    },
    {
      "name" : "Cheddar Cheese",
      "calories" : 113,
      "image" : "cheddar_cheese.png",
      "additional-price" : 0
    },
    {
      "name" : "Blue Cheese",
      "calories" : 80,
      "image" : "blue_cheese.png",
      "additional-price" : 0
    },
    {
      "name" : "Swiss Cuisine",
      "calories" : 106,
      "image" : "swiss_cusine_cheese.png",
      "additional-price" : 0
    },
    {
      "name" : "Brie Cheese",
      "calories" : 77,
      "image" : "brie_cheese.png",
      "additional-price" : 0
    },
    {
      "name" : "Provolone Cheese",
      "calories" : 85,
      "image" : "provolone_cheese.png",
      "additional-price" : 0
    }
  ],
  "sauce" : [
    {
      "name" : "Aioli",
      "calories" : 65,
      "image" : "aioli_sauce.png",
      "additional-price" : 0
    },
    {
      "name" : "Ketchup",
      "calories" : 38,
      "image" : "ketchup_sauce.png",
      "additional-price" : 0
    },
    {
      "name" : "Mustard",
      "calories" : 10,
      "image" : "musturd_sauce.png",
      "additional-price" : 0
    },
    {
      "name" : "Mayonnaise",
      "calories" : 70,
      "image" : "mayonnaise_sauce.png",
      "additional-price" : 0
    }
  ],
  "toppings" : [
    {
      "name" : "Tomato Slices",
      "calories" : 11,
      "image" : "tomato_add1.png",
      "additional-price" : 0.25
    },
    {
      "name" : "Onion Slices",
      "calories" : 15,
      "image" : "onion_add1.png",
      "additional-price" : 0.25
    },
    {
      "name" : "Carrot Slices",
      "calories" : 10,
      "image" : "carrot_add1.png",
      "additional-price" : 0.25
    },
    {
      "name" : "Veggies",
      "calories" : 20,
      "image" : "veggies_add1.png",
      "additional-price" : 0.25
    }
  ],
  "addToppings" : [
    {
      "name" : "Avacado",
      "calories" : 80,
      "image" : "avacado_add2.png",
      "additional-price" : 0.49
    },
    {
      "name" : "Jalapenos",
      "calories" : 10,
      "image" : "jalapenos_add2.png",
      "additional-price" : 0.49
    },
    {
      "name" : "Lettuce",
      "calories" : 3,
      "image" : "lettuce_add2.png",
      "additional-price" : 0.49
    },
    {
      "name" : "Grilled Mushrooms",
      "calories" : 35,
      "image" : "grilled_mushrooms_add2.jpg",
      "additional-price" : 0.49
    }
  ]
};

const buildFields = [
  {
    "type" : "Basic",
    "base-price" : 4.99,
    "values" : [
      {
        "item" : "Bread Type",
        "question" : "Select the Bread Type",
        "sub-head" : "Please select any one",
        "isMultiple" : false, //to check if we can select more than one option.
        "max" : 1, // to check how many one can select without extra price.
        "isExtra" : false, //to check is we can select more than max.
        "extraPrice" : -1, //Extra price for element 2 onwards (1 means arrays 2nd element)
        "sub-values" : [CONSTANTS.breadType[0], CONSTANTS.breadType[1], CONSTANTS.breadType[2]]
      },
      {
        "item" : "Meat Type",
        "question" : "Select the Meat Type",
        "sub-head" : "Please select any one, additional $0.75 for Chicken, Ham, Beef, Pork",
        "isMultiple" : false, //to check if we can select more than one option.
        "max" : 1, // to check how many one can select without extra price.
        "isExtra" : false, //to check is we can select more than max.
        "extraPrice" : 2, //Extra price for element 3 onwards (2 means array's 3rd element)
        "sub-values" : [CONSTANTS.meat]
      },
      {
        "item" : "Cheese Type",
        "question" : "Select the Cheese Type",
        "sub-head" : "Please select any one",
        "isMultiple" : false, //to check if we can select more than one option.
        "max" : 1, // to check how many one can select without extra price.
        "isExtra" : false, //to check is we can select more than max.
        "extraPrice" : -1, //Extra price for element 2 onwards (1 means arrays 2nd element)
        "sub-values" : [CONSTANTS.cheese]
      },
      {
        "item" : "Sauce Type",
        "question" : "Select the Sauce Type",
        "sub-head" : "Please select any number",
        "isMultiple" : true, //to check if we can select more than one option.
        "max" : 4, // to check how many one can select without extra price.
        "isExtra" : false, //to check is we can select more than max.
        "extraPrice" : -1, //Extra price for element 2 onwards (1 means arrays 2nd element)
        "sub-values" : [CONSTANTS.sauce]
      },
      {
        "item" : "Toppings",
        "question" : "Select the Toppings",
        "sub-head" : "Please select any two, additional $0.25 for extra toppings per each",
        "isMultiple" : true, //to check if we can select more than one option.
        "max" : 2, // to check how many one can select without extra price.
        "isExtra" : true, //to check is we can select more than max.
        "extraPrice" : -1, //Extra price for element 2 onwards (1 means arrays 2nd element)
        "sub-values" : [CONSTANTS.toppings]
      },
      {
        "item" : "Additional Toppings",
        "question" : "Select the Additional Toppings",
        "sub-head" : "Additional $0.49 per each",
        "isMultiple" : true, //to check if we can select more than one option.
        "max" : 0, // to check how many one can select without extra price.
        "isExtra" : true, //to check is we can select more than max.
        "extraPrice" : -1, //Extra price for element 2 onwards (1 means arrays 2nd element)
        "sub-values" : [CONSTANTS.addToppings]
      }
    ]
  },
  {
    "type" : "Healthy",
    "base-price" : 5.99,
    "values" : [
      {
        "item" : "Bread Type",
        "question" : "Select the Bread Type",
        "sub-head" : "Please select any one",
        "isMultiple" : false, //to check if we can select more than one option.
        "max" : 1, // to check how many one can select without extra price.
        "isExtra" : false, //to check is we can select more than max.
        "extraPrice" : -1, //Extra price for element 2 onwards (1 means arrays 2nd element)
        "sub-values" : [CONSTANTS.breadType[0], CONSTANTS.breadType[1], CONSTANTS.breadType[2], CONSTANTS.breadType[3]]
      },
      {
        "item" : "Meat Type",
        "question" : "Select the Meat Type",
        "sub-head" : "Please select any one, additional $0.75 for Ham, Beef, Pork",
        "isMultiple" : false, //to check if we can select more than one option.
        "max" : 1, // to check how many one can select without extra price.
        "isExtra" : false, //to check is we can select more than max.
        "extraPrice" : 3, //Extra price for element 2 onwards (1 means arrays 2nd element)
        "sub-values" : [CONSTANTS.meat]
      },
      {
        "item" : "Cheese Type",
        "question" : "Select the Cheese Type",
        "sub-head" : "Please select any one",
        "isMultiple" : false, //to check if we can select more than one option.
        "max" : 1, // to check how many one can select without extra price.
        "isExtra" : false, //to check is we can select more than max.
        "extraPrice" : -1, //Extra price for element 2 onwards (1 means arrays 2nd element)
        "sub-values" : [CONSTANTS.cheese]
      },
      {
        "item" : "Sauce Type",
        "question" : "Select the Sauce Type",
        "sub-head" : "Please select any number",
        "isMultiple" : true, //to check if we can select more than one option.
        "max" : 4, // to check how many one can select without extra price.
        "isExtra" : false, //to check is we can select more than max.
        "extraPrice" : -1, //Extra price for element 2 onwards (1 means arrays 2nd element)
        "sub-values" : [CONSTANTS.sauce]
      },
      {
        "item" : "Toppings",
        "question" : "Select the Toppings",
        "sub-head" : "Please select any two, additional $0.25 for extra toppings per each",
        "isMultiple" : true, //to check if we can select more than one option.
        "max" : 2, // to check how many one can select without extra price.
        "isExtra" : true, //to check is we can select more than max.
        "extraPrice" : -1, //Extra price for element 2 onwards (1 means arrays 2nd element)
        "sub-values" : [CONSTANTS.toppings]
      },
      {
        "item" : "Additional Toppings",
        "question" : "Select the Additional Toppings",
        "sub-head" : "Please select any one, Additional $0.49 per each",
        "isMultiple" : true, //to check if we can select more than one option.
        "max" : 1, // to check how many one can select without extra price.
        "isExtra" : true, //to check is we can select more than max.
        "extraPrice" : -1, //Extra price for element 2 onwards (1 means arrays 2nd element)
        "sub-values" : [CONSTANTS.addToppings]
      }
    ]
  },
  {
    "type" : "Deluxe",
    "base-price" : 6.99,
    "values" : [
      {
        "item" : "Bread Type",
        "question" : "Select the Bread Type",
        "sub-head" : "Please select any one",
        "isMultiple" : false, //to check if we can select more than one option.
        "max" : 1, // to check how many one can select without extra price.
        "isExtra" : false, //to check is we can select more than max.
        "extraPrice" : -1, //Extra price for element 2 onwards (1 means arrays 2nd element)
        "sub-values" : [CONSTANTS.breadType[0], CONSTANTS.breadType[1], CONSTANTS.breadType[2], CONSTANTS.breadType[3], CONSTANTS.breadType[4], CONSTANTS.breadType[5]]
      },
      {
        "item" : "Meat Type",
        "question" : "Select the Meat Type",
        "sub-head" : "Please select any one",
        "isMultiple" : false, //to check if we can select more than one option.
        "max" : 1, // to check how many one can select without extra price.
        "isExtra" : false, //to check is we can select more than max.
        "extraPrice" : -1, //Extra price for element 2 onwards (1 means arrays 2nd element)
        "sub-values" : [CONSTANTS.meat]
      },
      {
        "item" : "Cheese Type",
        "question" : "Select the Cheese Type",
        "sub-head" : "Please select any one",
        "isMultiple" : false, //to check if we can select more than one option.
        "max" : 1, // to check how many one can select without extra price.
        "isExtra" : false, //to check is we can select more than max.
        "extraPrice" : -1, //Extra price for element 2 onwards (1 means arrays 2nd element)
        "sub-values" : [CONSTANTS.cheese]
      },
      {
        "item" : "Sauce Type",
        "question" : "Select the Sauce Type",
        "sub-head" : "Please select any number",
        "isMultiple" : true, //to check if we can select more than one option.
        "max" : 4, // to check how many one can select without extra price.
        "isExtra" : false, //to check is we can select more than max.
        "extraPrice" : -1, //Extra price for element 2 onwards (1 means arrays 2nd element)
        "sub-values" : [CONSTANTS.sauce]
      },
      {
        "item" : "Toppings",
        "question" : "Select the Toppings",
        "sub-head" : "Please select any two, additional $0.25 for extra toppings per each",
        "isMultiple" : true, //to check if we can select more than one option.
        "max" : 2, // to check how many one can select without extra price.
        "isExtra" : true, //to check is we can select more than max.
        "extraPrice" : -1, //Extra price for element 2 onwards (1 means arrays 2nd element)
        "sub-values" : [CONSTANTS.toppings]
      },
      {
        "item" : "Additional Toppings",
        "question" : "Select the Additional Toppings",
        "sub-head" : "Please select any two, Additional $0.49 per each",
        "isMultiple" : true, //to check if we can select more than one option.
        "max" : 2, // to check how many one can select without extra price.
        "isExtra" : true, //to check is we can select more than max.
        "extraPrice" : -1, //Extra price for element 2 onwards (1 means arrays 2nd element)
        "sub-values" : [CONSTANTS.addToppings]
      }
    ]
  },
  {
    "type" : "Super",
    "base-price" : 7.99,
    "values" : [
      {
        "item" : "Bread Type",
        "question" : "Select the Bread Type",
        "sub-head" : "Please select any one",
        "isMultiple" : false, //to check if we can select more than one option.
        "max" : 1, // to check how many one can select without extra price.
        "isExtra" : false, //to check is we can select more than max.
        "extraPrice" : -1, //Extra price for element 2 onwards (1 means arrays 2nd element)
        "sub-values" : [CONSTANTS.breadType]
      },
      {
        "item" : "Meat Type",
        "question" : "Select the Meat Type",
        "sub-head" : "Please select any one",
        "isMultiple" : false, //to check if we can select more than one option.
        "max" : 1, // to check how many one can select without extra price.
        "isExtra" : false, //to check is we can select more than max.
        "extraPrice" : -1, //Extra price for element 2 onwards (1 means arrays 2nd element)
        "sub-values" : [CONSTANTS.meat]
      },
      {
        "item" : "Cheese Type",
        "question" : "Select the Cheese Type",
        "sub-head" : "Please select any one",
        "isMultiple" : false, //to check if we can select more than one option.
        "max" : 1, // to check how many one can select without extra price.
        "isExtra" : false, //to check is we can select more than max.
        "extraPrice" : -1, //Extra price for element 2 onwards (1 means arrays 2nd element)
        "sub-values" : [CONSTANTS.cheese]
      },
      {
        "item" : "Sauce Type",
        "question" : "Select the Sauce Type",
        "sub-head" : "Please select any number",
        "isMultiple" : true, //to check if we can select more than one option.
        "max" : 4, // to check how many one can select without extra price.
        "isExtra" : false, //to check is we can select more than max.
        "extraPrice" : -1, //Extra price for element 2 onwards (1 means arrays 2nd element)
        "sub-values" : [CONSTANTS.sauce]
      },
      {
        "item" : "Toppings",
        "question" : "Select the Toppings",
        "sub-head" : "Please select any three, additional $0.25 for extra toppings per each",
        "isMultiple" : true, //to check if we can select more than one option.
        "max" : 3, // to check how many one can select without extra price.
        "isExtra" : true, //to check is we can select more than max.
        "extraPrice" : -1, //Extra price for element 2 onwards (1 means arrays 2nd element)
        "sub-values" : [CONSTANTS.toppings]
      },
      {
        "item" : "Additional Toppings",
        "question" : "Select the Additional Toppings",
        "sub-head" : "Please select any two, Additional $0.49 per each",
        "isMultiple" : true, //to check if we can select more than one option.
        "max" : 2, // to check how many one can select without extra price.
        "isExtra" : true, //to check is we can select more than max.
        "extraPrice" : -1, //Extra price for element 2 onwards (1 means arrays 2nd element)
        "sub-values" : [CONSTANTS.addToppings]
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
}
