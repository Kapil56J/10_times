import {
  Box,
  Card,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import dayjs from "dayjs";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { EventData } from "@/app/page";

const gradientStyles: Record<string, string> = {
  'theme-minimal': 'linear-gradient(to right, #3b82f6, #06b6d4, #14b8a6)',
  'theme-holiday': 'linear-gradient(to right, #ef4444, #ec4899, #fbbf24)',
  'theme-abstract': 'linear-gradient(to right, #8b5cf6, #6366f1, #3b82f6)',
  'theme-quantum': 'linear-gradient(to right, #10b981, #84cc16, #fbbf24)',
};

const ListingPage: React.FC<{ eventData: EventData }> = ({ eventData }) => {
  const day = dayjs(eventData.startDate).format("dddd");
  const date = dayjs(eventData.startDate).format("DD");
  const month = dayjs(eventData.startDate).format("MMM");
  const time = dayjs(eventData.startTime).format("hh:mm A");
  const theme = eventData.selectedTheme;

  return (
    <Card sx={{ mb: 2, padding: 3, backgroundColor: "whitesmoke", gap: 2 }}>
      <Stack direction={"row"} gap={4} sx={{ mt: 3 }}>
        <Box>
          <Typography>
            {month} {date}
          </Typography>
          <Typography color="textSecondary">{day}</Typography>
        </Box>
        <Card sx={{ ml: 3, padding: 2, alignItems: "center", width: "100%", background: gradientStyles[theme] }}>
          <Typography>{time}</Typography>
          <Typography sx={{ mt: 2, fontWeight: "bold" }}>
            {eventData.eventName}
          </Typography>
          <Stack sx={{ mt: 2 }} direction={"row"} gap={1}>
            <LocationOnOutlinedIcon color="action" />
            <Typography>{eventData.eventLocation}</Typography>
          </Stack>
          <TableContainer component={Paper} sx={{ mt: 2 }}>
            <Table>
              <TableBody>
                <TableRow >
                  <TableCell>
                    <Typography >Tickets</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography color="textSecondary">
                      {eventData.tickets}
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography>Capacity</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography color="textSecondary">
                      {eventData.capacity}
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography>Visibility</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography color="textSecondary">
                      {eventData.visibility}
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
      </Stack>
    </Card>
  );
};
export default ListingPage;
