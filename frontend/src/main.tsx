import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";

import { BrowserRouter, Routes, Route } from "react-router";

import App from "./App.tsx";
import CalendarPage from "./pages/Calendar/CalendarPage.tsx";
import LogInPage from "./pages/LogIn/LogInPage.tsx";
import MainPage from "./pages/Main/MainPage.tsx";
import ListPage from "./pages/List/ListPage.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route path="/" element={<MainPage />}>
                        <Route path="/" element={<CalendarPage />} />
                        <Route path="/list" element={<ListPage />} />
                    </Route>
                    <Route path="/login" element={<LogInPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>,
);
