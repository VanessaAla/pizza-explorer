/*export const selectNumberOfPizzas = (reduxState) => {
  return reduxState.pizzas.allPizzas.length;
};

export const selectMostBoughtPizza = (reduxState) => {
  if (reduxState.pizzas.allPizzas.length === 0) {
    return null;
  }

  return reduxState.pizzas.allPizzas.reduce((mostBought, nextPizza) => {
    return mostBought.bought >= nextPizza.bought ? mostBought : nextPizza;
  });
};*/

//Define a selector to get the list of pizzas:
//export const selectPizzas = (reduxState) => reduxState.pizzas.allPizzas;

//sort the pizzas by their popularity (a.k.a. pizzas bought more often, are more popular)
/* BE CAREFUL HERE!!!!! The sort() method sorts the elements of an array "in place" and returns the sorted array. For this reason, I need to first CLONE my array -otherwise .sort will edit the state directly!!!*/
export const selectPizzas = (reduxState) => {
  const sortedPizzas = [...reduxState.pizzas.allPizzas];

  return sortedPizzas.sort((a, b) => {
    return b.bought - a.bought;
  });
};
