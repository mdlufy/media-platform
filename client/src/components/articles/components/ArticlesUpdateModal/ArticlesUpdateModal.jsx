import EditIcon from '@mui/icons-material/Edit';
import {
    Box,
    Button, IconButton,
    Modal,
    TextField,
    Typography
} from '@mui/material';
import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import ArticleService from '../../../../API/ArticleService';
import articlesStore from '../../stores/articles.store';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: 3,
    boxShadow: 24,
    p: 4,
};

const ArticlesUpdateModal = observer(({articleItem}) => {
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState(articleItem.title);
    const [content, setContent] = useState(articleItem.content);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    async function submitForm(e) {
        try {
            e.preventDefault();

            const articleItemWithDefaults = {
                id: articleItem.id,
                title: title,
                content: content,
            };

            await ArticleService.updateRequest(articleItemWithDefaults);

            articlesStore.updateArticleItem(articleItemWithDefaults);

        } catch (e) {
            throw new Error(`${e.name}: ${e.message}`);
        } finally {
            handleClose();
        }
    }

    return (
        <div>
            <IconButton aria-label="delete" onClick={handleOpen}>
                <EditIcon fontSize="inherit" />
            </IconButton>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                    >
                        <Box
                            component="form"
                            onSubmit={submitForm}
                            noValidate
                            sx={{mt: 1}}
                        >
                            <label>Title:</label>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="title"
                                name="title"
                                autoFocus
                                defaultValue={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                            <label>Content:</label>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="content"
                                name="content"
                                autoFocus
                                defaultValue={content}
                                onChange={(e) => setContent(e.target.value)}
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{mt: 3, mb: 2}}
                            >
                                Сохранить
                            </Button>
                        </Box>
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
});

export default ArticlesUpdateModal;
