import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import axios from "axios";
import React, { useState } from "react";
import { API_URL } from "../../constants";
import articlesStore from "../../stores/articles.store";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

function ArticlesModal() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");


    const submitForm = async (e) => {
        e.preventDefault();

        const body = {
            id: articlesStore.articlesFiltered.length + 1,
            title: title,
            content: content,
        };

        console.log(body);

        await axios.post(API_URL, JSON.stringify(body), {
            headers: {
                "Content-Type": "application/json",
            },
        });

        articlesStore.addArticle(body);

        handleClose();
    };

    return (
        <div>
            <Button variant="contained" onClick={handleOpen}>
                Добавить статью
            </Button>
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
                            sx={{ mt: 1 }}
                        >
                            <label>Title:</label>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="title"
                                name="title"
                                autoFocus
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
                                onChange={(e) => setContent(e.target.value)}
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Добавить
                            </Button>
                        </Box>
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}

export default ArticlesModal;
