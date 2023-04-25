import classes from "./Header.module.css";
import { Fragment } from "react";
import mealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton onClose={props.onClose}/>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="image"></img>
      </div>
    </Fragment>
  );
};
export default Header;
