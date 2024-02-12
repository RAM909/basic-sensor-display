import logo from './logo.svg';
import React, { useEffect, useState, useRef } from "react";
import axios from 'axios';
import './App.css';

const host = "http://localhost:5000"
// const Data=()=>{
// const [data, setData] = useState([]);

// useEffect(() => {
//   axios
//     .get(`${host}/api/patient`)
//     .then((response) => {
//       console.log(response.data);
//       setData(response.data);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }, []);
// console.log(data)
// }



function App() {
  const [id, setId] = useState([]);
  const [temp, setTemp] = useState([]);
  const [oxy, setOxy] = useState([]);
  const [fall, setFall] = useState([]);
  const [pulse, setPulse] = useState([]);

  useEffect(() => {
    axios
      .get(`${host}/data`)
      .then((response) => {
        console.log(response.data);
        setTemp(response.data[0].temperature);
        setOxy(response.data[0].spo2);
        setFall(response.data[0].fall_detected);
        setPulse(response.data[0].pulse_rate);
        setId(response.data[0].id)

      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // const id = data[0].id;

  return (
    <>
      <header>
        <h2>IOT HealthCare Device</h2>
      </header>

      <table>
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>Temperature</th>
            <th>SpO2</th>
            <th>Pulse Rate</th>
            <th>Fall Detected</th>
          </tr>
        </thead>
        <tbody>

          <tr>
            <td>{"1"}</td>
            <td>{temp}</td>
            <td>{oxy}</td>
            <td>{pulse}</td>
            <td>{fall}</td>
          </tr>

        </tbody>
      </table>
    </>
  );
}

export default App;
