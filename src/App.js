import React  from "react";

import './App.css';

function App() {
  return (
    <div className="main">
     <header>
       <h1>Edvora</h1>
       <h3>Khushbu</h3>
       <div className="status">
       <div className="profile-pic">
       </div>
       </div>
       </header>
       <section>
       <nav >
              <a className="one"href="#nearest">Nearest Rides</a>
              <a className="two"href="#upcoming">Upcoming Rides (4)</a>
              <a className="three"href="#past">Past Rides (2)</a>
              </nav>
              <div className="filter">Filter</div>
       </section>
       <div className="first">
         <div id="img2">
         </div>
         <div className="content">
          <p> Ride Id : 002 </p>
          <p> Origin Station : 20</p>
          <p> station_path : [20, 39, 40, 42, 54, 63, 72, 88, 98]</p>
          <p> Date : 15th Feb 2022 16:33</p>
          <p> Distance : 0</p> 
            </div>
            <div className="name">
            <div className="city">
             State Name       
            </div>
            
            <div className="state">
              City Name
            </div>
          
            </div>
           
       </div>
       <div className="second">
       <div id="img3">
         </div>
         <div className="content">
        <p> Ride Id : 003</p>
        <p>Origin Station : 13</p>
        <p>station_path: [13, 25, 41, 48, 59, 64, 75, 81, 91]</p>
        <p>Date: 15th Feb 2022 16:33</p>
        <p>Distance: 1</p>
         </div>
         <div className="name">
            <p className="city">
             State Name       
            </p>
            <p className="state">
              City Name
            </p>
            </div>
       </div>
       <div className="third">
       <div id="img4">
         </div>
         <div className="content">
         <p>Ride Id : 001</p>
          <p>Origin Station : 23</p>
          <p>station_path: [23, 42, 45, 48, 56, 60, 77, 81, 93]</p>
          <p>Date: 15th Feb 2022 16:33</p>
         </div>
         <div className="name">
            <p className="city">
             State Name       
            </p>
            <p className="state">
              City Name
            </p>
            </div>
       </div>
    </div>
  );
}

export default App;
