import { Container, Flex, Stack, Title, Text, Image } from "@mantine/core";

import nationalLogo from "../../assets/doh-national-logo.png";
import regionalLogo from "../../assets/doh-regional-logo.png";

import LoginForm from "./LoginForm";

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
                    <Flex direction={"row"} gap={"xl"}>
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
                    <LoginForm />
                </Flex>
            </Container>
        </>
    );
};

export default LogInPage;
