import { styled } from '@mui/system';
import { Card, Select, MenuItem } from '@mui/material';

export const StyledCard = styled(Card)({
  marginBottom: '16px',
});

export const StyledSelect = styled(Select)(({ theme }) => ({
  color: theme.palette.action,
  backgroundColor: theme.palette.common.white,
  '&:before': {
    borderColor: theme.palette.action,
  },
  '&:after': {
    borderColor: theme.palette.action,
  },
  '& .MuiSelect-icon': {
    color: theme.palette.action,
  },
  margin: theme.spacing(2),
  width: 200,
  height: 40,
}));

export const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  color: theme.palette.text.primary,
}));
