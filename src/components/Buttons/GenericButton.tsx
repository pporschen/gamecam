import { Button } from '@mui/material';
import type { ButtonProps } from './types';

const GenericButton = ({ label, sx, ...props }: ButtonProps) => {
  const styles = sx || { mt: 2 };

  return (
    <Button variant="contained" color="primary" data-no-dot="true" sx={styles} {...props}>
      {label}
    </Button>
  );
};

export default GenericButton;
