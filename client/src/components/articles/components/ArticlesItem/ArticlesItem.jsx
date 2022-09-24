import { Button, Divider, ListItem, ListItemText } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from '@mui/material/IconButton';
import React from "react";

function ArticlesItem({ remove, article }) {
    return (
        <ListItem>
            <ListItemText>{article.id}</ListItemText>
            <ListItemText primary={article.title}></ListItemText>
            <Button>Открыть</Button>
            <IconButton 
                aria-label="delete" 
                onClick={() => remove(article)}

            >
                <DeleteIcon fontSize="inherit"/>
            </IconButton>
        </ListItem>
    );
}

export default ArticlesItem;
