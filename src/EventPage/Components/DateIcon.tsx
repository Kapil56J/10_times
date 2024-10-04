import { Box, Card, Typography } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";

const DateIcon = ({ startDate }: { startDate: Dayjs }) => {
    const day = dayjs(startDate).format("ddd"); 
    const date = dayjs(startDate).format("DD"); 

    return (
        <Card sx={{ height: 60, width: 50, borderColor: 'Highlight' }}>
            <Box sx={{ height: 30, backgroundColor: 'whitesmoke', borderRadius: 1 }}>
                <Typography sx={{ textAlign: 'center' }}>{day}</Typography>
            </Box>
            <Typography sx={{ textAlign: 'center' }}>{date}</Typography>
        </Card>
    );
};

export default DateIcon;
