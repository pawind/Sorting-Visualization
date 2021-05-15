import classes from "./Bar.module.css";

const bar = (props) => {
  const marginTop = props.displayHeight - props.barHeight;

  return (
    <span
      className={classes.bar}
      style={{ paddingTop: props.barHeight, marginTop: marginTop }}
    ></span>
  );
};

export default bar;
