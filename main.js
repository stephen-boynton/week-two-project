// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
console.log(data);



// 1: Show me how to calculate the average price of all items.
function question1 () {
  // Answer:
  let total = 0;
  for (var i = 0; i < data.length; i++) {
    total = total + data[i].price;
  }
  let average = total / data.length;
  console.log(average);
  return average;
}



// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2 () {
  // Answer:
  let items = [];
  for (var i = 0; i < data.length; i++) {
    if (data[i].price >= 14 && data[i].price <= 18) {
      items.push(data[i].title);
    }
  }
  console.log(items);
  return items;
}



// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3 () {
  // Answer:
  let gbpItems = { name: [], price: []};
  for (var i = 0; i < data.length; i++) {
    if(data[i].currency_code === "GBP") {
      gbpItems.name.push(data[i].title);
      gbpItems.price.push(data[i].price);
    }
  }
  console.log(gbpItems);
  return gbpItems;
}


// 4: Display a list of all items who are made of wood.
function question4 () {
  // Answer:
  let woodItems = [];
  for (let i = 0; i < data.length; i++) {
    if(data[i].materials.length > 0) {
      for (let r = 0; r < data[i].materials.length; r++) {
        if (data[i].materials[r] === "wood") {
          woodItems.push(data[i].title);
        }
      }
    }
  }
  console.log(woodItems);
  return woodItems;
}


// 5: Which items are made of eight or more materials?
//    Display the name, number of items and the items it is made of.
function question5 () {
  // Answer:
  let constructed = []
  let counter = 0;
  for (let i = 0; i < data.length; i ++) {
    if (data[i].materials.length >= 8) {
      constructed[counter] = {}
      constructed[counter].name = data[i].title;
      constructed[counter].noOfItems = data[i].materials.length;
      constructed[counter].materials = data[i].materials;
      counter += 1;
    }
  }
  console.log(constructed);
  return constructed;
}


// 6: How many items were made by their sellers?
// Answer:
function question6 () {
  // Answer:
  let userMade = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i].who_made === "i_did") {
      userMade += 1;
    }
  }
  console.log(userMade);
  return userMade;
}
