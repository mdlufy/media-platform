import { Container } from '@mui/material';
import React from 'react';
import PageTitle from './lib/PageTitle';

function Home() {
    return (
        <Container maxWidth={false}>

            <PageTitle
                title="Главная"
            />
        </Container>
    );
}

export default Home;