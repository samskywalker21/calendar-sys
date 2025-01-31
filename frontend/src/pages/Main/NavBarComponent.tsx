import { Flex, NavLink, Text } from "@mantine/core";

import { Calendar, List, FileSpreadsheet } from "lucide-react";

const NavBarComponent = () => {
    return (
        <>
            <Flex direction={"column"}>
                <Text size="1.1rem" mb={"1rem"}>
                    Menu
                </Text>
                <NavLink
                    href="/"
                    label="Home"
                    leftSection={<Calendar size={"1rem"} />}
                    autoContrast
                    active={false}
                />
                <NavLink
                    href="list"
                    label="Event List"
                    leftSection={<List size={"1rem"} />}
                    autoContrast
                    active={false}
                />
                <NavLink
                    href="report"
                    label="Reports"
                    leftSection={<FileSpreadsheet size={"1rem"} />}
                    autoContrast
                    active={false}
                />
            </Flex>
        </>
    );
};

export default NavBarComponent;
