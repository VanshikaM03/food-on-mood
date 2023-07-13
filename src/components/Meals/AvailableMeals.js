import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealsItem from "./MealsItem/MealsItem";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Chole Bhature",
    description: "Punjab di Shaan",
    price: 200,
  },
  {
    id: "m2",
    name: "Onion Masala Dosa",
    description: "A South Indian specialty!",
    price: 150,
  },
  {
    id: "m3",
    name: "Gulab Jamun",
    description: "An exquisite desert",
    price: 120,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 100,
  },
];
const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealsItem
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};
export default AvailableMeals;
