import { createContext, useState, useContext } from "react";
import Thermometer from "../components/Thermometer";
// Temperature has a default value of 50 degrees
// Humidity has a default value of 40%

const ClimateContext = createContext();
export default function ClimateProvider ({children}) {
    const [temperature, setTemperature] = useState(50);
    const [ hydro, setHydro ] = useState(40);
    return (
        <ClimateContext.Provider value={{temperature, setTemperature, hydro, setHydro}}>
          {children}
        </ClimateContext.Provider>
    );
}


export const useClimate = () => useContext(ClimateContext);
