import { Button, ListItem, ListItemText } from "@mui/material";
import React from "react";

function ArticlesItem({ remove, article }) {
    return (
        <>
            <ListItem disablePadding>
                {article.id}
                <ListItemText primary={article.title}></ListItemText>
                <Button>Открыть</Button>
                <Button onClick={() => remove(article)}>
                    Удалить
                </Button>
            </ListItem>
        </>
    );
}

export default ArticlesItem;
