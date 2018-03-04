import React from 'react';
import './clock.css';

function Clock () {
     const time = new Date().toLocaleTimeString();
     return (
         <div className="clock-to-center">
             {time}
         </div>
     )
}

export default Clock;