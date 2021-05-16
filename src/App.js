import React, { useState, useEffect } from "react";

import ControlBar from "./components/ControlBar/ControlBar";
import SortingDisplay from "./components/SortingDisplay/SortingDisplay";

const App = () => {
  const [data, setData] = useState([]);
  const [barAmount, setBarAmount] = useState(0);
  const [newBarAmount, setNewBarAmount] = useState(0);

  const createData = () => {
    setData([]);
    if (newBarAmount === barAmount) {
      return;
    } else if (newBarAmount > barAmount) {
      //Some more Bars need to created
      for (let i = barAmount; i < newBarAmount; i++) {
        setData((prevData) => {
          let d = [...prevData];
          let random = Math.round(Math.random() * 800);
          d.push(random);
          return d;
        });
        setBarAmount(newBarAmount);
      }
    } else {
      for (let i = newBarAmount; i < barAmount; i++) {
        setData((prevData) => {
          let d = [...prevData];
          d.pop();
          return d;
        });
      }
      setBarAmount(newBarAmount);
    }
    console.log(data);
  };

  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const createBars = () => {
    setBarAmount(0);
    setNewBarAmount(randomIntFromInterval(90, 108));
  };

  useEffect(() => {
    createData();
  }, [newBarAmount]);

  return (
    <div className="App" style={{}}>
      <ControlBar
        amount={newBarAmount}
        handleAmountChange={setNewBarAmount}
        createBars={createBars}
      />
      <SortingDisplay data={data} />
    </div>
  );
};

export default App;
