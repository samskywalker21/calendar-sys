import { AppShell, Burger, Flex, Image, Text, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import { Outlet } from "react-router";

import ThemeToogle from "../../components/ThemeToogle";
import NotificationComponent from "../../components/Notification/NotificationComponent";
import LogInComponent from "../../components/LogIn/LogInComponent";

import NavBarComponent from "./NavBarComponent";

import dohNational from "../../assets/doh-national-logo.png";
import dohRegional from "../../assets/doh-regional-logo.png";

const MainPage = () => {
    const [isOpen, { toggle }] = useDisclosure();

    return (
        <>
            <AppShell
                header={{ height: "4.5rem" }}
                navbar={{
                    width: "9rem",
                    breakpoint: "md",
                    collapsed: { mobile: !isOpen },
                }}
                padding={"md"}
            >
                <AppShell.Header py={10}>
                    {/* Site Banner */}
                    <Flex justify="space-between">
                        <Flex direction="row" align="center" justify="left">
                            <Burger
                                opened={isOpen}
                                onClick={toggle}
                                size="sm"
                                hiddenFrom="md"
                                m={"sm"}
                            />
                            <Group gap={0.2} mx={"sm"} visibleFrom="sm">
                                <Image src={dohNational} h="3rem" />
                                <Image src={dohRegional} h="3rem" />
                            </Group>
                            <Text size="1.5rem" fw={500}>
                                Activity Tracker
                            </Text>
                        </Flex>
                        <Flex
                            direction="row-reverse"
                            align="center"
                            justify="right"
                        >
                            <Group justify="flex-end" gap={1} mr={"md"}>
                                <LogInComponent />
                                <NotificationComponent />
                                <ThemeToogle />
                            </Group>
                        </Flex>
                    </Flex>
                    {/* Site Banner */}
                </AppShell.Header>
                <AppShell.Navbar p={"md"}>
                    <NavBarComponent />
                </AppShell.Navbar>
                <AppShell.Main>
                    <Outlet />
                </AppShell.Main>
            </AppShell>
        </>
    );
};

export default MainPage;
