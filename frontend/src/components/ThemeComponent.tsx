import {
    MantineProvider,
    createTheme,
    MantineColorsTuple,
    localStorageColorSchemeManager,
} from "@mantine/core";

const colorSchemeManager = localStorageColorSchemeManager({
    key: "calendar-sys-color-scheme",
});

const green: MantineColorsTuple = [
    "#e6ffee",
    "#d3f9e0",
    "#a8f2c0",
    "#7aea9f",
    "#54e382",
    "#3bdf70",
    "#2bdd66",
    "#1bc455",
    "#0bae4a",
    "#00973c",
];

const purple: MantineColorsTuple = [
    "#faedff",
    "#edd9f7",
    "#d8b1ea",
    "#c186dd",
    "#ae62d2",
    "#a34bcb",
    "#9d3fc9",
    "#8931b2",
    "#7a2aa0",
    "#6b218d",
];

const theme = createTheme({
    colors: { green, purple },
    primaryColor: "green",
    autoContrast: true,
    breakpoints: {
        xs: "40rem",
        sm: "48rem",
        md: "64rem",
        lg: "80rem",
        xl: "96rem",
    },
});

const ThemeComponent = ({ children }: { children: React.ReactNode }) => {
    return (
        <MantineProvider
            theme={theme}
            colorSchemeManager={colorSchemeManager}
            defaultColorScheme="dark"
        >
            {children}
        </MantineProvider>
    );
};

export default ThemeComponent;
