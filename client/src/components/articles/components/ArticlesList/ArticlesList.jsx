import {Box, List} from '@mui/material';
import {observer} from 'mobx-react-lite';
import articlesStore from '../../stores/articles.store';
import ArticlesItem from '../ArticlesItem/ArticlesItem';

const ArticlesList = observer(() => {
    const articles = JSON.parse(JSON.stringify(articlesStore.articlesFiltered));

    if (!articles.length) {
        return (
            <h1 style={{textAlign: 'center', font: 'inherit', fontSize: 24}}>
                Статьи не найдены!
            </h1>
        );
    }

    return (
        <Box
            sx={{
                display: 'flex',
                width: '100%',
                bgcolor: 'background.paper',
                borderRadius: 2,
                boxShadow: 1,
                mt: 4,
                p: 0.1,
            }}
        >
            <List sx={{display: 'flex', flexGrow: 1, flexDirection: 'column'}}>
                {articles.map((articleItem) => (
                    <ArticlesItem
                        key={articleItem.id}
                        articleId={articleItem.id}
                    />
                ))}
            </List>
        </Box>
    );
});

export default ArticlesList;
