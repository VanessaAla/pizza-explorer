const initialState = {
  name: "Vanessa",
  id: 42,
  favorites: [67283, 357311],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    //Add a switch case to the user reducer that deals with these "user/toggleFavorite" type actions, and toggles whether the pizza in question is a favorite or not.
    case "user/toggleFavorite": {
      const id = action.payload;

      const favorites = state.favorites.includes(id) // check if we already have it
        ? state.favorites.filter((f) => f !== id) // remove
        : [...state.favorites, id]; // add

      return {
        ...state,
        favorites,
      };
    }

    default: {
      return state;
    }
  }
}
