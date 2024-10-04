import { Box, Card, TextField } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

interface EventLocationInputProps {
  eventLocation: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const EventLocationInput: React.FC<EventLocationInputProps> = ({
  eventLocation,
  onChange,
}) => {
  return (
    <Box display="flex" mt={3} gap={2} alignItems="center">
      <Card sx={{ height: 50, width: 50, borderColor: "Highlight" }}>
        <LocationOnOutlinedIcon style={{ padding: 12 }} color="action" />
      </Card>
      <TextField
        sx={{ width: 250 }}
        label="Add Event Location"
        value={eventLocation}
        onChange={onChange}
        variant="filled"
      />
    </Box>
  );
};

export default EventLocationInput;
