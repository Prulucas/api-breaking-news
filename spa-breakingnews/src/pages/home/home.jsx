import { useEffect, useState } from "react";
import { Navbar } from "../../components/navbar/navbar";
import { Card } from "../../components/cards/card.jsx";
import {getAllNews, getTopNews} from "../../services/newsServices.js"
import { HomeBody } from "./homeStyled.jsx";


export default function Home(){

    const [news, setNews] = useState([]);
    async function findNews () {
        const newsResponse = await getAllNews();
        setNews(newsResponse.data.results)

        const topNewsResponse = await getTopNews;
        setNews(topNewsResponse.data.news)
    }

    useEffect(() => {
        findNews();
    }, []);
    

    return (
        <>
            <Navbar />
            <HomeBody>
            {news.map((item) => (
                <Card key={item.id} title={item.title} text={item.text} banner={item.banner} likes={item.likes.length} comments={item.comments.length} />
                    ))
                }
            </HomeBody>
        </>
    );
}