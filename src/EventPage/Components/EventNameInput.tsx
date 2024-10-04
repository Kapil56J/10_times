import { Input } from "@mui/material";

interface EventNameInputProps {
  eventName: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const EventNameInput: React.FC<EventNameInputProps> = ({ eventName, onChange }) => {
  return (
    <Input
      placeholder="Event Name"
      value={eventName}
      onChange={onChange}
      fullWidth
    />
  );
};

export default EventNameInput;
