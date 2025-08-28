import { Box, Typography } from '@mui/material';

type PseudoButtonProps = {
  value: string;
  index: number;
};

const PseudoButton = ({ value, index }: PseudoButtonProps) => {
  return (
    <Box
      key={index}
      width={70}
      mb="1rem"
      height={70}
      display="flex"
      justifyContent="center"
      alignItems="center"
      border={1}
      borderColor="grey.400"
      borderRadius={2}
      bgcolor="white"
      data-no-dot="true"
      sx={{
        cursor: 'pointer',
        transition: 'background 0.2s',
        '&:hover': {
          backgroundColor: '#1976d2',
          color: '#fff',
        },
      }}
    >
      <Typography variant="h5">{value}</Typography>
    </Box>
  );
};

export default PseudoButton;
