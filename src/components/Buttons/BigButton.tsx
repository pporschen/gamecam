import { Button } from '@mui/material';
import type { ButtonProps } from './types';

const BigButton = ({ label, sx, ...props }: ButtonProps) => {
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={props.onClick}
      sx={{
        fontSize: '1.25rem',
        padding: '0.75rem 1.5rem',
        minWidth: '150px',
        ...sx,
      }}
      {...props}
    >
      {label}
    </Button>
  );
};

export default BigButton;
