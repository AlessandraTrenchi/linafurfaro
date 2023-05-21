import React from 'react';



function WebsiteVisitsCounter({ startingCount, todayVisits, last30DaysVisits }) {
  const totalVisits = startingCount + todayVisits + last30DaysVisits;
  return (
    <div className='visite'>
        
        
        <h2>Statistiche sito</h2>
        <h4 className='stat'>Website's visits: {startingCount}</h4>
        <h4 className='stat'>Today's Visits: {todayVisits}</h4>
        <h4 className='stat'>Last 30 Days Visits: {last30DaysVisits}</h4>
        <h4 className='stat'>Total Visits: {totalVisits}</h4>
        
    </div>
  );
}

export default WebsiteVisitsCounter;
