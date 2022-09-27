import DeleteIcon from '@mui/icons-material/Delete';
import {Button, ListItem, ListItemText} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import {observer} from 'mobx-react-lite';
import React from 'react';
import articlesStore from '../../stores/articles.store';

const ArticlesItem = observer(({articlesId}) => {
    const articlesItem = articlesStore.getArticlesItemById(articlesId);

    return (
        <ListItem>
            <ListItemText>{articlesItem.id}</ListItemText>
            <ListItemText primary={articlesItem.title}></ListItemText>
            <Button>Открыть</Button>
            <IconButton
                aria-label="delete"
                onClick={() =>
                    articlesStore.deleteArticleItemById(articlesItem.id)
                }
            >
                <DeleteIcon fontSize="inherit" />
            </IconButton>
        </ListItem>
    );
});

export default ArticlesItem;
