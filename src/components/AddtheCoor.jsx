import React, { useEffect, useRef, useState } from "react";
const myKey = "54c0faf531e241aa118bacaee4eae6e9";
function AddtheCoor(props) {
  const [isValid, setIsValid] = useState(true);
  const latInputRef = useRef();
  const lonInputRef = useRef();
  const [datas, setDatas] = useState({});
  const showHandler = (e) => {
    e.preventDefault();

    const lat = parseInt(latInputRef.current.value);
    const lon = parseInt(lonInputRef.current.value);
    console.log("lat", lat);
    console.log("lon", lon);
    if (!isNaN(lat) && !isNaN(lon)) {
      setIsValid(true);
      async function getData() {
        let response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latInputRef.current.value}&lon=${lonInputRef.current.value}&appid=${myKey}&units=metric`
        );
        const data = await response.json();
        console.log("data: ", data);
        setDatas({ name: data.name, Temperature: data.main.feels_like });
        props.onData({
          name: data.name,
          Temperature: data.main.feels_like,
          Pressure: data.main.pressure,
          Weather: data.weather[0].description,
        });
      }
      getData();
    } else {
      setIsValid(false);
    }
  };

  return (
    <form
      onSubmit={showHandler}
      className="w-1/2 m-auto border rounded mt-10  bg-[#588c7e]"
    >
      <div className="px-4 mt-5 flex flex-row justify-around mb-10">
        <label className="font-bold text-lg text-white" htmlFor="lat">
          Enter the latitude:
        </label>
        <input
          ref={latInputRef}
          className="px-3"
          id="lat"
          type="text"
          defaultValue={35.700891}
        />
      </div>
      <div className="px-4 mb-5 flex flex-row justify-around">
        <label className="font-bold text-lg text-white" htmlFor="lon">
          Enter the longitude:
        </label>
        <input
          ref={lonInputRef}
          className="px-3"
          id="lon"
          type="text"
          defaultValue={51.4181}
        />
      </div>
      {!isValid && (
        <div className="text-red-500 text-center text-lg mt-5">
          Please enter a valid coordination
        </div>
      )}
      <div className="text-center mt-10 mb-5">
        <button
          type="submit"
          className="text-white px-5 py-1 bg-[#96ceb4] hover:bg-[#293932] transition-all rounded"
        >
          Show
        </button>
      </div>
    </form>
  );
}

export default AddtheCoor;
