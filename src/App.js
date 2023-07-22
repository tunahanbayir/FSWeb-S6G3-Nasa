import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import NasaInfo from "./components/NasaInfo";

const NASA_API_KEY = "HocascdCtJuWeeObAP3QJ6bFKgtfkk8Z9zo0GHx9"
function App() {
  const [nasaData, setNasaData] = useState({});

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`)
    .then((res) => {
      console.log("Nasa response: ", res.data);
      setNasaData(res.data);
    })
    .catch((err) => {
      console.err("Nasa API Error: ", err);
    })

  }, []);

  useEffect(() => {
    console.warn("Nasa Data Güncellendi", nasaData);
  },[nasaData]); 



  return (
    <div className="App">
      <p>
        NASA uygulamasını yapmak için README.md dosyasıdaki talimatları takip edin
		İyi eğlenceler! <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <NasaInfo nasaData={nasaData} />
    </div>
  );
}

export default App;
