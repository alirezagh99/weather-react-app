import React from "react";

function Output(props) {
  return (
    <div className="w-1/2 m-auto rounded bg-[#588c7e] mt-20 p-5">
      <div className="flex flex-row text-white font-semibold mb-5 justify-between text-xl">
        <h3>Location Name:</h3>
        <span className="border px-5 py-1 rounded">{props.data.name}</span>
      </div>
      <div className="flex flex-row text-white font-semibold mb-5  justify-between text-xl">
        <h3>Temperature:</h3>
        <span className="border px-5 py-1 rounded">
          {props.data.Temperature}
        </span>
      </div>
      <div className="flex flex-row text-white font-semibold mb-5  justify-between text-xl">
        <h3>Pressure:</h3>
        <span className="border px-5 py-1 rounded">{props.data.Pressure}</span>
      </div>
      <div className="flex flex-row text-white font-semibold mb-5  justify-between text-xl">
        <h3>Weather:</h3>
        <span className="border px-5 py-1 rounded">{props.data.Weather}</span>
      </div>
    </div>
  );
}

export default Output;
