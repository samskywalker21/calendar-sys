import { Container, Text, Title } from "@mantine/core";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";

const CalendarPage = () => {
    return (
        <Container fluid>
            <Title order={2}>Event Calendar</Title>
            <FullCalendar
                plugins={[dayGridPlugin, listPlugin]}
                initialView="dayGridMonth"
                aspectRatio={2}
                headerToolbar={{
                    start: "title",
                    center: "",
                    end: "today prev,dayGridDay,dayGridWeek,dayGridMonth,listMonth, next",
                }}
                buttonText={{
                    today: "Today",
                    month: "Month",
                    week: "Week",
                    day: "Day",
                }}
            />
        </Container>
    );
};

export default CalendarPage;
