import React, { useState } from "react";

import ControlBar from "./components/ControlBar/ControlBar";
import SortingDisplay from "./components/SortingDisplay/SortingDisplay";

const App = () => {
  const [data, setData] = useState([7, 8, 5, 1, 352, 75, 4, 2, 5, 35]);
  const [barAmount, setBarAmount] = useState(10);

  const createData = (amount) => {
    if(amount === barAmount){
      return;
    }
    else if (amount > barAmount) {                          //Some more Bars need to created
      for (let i = barAmount; i < amount; i++) {
       // console.log(i)
        setData((prevData) => {
          //console.log(prevData)
          let d = [...prevData];
          let random = Math.round(Math.random()*800);
          d.push(random);
          return d
        })
        setBarAmount(amount);
      }
    }else{
      console.log("gfieagfoijeaf")
      for(let i=amount; i<barAmount; i++){
        console.log(i)
        setData(prevData => {
          let d = [...prevData]
          d.pop()
          return d;
        })
      }
      setBarAmount(amount);
    }
  }

  return (
    <div className="App" style={{}}>
      <ControlBar />
      <SortingDisplay data={data} />
    </div>
  );
};

export default App;
