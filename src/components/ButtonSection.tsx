import { useState } from 'react';
import type { ChangeEvent } from 'react';
import { Box, TextField, Typography } from '@mui/material';
import { BigButton, PseudoButton } from './Buttons';

const INPUT_SEPARATOR = ';';
type Buttons = string[];

const wrapperStyles = {
  background: 'none',
  position: 'absolute',
  right: 80,
  top: 80,
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  alignItems: 'flex-end',
};

const ButtonSection = () => {
  const [buttons, setButtons] = useState<Buttons>([]);
  const [inputValue, setInputValue] = useState('');

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value);

  const handleButtonCreation = () => {
    const buttonValues = inputValue.split(INPUT_SEPARATOR).map((i) => i.trim());

    setButtons(buttonValues);
  };

  return (
    <Box sx={wrapperStyles}>
      <Typography variant="h4">Custom Buttons</Typography>

      <Box>
        <TextField
          label="Input"
          variant="outlined"
          data-no-dot="true"
          value={inputValue}
          onChange={handleInput}
          sx={{ backgroundColor: '#fff', width: '100%' }}
        />
      </Box>
      <Box>
        <BigButton onClick={handleButtonCreation} label="Create Buttons" />
      </Box>

      <Box>
        {buttons.map((b, index) => (
          <PseudoButton value={b} index={index} />
        ))}
      </Box>
    </Box>
  );
};

export default ButtonSection;
