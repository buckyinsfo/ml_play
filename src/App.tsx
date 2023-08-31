import React, { ChangeEvent, FC, useState } from 'react'
import { AppBar, Container, Typography } from '@mui/material'
import { PhotoCamera } from '@mui/icons-material'

import AlgorithmSelector from './components/AlgorithmSelector'
import Toggle from './components/Toggle'
import Linear from './components/LinearRegression'
import Gradient from './components/GradientDescent'

interface IAppProps {
    appTitle: string,
    headerText?: string
}

const App: FC<IAppProps> = ({ appTitle }): JSX.Element => {
  const [isGradient, setGradient] = useState(false);

    return (
        <Container maxWidth="sm">
            <AppBar >
                <PhotoCamera 
                    sx={{
                        // mt: (theme) => theme.spacing(2),
                        // // ":hover": {
                        // //     bgcolor: "cyan",
                        // // },
                    }}
                />
                <Typography variant='h6'>
                    { appTitle }
                </Typography>
                <AlgorithmSelector />
                <Toggle isChecked={true} />
            </AppBar>

            <React.Fragment>
                {isGradient
                    ? <Gradient />
                    : <Linear />
                }
            </React.Fragment>
            <div className='version'>React version: {React.version}</div>
        </Container>
    )
}

export default App;
