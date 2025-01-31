import { Button } from "@mantine/core";

import { CircleUser } from "lucide-react";

import { Link } from "react-router";

const LogInComponent = () => {
    return (
        <Link to={"login"}>
            <Button size="md" variant="transparent">
                <CircleUser style={{ marginRight: 5 }} /> Log In
            </Button>
        </Link>
    );
};

export default LogInComponent;
