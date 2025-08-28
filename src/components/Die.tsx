import { Box, Typography } from '@mui/material';

type DieProps = {
  value: number;
  index: number;
};

const Die = ({ value, index }: DieProps) => {
  return (
    <Box
      key={index}
      width={70}
      height={70}
      display="flex"
      justifyContent="center"
      alignItems="center"
      border={1}
      borderColor="grey.400"
      borderRadius={2}
      bgcolor={'white'}
      color={'black'}
      data-no-dot="true"
    >
      <Typography variant="h5">{value}</Typography>
    </Box>
  );
};

export default Die;
