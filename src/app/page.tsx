"use client"

import ListingPage from "@/EventPage/Components/ListingPage";
import { Avatar, Card, Stack, TextField, Box, CardContent, Typography, Grid2 } from "@mui/material";
import { CalendarMonth, Explore, ConfirmationNumberOutlined } from "@mui/icons-material";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import CreateEventButton from "@/EventPage/Components/CreateEventButton";
import EventCategorySelector from "@/EventPage/Components/EventCategorySelector";
import EventLocationInput from "@/EventPage/Components/EventLocationInput";
import EventNameInput from "@/EventPage/Components/EventNameInput";
import DateTimePicker from "@/EventPage/Components/DateTimePicker";
import Themecard from "@/EventPage/Components/ThemeCard";
import ThemeTypeface from "@/EventPage/Components/ThemeTypeface";
import EventOptions from "@/EventPage/Components/EventOptions";

export interface EventData {
  category: string;
  eventName: string;
  startDate: Dayjs;
  endDate: Dayjs;
  startTime: Dayjs;
  endTime: Dayjs;
  eventLocation: string;
  tickets: string;
  capacity: string;
  visibility: string;
  selectedTheme: string;
}

const TopBar = () => (
<CardContent sx={{ gap: 4, display: 'flex' }}>
  {[
    { text: "Events", icon: <ConfirmationNumberOutlined sx={{ color: 'gray' }} /> },
    { text: "Calendar", icon: <CalendarMonth sx={{ color: 'gray' }} /> },
    { text: "Explore", icon: <Explore sx={{ color: 'gray' }} /> },
  ].map((item, idx) => (
    <Box key={idx} display={'flex'} gap={1}>
      {item.icon}
      <Typography color="grey">{item.text}</Typography>
    </Box>
  ))}
</CardContent>

);

const App = () => {
  const [eventsData, setEventsData] = useState<EventData[]>([]);
  const [category, setCategory] = useState<string>("1");
  const [eventName, setEventName] = useState<string>("");
  const [startDate, setStartDate] = useState<Dayjs>(dayjs());
  const [endDate, setEndDate] = useState<Dayjs>(dayjs());
  const [startTime, setStartTime] = useState<Dayjs>(dayjs());
  const [endTime, setEndTime] = useState<Dayjs>(dayjs());
  const [eventLocation, setEventLocation] = useState<string>("");
  const [tickets, setTickets] = useState<string>("Free");
  const [capacity, setCapacity] = useState<string>("Unlimited");
  const [visibility, setVisibility] = useState<string>("Public");
  const [selectedTheme, setSelectedTheme] = useState('theme-minimal');

  const handleCreateEvent = () => {
    const newEvent = {
      category,
      eventName,
      startDate,
      startTime,
      endDate,
      endTime,
      eventLocation,
      tickets,
      capacity,
      visibility,
      selectedTheme 
    };
    setEventsData((prevEvents) => [...prevEvents, newEvent]);
  };

  const gradientStyles: Record<string, string> = {
    'theme-minimal': 'linear-gradient(to right, #3b82f6, #06b6d4, #14b8a6)',
    'theme-holiday': 'linear-gradient(to right, #ef4444, #ec4899, #fbbf24)',
    'theme-abstract': 'linear-gradient(to right, #8b5cf6, #6366f1, #3b82f6)',
    'theme-quantum': 'linear-gradient(to right, #10b981, #84cc16, #fbbf24)',
  };

  return (
    <Grid2 container gap={2}>
      <Grid2 size={7.5}>
        <Card sx={{ padding: 3, backgroundColor: 'whitesmoke' }}>
          <TopBar />
          <Card>
            <Stack direction="row" gap={2} alignItems="center">
              <Box p={3}>
                <Stack direction="row" gap={2} alignItems="center">
                  <Avatar sx={{ width: 30, height: 30 }} />
                  <EventCategorySelector category={category} onChange={(e) => setCategory(e.target.value)} />
                </Stack>
                <EventNameInput eventName={eventName} onChange={(e) => setEventName(e.target.value)} />
                <DateTimePicker
                  startDate={startDate}
                  endDate={endDate}
                  startTime={startTime}
                  endTime={endTime}
                  onStartDateChange={(date) => date && setStartDate(date)}
                  onEndDateChange={(date) => date && setEndDate(date)}
                  onStartTimeChange={(time) => time && setStartTime(time)}
                  onEndTimeChange={(time) => time && setEndTime(time)}
                />
                <EventLocationInput eventLocation={eventLocation} onChange={(e) => setEventLocation(e.target.value)} />
                <EventOptions
                  tickets={tickets}
                  capacity={capacity}
                  visibility={visibility}
                  onTicketsChange={(e) => setTickets(e.target.value)}
                  onCapacityChange={(e) => setCapacity(e.target.value)}
                  onVisibilityChange={(e) => setVisibility(e.target.value)} />
                <CreateEventButton onClick={handleCreateEvent} />
              </Box>
              <Box p={3}>
                <Box
                  m={2}
                  sx={{
                    height: '320px',
                    borderRadius: '8px',
                    background: gradientStyles[selectedTheme],
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    textAlign: 'center',
                  }}
                >
                  <TextField
                    variant="standard"
                    placeholder="YOU ARE INVITED"
                    id="greet-text"
                    InputProps={{
                      disableUnderline: true,
                      sx: {
                        ml: 6,
                        alignSelf: 'center',
                        fontSize: '2rem',
                        fontWeight: 'bold',
                        color: 'white',
                      },
                    }}
                  />
                </Box>
                <Typography variant="subtitle2" sx={{ mt: 2, ml: 2, fontWeight: 'bold', color: 'gray' }}>
                  Theme
                </Typography>
                <Box display="flex" gap={2} ml={2}>
                  {["Minimal", "Holiday", "Abstract", "Quantum"].map((theme, idx) => (
                 <Themecard
                 key={theme.toLowerCase()}
                 text={theme}
                 isSelected={selectedTheme === `theme-${theme.toLowerCase()}`}
                 onThemeChange={() => setSelectedTheme(`theme-${theme.toLowerCase()}`)}
                 theme={gradientStyles[`theme-${theme.toLowerCase()}`]}
               />
                  ))}
                </Box>
                <ThemeTypeface />
              </Box>
            </Stack>
          </Card>
        </Card>
      </Grid2>
      {eventsData.length > 0 && <Grid2 size={4}>
      <Typography sx={{ fontSize: 24 }}>Events</Typography>
        {eventsData.map((event, index) => (
          <ListingPage key={event.eventName + index} eventData={event} />
        ))}
      </Grid2>}
    </Grid2>
  );
};

export default App;
