import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import { TrafficLight } from './useState/TrafficLights'

import './index.css'
//import { TrafficLightWithEffect } from './useEffect/TrafficLightsWithEffect';
import { PokemonPage } from './Ejemplos/PokemonPage';
import { TrafficLightWithHook } from './useEffect/TrafficLightsWithHook';


createRoot(document.getElementById('root')!).render(
  <StrictMode> 
    {<TrafficLightWithHook/>}
    {/*<PokemonPage/>*/}
  </StrictMode>

  
);
