import React, { ChangeEvent, FC, useState } from 'react'
import Toggle from './components/Toggle'
import Linear from './components/LinearRegression'
import Gradient from './components/GradientDescent'

import { ThemeProvider } from '@material-ui/core/styles'
import ml_play_theme from './MuiTheme'
import './App.css';

interface IAppProps {
  appTitle: string,
  headerText?: string
}

const App: FC<IAppProps> = ({appTitle}): JSX.Element => {
  const [isGradient, setGradient] = useState(false);

  const handleToggle = (e: ChangeEvent<HTMLInputElement>) => {
    setGradient( e.target.checked )
  }

  return (
    <ThemeProvider theme={ml_play_theme}>
    <div className="App">
      <header className="App-header">
        {/* <div>Linear Regression</div> */}
        <Toggle 
          isChecked={isGradient}
          handleToggle={handleToggle}
          labelOne="Linear Regression"
          labelTwo="Gradient Descent"
        />
        {/* <div>Gradient Descent</div> */}
      </header>
      <React.Fragment>
        { isGradient
            ? <Gradient />
            : <Linear />
        }
      </React.Fragment>
      <div className='version'>React version: {React.version}</div>
    </div>
    </ThemeProvider>
  );
}

export default App;
