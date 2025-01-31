import { useMantineColorScheme, Button } from "@mantine/core";

import { Sun, Moon } from "lucide-react";

const ThemeToogle = () => {
    const { setColorScheme, colorScheme } = useMantineColorScheme();

    return (
        <Button
            variant="transparent"
            size="xs"
            onClick={() => {
                setColorScheme(colorScheme == "dark" ? "light" : "dark");
            }}
        >
            {colorScheme == "dark" ? <Moon /> : <Sun />}
        </Button>
    );
};

export default ThemeToogle;
