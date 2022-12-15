import { ThemeContext, useTheme } from '../../context/ThemeContext';
import dayImage from './images/greenhouse-day.jpg';
import nightImage from './images/greenhouse-night.jpg';
import './Greenhouse.css';

import LightSwitch from './LightSwitch';
import ClimateStats from './ClimateStats';

function Greenhouse() {
  // useTheme({nightImage})
  // onClick={{useTheme}}
  const { themeName } = useTheme();

  const compare =() => {
    if(themeName === 'day'){
      return dayImage
    } else{
      return nightImage
    }
  }

  return (
    <section value={themeName}>
      <img className='greenhouse-img' src={compare()} alt='greenhouse'/>
      <LightSwitch />
      <ClimateStats />
    </section>
  );
}

export default Greenhouse;
