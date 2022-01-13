import React, {useEffect, useState} from 'react';

import "./App.css"
const App = () => {
  let [flightsList,setFlightsList] = useState([]);
    useEffect(()=>{
      fetch("https://api.spacexdata.com/v3/launches/")
          .then(value => value.json())
          .then(flights => {
            setFlightsList(flights.filter(flight=>flight.launch_year!=='2020'));
          })
  },[])
    return (
      <div>
          {
              flightsList.map(value => <div className="block" key={value.flight_number}>
                  <div><h2>{value.launch_year}</h2>
                  <h1>{value.mission_name}</h1> </div>
                  <img src={value.links.mission_patch} alt="mission_patch"/>
              </div>)
          }
      </div>
  );
};

export default App;
