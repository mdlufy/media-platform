import DeleteIcon from '@mui/icons-material/Delete';
import {Button, ListItem, ListItemText} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import {observer} from 'mobx-react-lite';
import React from 'react';
import articlesStore from '../../stores/articles.store';

const ArticlesItem = observer(({articleId}) => {
    const articleItem = articlesStore.getArticleItemById(articleId);

    return (
        <ListItem>
            <ListItemText>{articleItem.id}</ListItemText>
            <ListItemText primary={articleItem.title}></ListItemText>
            <Button>Открыть</Button>
            <IconButton
                aria-label="delete"
                onClick={() =>
                    articlesStore.deleteArticleById(articleItem.id)
                }
            >
                <DeleteIcon fontSize="inherit" />
            </IconButton>
        </ListItem>
    );
});

export default ArticlesItem;
