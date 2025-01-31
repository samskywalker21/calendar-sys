import ThemeComponent from "./components/ThemeComponent";
import { Outlet } from "react-router";

const App = () => {
    return (
        <>
            <ThemeComponent>
                <Outlet />
            </ThemeComponent>
        </>
    );
};

export default App;
