import "./App.css";
import RestaurantList from "./components/RestaurantList";
import PizzaList from "./components/PizzaList";
import AddPizzaForm from "./components/AddPizzaForm";

function App() {
  return (
    <div className="App">
      <PizzaList />
      <AddPizzaForm />
      <RestaurantList />
    </div>
  );
}

export default App;
