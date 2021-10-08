import React, { FC } from 'react';
import './Toggle.css';

interface IToggleProps {
    isChecked: boolean
    handleToggle?: any
    labelOne?: string
    labelTwo?: string
}

const Toggle: FC<IToggleProps> = (props): JSX.Element => {
    console.info("value = ", props)
    return (
        <React.Fragment>
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
                {props.labelOne}
                {props.labelTwo}
            </label>
        </React.Fragment>
    );
};

export default Toggle