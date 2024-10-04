import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";

interface EventCategorySelectorProps {
  category: string;
  onChange: (event: SelectChangeEvent<string>) => void; 
}

const EventCategorySelector: React.FC<EventCategorySelectorProps> = ({ category, onChange }) => {
  return (
    <FormControl sx={{ m: 1, minWidth: 200 }} size="medium" variant="standard">
      <InputLabel id="select-category-label">Create Under</InputLabel>
      <Select
        labelId="select-category-label"
        id="select-category"
        value={category}
        label="Create Under"
        onChange={onChange}
      >
        <MenuItem value="1">Personal Calendar</MenuItem>
        <MenuItem value="2">Public Calendar</MenuItem>
      </Select>
    </FormControl>
  );
};

export default EventCategorySelector;
