import React, { useState } from "react";

import ControlBar from "./components/ControlBar/ControlBar";
import SortingDisplay from "./components/SortingDisplay/SortingDisplay";

const App = () => {
  const [data, setData] = useState([7, 8, 5, 1, 352, 75, 4, 2, 5, 35]);

  return (
    <div className="App" style={{}}>
      <ControlBar />
      <SortingDisplay data={data} />
    </div>
  );
};

export default App;
