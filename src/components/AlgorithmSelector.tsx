import React, { useState } from 'react';
import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';

const AlgorithmSelector: React.FC = () => {
  const [algorithm, setAlgorithm] = useState<string>('Linear Regression');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAlgorithm(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <RadioGroup aria-label="algorithm" name="algorithm" value={algorithm} onChange={handleChange}>
        <FormControlLabel value="Linear Regression" control={<Radio />} label="Linear Regression" />
        <FormControlLabel value="Gradient Decent" control={<Radio />} label="Gradient Decent" />
      </RadioGroup>
    </FormControl>
  );
};

export default AlgorithmSelector;
