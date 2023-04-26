import './home.css';

import React, { useEffect, useState } from 'react';
import env from '../../env.json';
import NewsCard from '../newcard/nwscard';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

function AppHome(props) {
    const [news, setNews] = useState();

    useEffect(() => {          
        async function getAllNews() {
            const response = await fetch(`${env.GOOGLE_NEWS.BASE_URL}/${env.GOOGLE_NEWS.VERSION}/top-headlines?category=${props.Data.category}&country=${props.Data.country}&apiKey=${env.GOOGLE_NEWS.KEY}`);
            const responseNews = await response.json();

            setNews(responseNews.articles);
        }

        if(props.Data) getAllNews();

        console.log('teste:', props);
    }, [props.Data]);

    return (
      <main class="main-screen">
        <MDBContainer>
            <MDBRow>
                {
                    Array.isArray(news) ? news.map((noticia, i) => (
                        <MDBCol size='3'>
                            <NewsCard key={i}
                                Author={noticia.author}
                                Title={noticia.title}
                                Description={noticia.description}
                                PublishDate={noticia.publishedAt}
                                Link={noticia.url}>
                            </NewsCard>
                        </MDBCol>
                    )) : null
                }
            </MDBRow>
        </MDBContainer>
      </main>
    );
}

export default AppHome; 