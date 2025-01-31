import {
    Container,
    Flex,
    Stack,
    Title,
    Text,
    Image,
    Divider,
} from "@mantine/core";

import nationalLogo from "../../assets/doh-national-logo.png";
import regionalLogo from "../../assets/doh-regional-logo.png";

import LoginForm from "./LoginForm";
import { Link, NavLink } from "react-router";

const LogInPage = () => {
    return (
        <>
            <Container fluid>
                <Flex
                    justify={"center"}
                    direction={"column"}
                    align={"center"}
                    mt={"3.5rem"}
                >
                    {/* Banner */}
                    <Flex direction={"row"} gap={"xl"} visibleFrom="sm">
                        <Image src={nationalLogo} height={"75rem"} />
                        <Stack gap={0} align="center">
                            <Title order={1}>DEPARTMENT OF HEALTH</Title>
                            <Text size="lg">
                                Center for Health Development - Northern
                                Mindanao
                            </Text>
                        </Stack>

                        <Image src={regionalLogo} height={"75rem"}></Image>
                    </Flex>
                    {/* Banner */}
                    <Title order={2} mt={"3rem"}>
                        Event Tracker
                    </Title>
                    <LoginForm />
                    <Divider my={"md"} />
                    <Text>
                        <Link to={"/"}>Return to Tracker</Link>
                    </Text>
                </Flex>
            </Container>
        </>
    );
};

export default LogInPage;
