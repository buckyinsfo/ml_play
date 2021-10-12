import React, { FC } from 'react';
import './Toggle.css';
import { Box, Typography } from '@mui/material'

interface IToggleProps {
    isChecked: boolean
    handleToggle?: any
    labelOne?: string
    labelTwo?: string
}

 const Toggle: FC<IToggleProps> = (props): JSX.Element => {
    return (
        <React.Fragment>
            <Box
                sx={{
                display: 'flex',
                flexDirection: 'row',
                p: 1,
                m: 1,
                bgcolor: 'background.paper',
                }}
            >
                <Box sx={{ p: 1, bgcolor: 'grey.300' }}>
                    <Typography variant="h6">{props.labelOne}</Typography>
                </Box>
                <Box sx={{ p: 1, bgcolor: 'grey.300' }}> 
                    <input
                        checked={props.isChecked}
                        className="react-switch-checkbox"
                        id={`react-switch-new`}
                        type="checkbox"
                        onChange={props.handleToggle}
                    />
                    <label
                        className="react-switch-label"
                        htmlFor={`react-switch-new`}
                    >
                        <span className={`react-switch-button`} />
                        {/* .    <Typography align="right" variant="h5" color="textPrimary">{props.labelTwo}</Typography> */}
                    </label>
                </Box>
                <Box sx={{ p: 1, bgcolor: 'grey.300' }}>
                    <Typography variant="h6">{props.labelTwo}</Typography>
                </Box>
            </Box>
        </React.Fragment>
    )
}

export default Toggle