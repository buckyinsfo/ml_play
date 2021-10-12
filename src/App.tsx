import React, { ChangeEvent, FC, useState } from 'react'
import Toggle from './components/Toggle'
import Linear from './components/LinearRegression'
import Gradient from './components/GradientDescent'

import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material'
import ml_play_theme from './MuiTheme'

interface IAppProps {
  appTitle: string,
  headerText?: string
}

const App: FC<IAppProps> = ({ appTitle }): JSX.Element => {
  const [isGradient, setGradient] = useState(false);

  const handleToggle = (e: ChangeEvent<HTMLInputElement>) => {
    setGradient(e.target.checked)
  }

  return (
    <ThemeProvider theme={ml_play_theme}>
      <CssBaseline />
      <div className="App">
        <header className="App-header">
          <Toggle
            isChecked={isGradient}
            handleToggle={handleToggle}
            labelOne="Linear Regression"
            labelTwo="Gradient Descent"
          />
        </header>
        <React.Fragment>
          {isGradient
            ? <Gradient />
            : <Linear />
          }
        </React.Fragment>
        <div className='version'>React version: {React.version}</div>
      </div>
    </ThemeProvider>
  )
}

export default App;
