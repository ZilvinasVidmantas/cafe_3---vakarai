import * as React from 'react';
import {
  FormControl,
  FormLabel,
  FormControlLabel,
  Checkbox,
} from '@mui/material';

const CheckboxGroup = ({
  label: mainLabel,
  options,
  value: selectedOptions,
  onChange,
}) => {
  const handleChange = (event, option, checked) => {
    if (checked) {
      onChange(event, [...selectedOptions, option]);
    } else {
      onChange(event, selectedOptions.filter((x) => x.label !== option.label));
    }
  };

  return (
    <FormControl component="fieldset" variant="standard">
      <FormLabel component="legend">{mainLabel}</FormLabel>
      {options.map((option) => (
        <FormControlLabel
          key={option.label}
          label={option.label}
          control={(
            <Checkbox
              name={option.label}
              onChange={(event, checked) => handleChange(event, option, checked)}
              checked={Boolean(selectedOptions.find((x) => x.label === option.label))}
            />
          )}
        />
      ))}
    </FormControl>
  );
};

export default CheckboxGroup;
