import { Box, Typography } from '@mui/material';
import { useState } from 'react';
import GenericButton from './Buttons/GenericButton';
import BigButton from './Buttons/BigButton';
import Die from './Die';

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

  const styles = {
    background: 'none',
    position: 'absolute',
    left: 20,
    top: 120,
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
  };

  return (
    <Box sx={styles}>
      <Typography variant="h4">Dice Roller</Typography>

      <Box display={'flex'} gap="2rem" alignItems={'flex-end'}>
        <GenericButton onClick={handleDiceDecrease} label="-" />
        <Typography variant="h5">{numOfDice}</Typography>
        <GenericButton onClick={handleDiceIncrease} label="+" />
      </Box>

      <Box display="flex" gap={'1rem'}>
        {dice.map((value, index) => (
          <Die value={value} index={index} />
        ))}
      </Box>

      <Box>
        <BigButton label="Roll Dice" onClick={rollDice} />
      </Box>
    </Box>
  );
};

export default DiceSection;
