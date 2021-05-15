import Bar from "./Bar";

import classes from "./SortingDisplay.module.css";

const sortingDisplay = (props) => {
  const displayHeight = 900;
  let displayHeightCss = displayHeight + "" + "px";

  return (
    <div
      className={classes.sortingDisplay}
      style={{ height: displayHeightCss }}
    >
      {props.data.map((barHeight) => {
        return <Bar barHeight={barHeight} displayHeight={displayHeight} />;
      })}
    </div>
  );
};

export default sortingDisplay;
