import { Fragment } from "react";
import headerImage from "../../assets/food.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Food-on-Mood</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={headerImage} alt="Delicious Meals" />
      </div>
    </Fragment>
  );
};
export default Header;
