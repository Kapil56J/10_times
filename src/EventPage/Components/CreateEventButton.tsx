import { Button } from "@mui/material";

interface CreateEventButtonProps {
  onClick: () => void;
}

const CreateEventButton: React.FC<CreateEventButtonProps> = ({ onClick }) => {
  return (
    <Button
      sx={{mt:2, alignSelf: "center", width: "100%", backgroundColor: "#393939" }}
      variant="contained"
      onClick={onClick}
    >
      Create Event
    </Button>
  );
};

export default CreateEventButton;
