const controlBar = (props) => {
  return (
    <div>
      {/* <input
        type="range"
        step="10"
        min="0"
        max="120"
        value={props.amount}
        onInput={(e) => props.handleAmountChange(e.target.value)}
      ></input> */}
      {/* Slider Solution */}

      <input type="button" value="Create" onClick={props.createBars} />
    </div>
  );
};

export default controlBar;
