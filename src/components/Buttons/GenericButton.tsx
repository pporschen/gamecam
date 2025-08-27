import { Button } from '@mui/material';
import type { ButtonProps } from './types';

const GenericButton = ({ label, ...props }: ButtonProps) => {
  return (
    <Button variant="contained" color="primary" sx={{ mt: 2 }} {...props}>
      {label}
    </Button>
  );
};

export default GenericButton;
