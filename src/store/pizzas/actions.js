/*This action creator should accept name and description as parameters, and define an id for the pizza using Math.random()
This action creator should create an action with type pizzas/add*/

export const addPizza = ({ name, description }) => ({
  type: "pizzas/add",
  payload: {
    name,
    description,
    id: Math.random(),
  },
});
