import { Container } from "@mui/material";
import ArticlesItem from "../ArticlesItem/ArticlesItem";

function ArticlesList({ articles, remove }) {
    if (!articles.length) {
        return <h1 style={{ textAlign: "center" }}>Статьи не найдены!</h1>;
    }

    return (
        <Container maxWidth={false}>
                {articles.map((article) => (
                    <ArticlesItem remove={remove} article={article} />
                ))}
        </Container>
    );
}

export default ArticlesList;
