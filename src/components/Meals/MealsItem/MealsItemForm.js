import classes from "./MealsItemForm.module.css";
import Input from "../../UI/Input";
const MealsItemForm = (props) => {
  return (
    <form className={classes.form}>
      <Input
        label="Quantity"
        input={{
          id: "quantity_",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button> + ADD</button>
    </form>
  );
};
export default MealsItemForm;
