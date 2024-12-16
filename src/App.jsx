import React, { useState } from "react";
import Output from "./components/Output";
import AddtheCoor from "./components/AddtheCoor";
const initialDatas = { name: "" };
function App() {
  const [datas, setDatas] = useState(initialDatas);
  const dataHandler = (d) => {
    console.log(d);
    setDatas({
      ...initialDatas,
      name: d.name,
      Temperature: d.Temperature,
      Pressure: d.Pressure,
      Weather: d.Weather,
    });
  };
  return (
    <>
      <AddtheCoor onData={dataHandler} />
      <Output data={datas} />
    </>
  );
}

export default App;
