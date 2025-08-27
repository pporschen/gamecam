import { Box, Typography, Button } from '@mui/material';
import { useState } from 'react';
import GenericButton from './Buttons/GenericButton';

const INITIAL_DICE = [1];
const MIN_NUM_DICE = 1;
const MAX_NUM_DICE = 6;

const DiceSection = () => {
  const [dice, setDice] = useState<number[]>(INITIAL_DICE);
  const numOfDice = dice.length;
  const createDiceArray = (numOfDice: number) => Array(numOfDice).fill(1);

  const rollDice = () => {
    const newDice = dice.map(() => Math.floor(Math.random() * 6) + 1);
    setDice(newDice);
  };

  const handleDiceIncrease = () => {
    const newNumOfDice = Math.min(MAX_NUM_DICE, numOfDice + 1);
    setDice(createDiceArray(newNumOfDice));
  };

  const handleDiceDecrease = () => {
    const newNumOfDice = Math.max(MIN_NUM_DICE, numOfDice - 1);
    setDice(createDiceArray(newNumOfDice));
  };

  return (
    <Box>
      <Typography variant="h4">Dice Roller</Typography>
      <Box display="flex" alignItems="center" mt={2}>
        <Typography variant="body1" mr={2}>
          Number of Dice:
        </Typography>
        <GenericButton
          onClick={handleDiceDecrease}
          sx={{ minWidth: '30px', padding: '5px' }}
          label="-"
        />
        <Typography variant="h6" mx={2}>
          {numOfDice}
        </Typography>
        <GenericButton
          onClick={handleDiceIncrease}
          sx={{ minWidth: '30px', padding: '5px' }}
          label="+"
        />

        <Box display="flex" justifyContent="center" mt={2}>
          {dice.map((value, index) => (
            <Box
              key={index}
              width={50}
              height={50}
              display="flex"
              justifyContent="center"
              alignItems="center"
              border={1}
              borderColor="grey.400"
              borderRadius={2}
              mx={1}
            >
              <Typography variant="h5">{value}</Typography>
            </Box>
          ))}
        </Box>
        <GenericButton label="Roll Dice" onClick={rollDice} />
      </Box>
    </Box>
  );
};

export default DiceSection;
