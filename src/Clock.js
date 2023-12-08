import React, { useState, useEffect } from 'react';




function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const updateTime = () => {
      setTime(new Date());
    };
    const logEndOfMinute = () => {
      const seconds = time.getSeconds();
      if (seconds === 59) {
        console.log('End of minute');
      }
    };
    const intervalId = setInterval(() => {
      updateTime();
      logEndOfMinute();
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [time]);

  const formattedTime = time.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  return (
    <div>
      <h1>{formattedTime}</h1>
    </div>
  );
}

export default Clock;
