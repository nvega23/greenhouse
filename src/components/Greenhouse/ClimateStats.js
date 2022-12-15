import './ClimateStats.css';
import { useClimate } from '../../context/ClimateContext';

function ClimateStats() {
  const { temperature, setTemperature, hydro, setHydro  } = useClimate();

  return (
    <div className="climate-stats">
      <div className="temperature">
        Temperature {temperature}°F
      </div>
      <div className="humidity">
        Humidity {hydro}%
      </div>
    </div>
  )
}

export default ClimateStats;
