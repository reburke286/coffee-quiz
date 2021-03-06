const questions = [
  // {
  //   title: "How many pumps of syrup go in a small vanilla latte?",
  //   choices: {
  //     a: 1,
  //     b: 2,
  //     c: 3,
  //     d: 4,
  //   },
  //   answer: 3,
  //   wrong: "Sorry, this is incorrect!",
  //   right: "Good job! Medium is 4 and Large is 5",
  // },
  // {
  //   title: "Which of these is not an ingredient in a cappuccino?",
  //   choices: {
  //     a: "espresso",
  //     b: "milk",
  //     c: "foam",
  //     d: "syrup",
  //   },
  //   answer: "syrup",
  //   right: "Good job! Syrup can be added, but it's not in the basic recipe.",
  // },

  // {
  //   title: "How many ounces of Half & Half does a large Black Tie get?",
  //   choices: {
  //     a: 0.5,
  //     b: 1,
  //     c: 1.5,
  //     d: 2,
  //   },
  //   answer: 0.5,
  //   wrong: "Sorry, this is incorrect!",
  //   right: "Good job! Every size gets only half an ounce of Half & Half",
  // },
  // {
  //   title:
  //     "What is the ideal range of seconds for a double espresso (2 ounces) to pull?",
  //   choices: {
  //     a: "15-20",
  //     b: "18-23",
  //     c: "20-25",
  //     d: "25-30",
  //   },
  //   answer: "25-30",
  //   wrong: "Sorry, this is incorrect!",
  //   right:
  //     "Good job! The perfect shot is 28 seconds, but anything within the range is acceptable.",
  // },
  // {
  //   title: "What are the two ingredients of a caffe con panna?",
  //   choices: {
  //     a: "espresso and whipped cream",
  //     b: "espresso and creamy foam",
  //     c: "espresso and 2 ounces of hot water",
  //     d: "espresso and 1 pump of mocha",
  //   },
  //   answer: "espresso and whipped cream",
  //   wrong: "Sorry, this is incorrect!",
  //   right:
  //     "Good job! This drink isn't ordered much, which is too bad because it's so easy!",
  // },
  // {
  //   title: "Which of these drinks is made with whole milk?",
  //   choices: {
  //     a: "Cortado",
  //     b: "Mocha",
  //     c: "Trad Capp",
  //     d: "Caffe Macchiato",
  //   },
  //   answer: "Cortado",
  //   wrong: "Sorry, this is incorrect!",
  //   right:
  //     "Good job! This is the only hot drink on our menu that is made with whole milk by default.",
  // },
  // {
  //   title: "What is the ideal milk temperature for a latte?",
  //   choices: {
  //     a: 140,
  //     b: 150,
  //     c: 160,
  //     d: 170,
  //   },
  //   answer: 150,
  //   wrong: "Sorry, this is incorrect!",
  //   right:
  //     "Good job! Turning off the steam wand between 120 and 130 should get you to 150, but be sure to let it sit for a moment so you can see where it stops.",
  // },
  // {
  //   title: "How many ounces of chai do you pour for a large Chai Latte?",
  //   choices: { a: 2, b: 3, c: 4, d: 5 },
  //   answer: 4,
  //   wrong: "Sorry, this is incorrect!",
  //   right: "Good job! Small is 1/3 cup and Medium is 3 ounces.",
  // },
  // {
  //   title:
  //     "How many ounces of condensed milk goes in a medium Havana Cappuccino?",
  //   choices: { a: 1, b: 2, c: 3, d: 4 },
  //   answer: 1,
  //   wrong: "Sorry, this is incorrect!",
  //   right: "Good job! In fact, every size only gets 1 ounce.",
  // },
  // {
  //   title: "Which of these is not an ingredient in a Dark Chocolate Mocha?",
  //   choices: {
  //     a: "whipped cream",
  //     b: "vanilla syrup",
  //     c: "unsweetened cocoa powder",
  //     d: "simple syrup",
  //   },
  //   answer: "vanilla syrup",
  //   wrong: "Sorry, this is incorrect!",
  //   right:
  //     "Good job! This drink gets mocha, simple syrup, unsweetened cocoa powder steamed or blended into the milk, and on top is whipped cream with a cocoa powder dusting!",
  // },
  // {
  //   title: "What is unique about a Caramel Macchiato's espress shots?",
  //   choices: {
  //     a: "it's always one less",
  //     b: "it's a short pull",
  //     c: "it's a long pull",
  //     d: "it's always one more",
  //   },
  //   answer: "it's a short pull",
  //   wrong: "Sorry, this is incorrect!",
  //   right:
  //     "Good job! Additionally, the Trad Capp, Latte Macchiato, Cortado, and Caffe Machiatto are all short pull (or ristretto) shots.",
  // },
  // {
  //   title: "How many shots of espresso go in a medium iced Americano?",
  //   choices: { a: 1, b: 2, c: 3, d: 4 },
  //   answer: 3,
  //   wrong: "Sorry, this is incorrect!",
  //   right: "Good job! Both the Medium and Large come with 3 shots.",
  // },
  // {
  //   title: "How many ounces of cold brew go in a small cold brew oat latte?",
  //   choices: { a: 0, b: 1, c: 2, d: 3 },
  //   answer: 0,
  //   wrong: "Sorry, this is incorrect!",
  //   right:
  //     "Good job! This was a tricky one! The small cold brew oat latte gets 2 ounces of cold brew concentrate, not regular cold brew.",
  // },
  // {
  //   title: "Which of these drinks do not come with whipped cream?",
  //   choices: {
  //     a: "Mocha",
  //     b: "Hot Chocolate",
  //     c: "Caffe Con Panna",
  //     d: "Caramel Macchiato",
  //   },
  //   answer: "Caramel Macchiato",
  //   wrong: "Sorry, this is incorrect!",
  //   right:
  //     "Good job! The Caramel Macchiato gets a swirl of caramel drizzle on top, not whipped cream.",
  // },
  // {
  //   title: "How many ounces of cold brew concetrate goes in a large Frappe?",
  //   choices: { a: 2, b: 3, c: 4, d: 5 },
  //   answer: 3,
  //   wrong: "Sorry, this is incorrect!",
  //   right: "Good job! A small gets 1.5 ounces and a medium gets 2 ounces.",
  // },
  // {
  //   title: "How many pumps of blended base goes in a medium Frappe?",
  //   choices: { a: 1, b: 2, c: 3, d: 4 },
  //   answer: 3,
  //   wrong: "Sorry, this is incorrect!",
  //   right: "Good job! A small gets 2 and a large gets 4.",
  // },
  {
    title: "What goes on top of a Caramel Frappe?",
    choices: {
      a: "whipped cream",
      b: "nothing",
      c: "whipped cream, caramel drizzle and chococlate drizzel",
      d: "whipped cream and caramel drizzle",
    },
    answer: "d",
    wrong: "Sorry, this is incorrect!",
    right:
      "Good job! It also gets a pump of Caramel Sauce at the bottom of the cup.",
  },
  {
    title:
      "If someone wants 'light' or 'extra' of an ingredient, how do we calculate that?",
    choices: {
      a: "Light is 1 less and extra is 1 more",
      b: "Light is 2 less and extra is 2 more",
      c: "Light is half the amount and extra is 1.5 times more",
      d: "Light is half the amount and extra is double the amount",
    },
    answer: "c",
    wrong: "Sorry, this is incorrect!",
    right:
      "Good job! If someone wanted a Small Vanilla Latte with light syrup, it'd be 1.5 pumps. If they wanted it with extra, it'd be 4.5 pumps.",
  },
  {
    title: "What sauce goes in a Chocolate & Caramel Swirl Frappe?",
    choices: {
      a: "Just mocha",
      b: "Just caramel",
      c: "Mocha and caramel",
      d: "Mocha, caramel, and one pump of vanilla",
    },
    answer: "b",
    wrong: "Sorry, this is incorrect!",
    right:
      "Good job! Chocolate drizzle goes in the cup and on the whipped cream, but does not go IN the Frappe itself.",
  },
  {
    title: "What is the ideal temperature when steaming non-dairy milking?",
    choices: { a: 120, b: 130, c: 140, d: 150 },
    answer: "c",
    wrong: "Sorry, this is incorrect!",
    right:
      "Good job! Dairy milk needs to steam hotter than non-dairy, because we need to ensure we're killing off any hazardous bacteria. Non-dairy milks do not have this issue.",
  },
  {
    title: "How many pumps of mocha go in a Kids Hot Chocolate?",
    choices: { a: 1, b: 2, c: 3, d: 4 },
    answer: "b",
    wrong: "Sorry, this is incorrect!",
    right:
      "Good job! This is a tricky one, because it's different from the Mocha. For Hot Chocolates, the small gets 3, medium gets 4, and large gets 5.",
  },
];
