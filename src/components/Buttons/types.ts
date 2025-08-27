import type { Button } from '@mui/material';

export type ButtonProps = {
  label: string;
} & React.ComponentProps<typeof Button>;
