import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../store/user/selectors";
import { selectPizzas } from "../store/pizzas/selectors";
import { toggleFavorite } from "../store/user/actions";

export default function PizzaList() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const pizzas = useSelector(selectPizzas);

  return (
    <div>
      <h1>Pizza Explorer</h1>
      <p>
        Welcome back, <strong>{user.name}</strong>! There are{" "}
        <strong>{pizzas.length}</strong> pizzas in total:
      </p>
      <ul>
        {pizzas.map((pizza) => (
          <li key={pizza.id}>
            <button
              onClick={() => {
                dispatch(toggleFavorite(pizza.id));
              }}
            >
              {user.favorites.includes(pizza.id) ? "♥" : "♡"}
            </button>
            <strong>{pizza.name}</strong> ({pizza.description}) <br />
            <em>Bought {pizza.bought} times</em>
          </li>
        ))}
      </ul>
    </div>
  );
}
