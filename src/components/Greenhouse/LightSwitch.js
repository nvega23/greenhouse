import './LightSwitch.css';
import {useTheme} from '../../context/ThemeContext';

function LightSwitch() {
  const { themeName, setThemeName } = useTheme();

  const switcher = (e) => {
    console.log(e)
      if (e.target.className === 'on'){
        setThemeName('day');
      } else {
        setThemeName('night');
      }
  }


  return (
    // <div className="light-switch day">
    <div className={`light-switch ${themeName}`}>
      <div className="on" onClick={switcher}>DAY</div>
      <div className="off" onClick={switcher}>NIGHT </div>
    </div>
  );
}

export default LightSwitch;
