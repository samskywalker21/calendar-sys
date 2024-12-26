import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import LoginPage from './layout/LoginPage';

function App() {
    return (
        <MantineProvider>
            <LoginPage />
        </MantineProvider>
    );
}

export default App;
