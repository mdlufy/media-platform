import { CircularProgress, Container, Stack } from "@mui/material";
import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import NotFound from "./pages/NotFound";

const routes = {
    "/": React.lazy(() => import("./components/Home")),
    "/articles": React.lazy(() => import("./pages/Articles")),
};

function App() {
    return (
        <>
            <Header />
            <Container maxWidth="lg">
                <Routes>
                    {Object.entries(routes).map(([key, Element]) => {
                        return (
                            <Route
                                key={key}
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
                    <Route path={"*"} element={<NotFound />} />
                </Routes>
            </Container>
        </>
    );
}

export default App;
