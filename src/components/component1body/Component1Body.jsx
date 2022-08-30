import React from 'react'
import './Component1Body.css'



import '@fortawesome/fontawesome-svg-core/styles.css'


const Component1Body = () => {
  return (
    <div class="container">
      <div class="bg1">
        <h2>16 <span>| 24</span></h2>
        <p>Goals Completed</p>
        <h1 className='transform'>Hello</h1>
      </div>
      <div class="bg1">
        <h2><i class="fas fa-battery-three-quarters"></i></h2>
        <p>Respiration</p>
      </div>
      <div class="bg2">
        <h2><i class="fas fa-running"></i></h2>
        <p>Miles</p>
      </div>
      <div class="bg1">
        <h2>36 &deg;</h2>
        <p>Temperature</p>
      </div>
      <div class="bg1">
        <h2><i class="fas fa-bed"></i></h2>
        <p>Sleep Keep</p>
      </div>
      <div class="bg2">
        <h2>98 <span>bpm</span></h2>
        <p>Heart Rate</p>
      </div>
      <div class="bg1">
        <h2>170 <span>lbs</span></h2>
        <p>Weight</p>
      </div>
      <div class="bg1">
        <h2>28 <span>%</span></h2>
        <p>Fat Percentage</p>
      </div>
      <div class="bg2">
        <h2>118 <span>mgdl</span></h2>
        <p>Blood Glucose</p>
      </div>
      <div class="bg2">
        <h2>680 <span>kcal</span></h2>
        <p>AVG Consumption</p>
      </div>
      <div class="bg2">
        <h2><i class="fas fa-dumbbell"></i></h2>
        <p>Workouts</p>
      </div>
      <div class="bg2">
        <h2>85 <span>%</span></h2>
        <p>Body Hydration</p>
      </div>
    </div>
  )
}

export default Component1Body