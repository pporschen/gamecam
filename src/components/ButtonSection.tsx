import { useState } from 'react';
import type { ChangeEvent } from 'react';
import { Box, Button, TextField } from '@mui/material';

const INPUT_SEPARATOR = ';';
type Buttons = string[];

const ButtonSection = () => {
  const [buttons, setButtons] = useState<Buttons>([]);
  const [inputValue, setInputValue] = useState('');

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value);

  const handleButtonCreation = () => {
    const buttonValues = inputValue.split(INPUT_SEPARATOR).map((i) => i.trim());

    setButtons(buttonValues);
  };

  return (
    <Box>
      <TextField label="Input" variant="outlined" value={inputValue} onChange={handleInput} />
      <Button onClick={handleButtonCreation}> Create Buttons </Button>
      {buttons.map((b) => {
        return <div>{b}</div>;
      })}
    </Box>
  );
};

export default ButtonSection;
