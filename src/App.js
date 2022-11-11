import { StyledEngineProvider } from '@mui/material/styles';
import './App.css';
import {theme} from './Theme'
import Test from './Test';
import Dashboard from './layouts/Dashboard';
import Landing from './layouts/Landing/Landing';
import Router from './routes';
import HookCounter from './HookCounter';
import HookCounterTwo from './HookCounterTwo';
import HookCounterThree from './HookCounterThree';
import HookCounterFour from './HookCounterFour';
import BasicTextFields from './textField';
import CustomDrawer from './CustomDrawer';
import CustomRightDrawer from './CustomRightDrawer';
import Rubitron from './Rubitron';
import { TextField } from '@mui/material';
import HybridGeyser from './HybridGeyser';

function App() {
  return (
    
    <div className='App' >
      <Rubitron/>
      {/* <HybridGeyser/> */}
      {/* <BasicTextFields/> */}
      {/* <CustomDrawer />  */}
      {/* <CustomRightDrawer /> */}
      {/* <ThemeProvider theme={theme}>
        <StyledEngineProvider injectFirst>
        <Router /> 
        </StyledEngineProvider>
      </ThemeProvider> */}

      {/* <HookCounterFour /> */}
      {/* <h1>hello</h1> */}
      {/* <BasicTextFields/> */}
    </div>
  );
}

export default App;
