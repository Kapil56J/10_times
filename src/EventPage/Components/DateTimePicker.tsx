import { Box, Card, Divider, Stack, Typography } from "@mui/material";
import {
  LocalizationProvider,
  MobileDatePicker,
  MobileTimePicker,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import DateIcon from "./DateIcon"; // Adjust the import path as needed

interface DateTimePickerProps {
  startDate: Dayjs;
  endDate: Dayjs;
  startTime: Dayjs;
  endTime: Dayjs;
  onStartDateChange: (date: Dayjs | null) => void;
  onEndDateChange: (date: Dayjs | null) => void;
  onStartTimeChange: (time: Dayjs | null) => void;
  onEndTimeChange: (time: Dayjs | null) => void;
}

const DateTimePicker: React.FC<DateTimePickerProps> = ({
  startDate,
  endDate,
  startTime,
  endTime,
  onStartDateChange,
  onEndDateChange,
  onStartTimeChange,
  onEndTimeChange,
}) => {

  return (
    <Stack mt={3} direction="row" gap={2}>
      <DateIcon startDate={startDate} />
      <Box flex={1}>
        <Card sx={{ p: 1, width: "100%", backgroundColor: "#f4f4f4" }}>
          <Stack direction="row" alignItems="center" gap={2}>
            <Typography>Start</Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <MobileDatePicker
                format="ddd, MMM DD"
                value={startDate}
                onChange={onStartDateChange}
                sx={{ width: 120, bgcolor: "#e8e8e8" }}
              />
              <MobileTimePicker
                value={startTime}
                onChange={onStartTimeChange}
                sx={{ width: 120, bgcolor: "#e8e8e8" }}
              />
            </LocalizationProvider>
          </Stack>

          <Stack mt={2} direction="row" alignItems="center" gap={2}>
            <Typography>End</Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <MobileDatePicker
                format="ddd, MMM DD"
                value={endDate}
                onChange={onEndDateChange}
                sx={{ ml: 0.5, width: 120, bgcolor: "#e8e8e8" }}
              />
              <MobileTimePicker
                value={endTime}
                onChange={onEndTimeChange}
                sx={{ width: 120, bgcolor: "#e8e8e8" }}
              />
            </LocalizationProvider>
          </Stack>

          {/* Timezone and Multi-Session Option */}
          <Box display="flex" mt={1} gap={1} p={1}>
            <Typography style={{ color: "grey" }}>GMT+05:30 Kolkata</Typography>
          </Box>
          <Divider />
          <Box display="flex" mt={1} gap={1} p={1}>
            <Typography style={{ color: "grey" }}>Create Multi-Session Event</Typography>
          </Box>
        </Card>
      </Box>
    </Stack>
  );
};

export default DateTimePicker;
