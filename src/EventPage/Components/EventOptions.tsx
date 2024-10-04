import { Box, Card, Divider, Stack, Switch, TextField, Typography } from "@mui/material";
import ConfirmationNumberOutlinedIcon from '@mui/icons-material/ConfirmationNumberOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';
import SocialDistanceOutlinedIcon from '@mui/icons-material/SocialDistanceOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import KeyboardDoubleArrowDownOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowDownOutlined';

interface EventOptionsProps {
  tickets: string;
  capacity: string;
  visibility: string;
  onTicketsChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onCapacityChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onVisibilityChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const EventOptions: React.FC<EventOptionsProps> = ({ tickets, capacity, visibility, onTicketsChange, onCapacityChange, onVisibilityChange }) => {
  return (
    <Box mt={2} flex={1}>
      <Card sx={{ p: 1, width: '100%', backgroundColor: '#f4f4f4' }}>
        <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
          <Stack direction={'row'} gap={2}>
            <ConfirmationNumberOutlinedIcon color='action' />
            <Typography color='#767676'>Tickets</Typography>
          </Stack>
          <Stack direction={'row'} gap={2}>
            <TextField
              variant='standard'
              size="small"
              value={tickets}
              onChange={onTicketsChange}
              sx={{ width: 80 }}
              InputProps={{
                style: {
                  color: '#767676',
                  border: 'none',
                  outline: 'none',
                  background: 'transparent',
                },
              }}
            />
            <ModeEditOutlineOutlinedIcon sx={{ width: 20, height: 20 }} color='action' />
          </Stack>
        </Stack>
        <Divider sx={{ mt: 1 }} />
        <Stack mt={1} direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
          <Stack direction={'row'} gap={2}>
            <HowToRegOutlinedIcon color='action' />
            <Typography color='#767676'>Required Approval</Typography>
          </Stack>
          <Switch />
        </Stack>
        <Divider sx={{ mt: 1 }} />
        <Stack mt={1} direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
          <Stack direction={'row'} gap={2}>
            <SocialDistanceOutlinedIcon color='action' />
            <Typography color='#767676'>Capacity</Typography>
          </Stack>
          <Stack direction={'row'} gap={2}>
            <TextField
              variant='standard'
              size="small"
              value={capacity}
              onChange={onCapacityChange}
              sx={{ width: 80 }}
              InputProps={{
                style: {
                  color: '#767676',
                  border: 'none',
                  outline: 'none',
                  background: 'transparent',
                },
              }}
            />
            <ModeEditOutlineOutlinedIcon sx={{ width: 20, height: 20 }} color='action' />
          </Stack>
        </Stack>
        <Divider sx={{ mt: 1 }} />
        <Stack mt={1} direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
          <Stack direction={'row'} gap={2}>
            <LanguageOutlinedIcon color='action' />
            <Typography color='#767676'>Visibility</Typography>
          </Stack>
          <Stack direction={'row'} gap={2}>
            <TextField
              variant='standard'
              size="small"
              value={visibility}
              onChange={onVisibilityChange}
              sx={{ width: 80 }}
              InputProps={{
                style: {
                  color: '#767676',
                  border: 'none',
                  outline: 'none',
                  background: 'transparent',
                },
              }}
            />
            <KeyboardDoubleArrowDownOutlinedIcon sx={{ width: 20, height: 20 }} color='action' />
          </Stack>
        </Stack>
      </Card>
    </Box>
  );
};

export default EventOptions;
