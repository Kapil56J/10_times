import { Card, Stack, Typography, Divider } from "@mui/material";
import KeyboardDoubleArrowDownOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowDownOutlined';

const ThemeTypeface = () => {
    return (
        <Card sx={{ marginY:7, p: 1, backgroundColor: '#f4f4f4' }} >
            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                <Stack direction={'row'} gap={2}>
                    <Typography color='#767676'>Color</Typography>
                </Stack>
                <Stack direction={'row'} gap={2}>
                    <Typography color='#767676'>Gray</Typography>
                    <KeyboardDoubleArrowDownOutlinedIcon sx={{ width: 20, height: 20 }} color='action' />
                </Stack>
            </Stack>
            <Divider sx={{ mt: 1 }} />
            <Stack mt={1} direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                <Stack direction={'row'} gap={1}>
                    <Typography>Ag</Typography>
                    <Typography color='#767676'>Typeface</Typography>
                </Stack>
                <Stack direction={'row'} gap={2}>
                    <Typography color='#767676'>Default</Typography>
                    <KeyboardDoubleArrowDownOutlinedIcon sx={{ width: 20, height: 20 }} color='action' />
                </Stack>
            </Stack>
        </Card>
    )
}

export default ThemeTypeface