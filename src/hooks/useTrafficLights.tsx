import { useEffect, useState } from "react";


const colors = {
    red: 'bg-red-500 animate-pulse',
    yellow: 'bg-yellow-500 animate-pulse',
    green: 'bg-green-500 animate-pulse',
}

type TrafficLightColor = keyof typeof colors;

export const useTrafficLights = () => {
  
const [light, setlight] = useState<TrafficLightColor>('red')
  const [countdown, setcountdown] = useState(5)
    
  //Cambiar contador
  useEffect(() => {
      
    if (countdown === 0) return;

    console.log({countdown})
    const IntervalId = setInterval(() => {
        setcountdown(prev => prev -1)
      }, 1000);

      return () => {
        clearInterval(IntervalId)
      }

  }, [countdown])
  
  //Cambiar color de semaforo
  useEffect(() => {
    if (countdown > 0) return;
    
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setcountdown(5);
    
        if (light === 'red') {
          setlight('green');
          return;
      }
      if (light === 'yellow') {
          setlight('red');
          return;
      }
      if (light === 'green') {
          setlight('yellow');
          return;
      
      
    }

  },[countdown,light])




    return {
        countdown,
        light,
        colors,
        percentage: (countdown / 5) * 100,
    }
}
