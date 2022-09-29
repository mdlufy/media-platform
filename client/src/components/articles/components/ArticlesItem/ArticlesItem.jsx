import DeleteIcon from '@mui/icons-material/Delete';
import {Button, ListItem, ListItemText} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import {observer} from 'mobx-react-lite';
import React from 'react';
import ArticleService from '../../../../API/ArticleService';
import articlesStore from '../../stores/articles.store';

const ArticlesItem = observer(({articleId, number}) => {
    const articleItem = articlesStore.getArticleItemById(articleId);

    async function deleteArticleById(articleId) {
        try {
            await ArticleService.deleteByIdRequest(articleId);

            articlesStore.deleteArticleItemById(articleId);

        } catch (e) {
            throw new Error(`${e.name}: ${e.message}`);
        }
    }

    return (
        <ListItem>
            <ListItemText>{number}</ListItemText>
            <ListItemText primary={articleItem.title}></ListItemText>
            <Button>Открыть</Button>
            <IconButton
                aria-label="delete"
                onClick={() => deleteArticleById(articleItem.id)}
            >
                <DeleteIcon fontSize="inherit" />
            </IconButton>
        </ListItem>
    );
});

export default ArticlesItem;
