import React, { useState, useEffect } from 'react';

const TrafficLightSimulator = () => {
  const lights = ['red', 'yellow', 'green'];
  const [currentLight, setCurrentLight] = useState('red');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLight(prev => {
        const currentIndex = lights.indexOf(prev);
        const nextIndex = (currentIndex + 1) % lights.length;
        return lights[nextIndex];
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.trafficLight}>
        <div
          style={{
            ...styles.light,
            ...styles.red,
            ...(currentLight === 'red' ? styles.activeRed : {})
          }}
        />
        <div
          style={{
            ...styles.light,
            ...styles.yellow,
            ...(currentLight === 'yellow' ? styles.activeYellow : {})
          }}
        />
        <div
          style={{
            ...styles.light,
            ...styles.green,
            ...(currentLight === 'green' ? styles.activeGreen : {})
          }}
        />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: 'grey'
  },
  trafficLight: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    boxShadow: '0 0 15px rgba(0,0,0,0.5)'
  },
  light: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    backgroundColor: '#555',
    transition: 'background-color 0.6s, box-shadow 0.6s'
  },
  red: { backgroundColor: '#550000' },
  yellow: { backgroundColor: '#554400' },
  green: { backgroundColor: '#004400' },
  activeRed: {
    backgroundColor: 'red',
    boxShadow: '0 0 20px 5px red'
  },
  activeYellow: {
    backgroundColor: 'yellow',
    boxShadow: '0 0 20px 5px yellow'
  },
  activeGreen: {
    backgroundColor: 'limegreen',
    boxShadow: '0 0 20px 5px limegreen'
  }
};

export default TrafficLightSimulator;
