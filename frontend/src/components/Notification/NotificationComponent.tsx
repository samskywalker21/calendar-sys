import { Button, Badge, Box } from "@mantine/core";
import { Bell } from "lucide-react";

const NotificationComponent = () => {
    return (
        <Box style={{ position: "relative", display: "inline-block" }}>
            <Badge
                style={{
                    position: "absolute",
                    top: -4,
                    right: 0,
                }}
                size="xs"
                radius="xl"
                bg="red"
            >
                0
            </Badge>
            <Button size="xs" variant="transparent">
                <Bell />
            </Button>
        </Box>
    );
};

export default NotificationComponent;
