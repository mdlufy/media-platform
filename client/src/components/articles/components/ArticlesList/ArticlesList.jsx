import { Box } from "@mui/material";
import ArticlesItem from "../ArticlesItem/ArticlesItem";

function ArticlesList({ articles, remove }) {
    if (!articles.length) {
        return <h1 style={{ textAlign: "center" }}>Статьи не найдены!</h1>;
    }

    return (
        <Box
            sx={{
                width: "100%",
                bgcolor: "background.paper",
                borderRadius: 2,
                boxShadow: 1,
            }}
        >
            {articles.map((article) => (
                <ArticlesItem remove={remove} article={article} />
            ))}
        </Box>
    );
}

export default ArticlesList;
