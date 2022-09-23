import { CircularProgress, Container, Stack } from "@mui/material";
import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";

const routes = {
    "/": React.lazy(() => import("./components/Home")),
    "/articles": React.lazy(() => import("./pages/Articles")),
};

function App() {
    return (
        <>
            <Header />
            <Container maxWidth="sm">
                <Routes>
                    {Object.entries(routes).map(([key, Element]) => {
                        return (
                            <Route
                                path={key}
                                element={
                                    <Suspense
                                        fallback={
                                            <Stack
                                                sx={{
                                                    position: "fixed",
                                                    top: "56px",
                                                    left: "240px",
                                                    right: 0,
                                                    bottom: 0,
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                }}
                                            >
                                                <CircularProgress />
                                            </Stack>
                                        }
                                    >
                                        <Element />
                                    </Suspense>
                                }
                            />
                        );
                    })}
                    <Route path={"*"} element={<h1>404 NOT FOUND</h1>} />
                </Routes>
            </Container>
        </>
    );
}

export default App;
