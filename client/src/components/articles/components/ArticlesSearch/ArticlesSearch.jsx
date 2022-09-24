import { TextField } from "@mui/material";
import React from "react";
import articlesStore from "../../stores/articles.store";

function ArticlesSearch() {
    const changeSearchField = (e) => {
        const value = e.target.value.trim();

        articlesStore.setSearchField(value);
    };

    return (
        <TextField
            label="Название статьи"
            variant="standard"
            sx={{
                width: "100%",
            }}
            onChange={changeSearchField}
        />
    );
}

export default ArticlesSearch;
