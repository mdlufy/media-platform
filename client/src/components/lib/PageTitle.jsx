import { Grid, Typography } from "@mui/material";
import React from "react";
import useDocumentTitle from "@tanem/use-document-title";

function PageTitle(props) {
    useDocumentTitle(`${props.title} | Media Platform`);
    return (
        <Grid
            container
            spacing={2}
            mt={2}
            mb={1}
            style={{ alignItems: "center" }}
        >
            <Grid item xs={12} md="auto">
                <Typography variant="h4" m={0}>
                    {props.title}
                </Typography>
            </Grid>
            {props.actionButton && (
                <Grid item xs={12} md="auto" ml={"auto"}>
                    {props.actionButton}
                </Grid>
            )}
        </Grid>
    );
}

export default PageTitle;
