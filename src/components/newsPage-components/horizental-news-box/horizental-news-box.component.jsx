import React, { useEffect, useState } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

import TitleContainer from '../../atom-components/title-container/title-container.component';

import { NewsContainer,
    CardContainer,
    CardMediaContainer, 
    CardActionAreaContainer, 
    CardContentContainer,
    Content,
    Titles,
    DateContent,
    NewsBox } from './horizental-news-box.styles';

const HorizontalNewsCards = () => {
    const [bankNews] = useState([
        {
            title: 'Nunc blandit justo in quam vestibulum tincidunt',
            linkUrl: '',
            image: '/assets/payamBankBasij.jpg',
            alt: 'image title',
            content: 'Sed hendrerit dolor urna, et pellentesque metus elementum eget. Vestibulum pellentesque tortor et erat interdum aliquet. Vestibulum rutrum mauris non euismod porta.',
            date: '99/9/9'
        },
        {
            title: 'Quisque vitae vestibulum nibh, sit amet dignissim nisl',
            linkUrl: '',
            image: '/assets/18129916.jpg',
            alt: 'image title',
            content: 'Cras sed interdum dui. Nullam placerat nulla condimentum lorem egestas imperdiet. Aliquam fermentum nisl non felis cursus consectetur quis quis est.',
            date: '99/9/9'
        },
        {
            title: 'Cras lacinia enim nec leo tincidunt, eget rutrum elit laoreet',
            linkUrl: '',
            image: '/assets/18129912.jpg',
            alt: 'image title',
            content: 'Pellentesque felis tellus, hendrerit sed dignissim quis, placerat eu velit. Ut vehicula, odio quis ullamcorper consectetur, nisl metus maximus nulla, eu vehicula lorem eros at elit.',
            date: '99/9/9'
        },
        {
            title: 'Maecenas purus ligula, consectetur et felis eu',
            linkUrl: '',
            image: '/assets/18129917.jpg',
            alt: 'image title',
            content: 'Nam sed pretium sem. Morbi lobortis vulputate luctus. Maecenas venenatis luctus viverra. Aenean sagittis ligula at sodales scelerisque. Etiam pharetra tellus sed tincidunt viverra. Nullam id vestibulum purus, id mollis urna.',
            date: '99/9/9'
        },
        {
            title: 'Donec pretium lectus feugiat metus lacinia, a posuere elit vestibulum',
            linkUrl: '',
            image: '/assets/_MG_2120-Pano.jpg',
            alt: 'image title',
            content: 'Sed in molestie ex. Donec ullamcorper, diam vitae bibendum accumsan, nunc mauris porttitor purus, nec placerat justo arcu at urna. Proin maximus mi et sapien mattis posuere. Donec ultricies dolor justo, ac hendrerit metus aliquam a.',
            date: '99/9/9'
        },
    ])

    useEffect(() => {
        AOS.init({
            duration: 1000
        });
    },[])
    return (
        <NewsContainer>
            <TitleContainer name='Other News' linkUrl='/akhbarbank' color='grey'/>
            <NewsBox>
                {
                    bankNews.map((news, index) => (
                        <CardContainer variant="outlined" data-aos="fade-up" data-aos-easing="ease-in-out-cubic" data-aos-once="true" key={index}>
                            <CardActionAreaContainer>
                                <CardMediaContainer 
                                image={news.image}
                                title={news.alt}
                                />
                                <CardContentContainer>
                                    <Titles>{news.title}</Titles>
                                    <Content>{news.content}</Content>
                                    <DateContent>{news.date}</DateContent>
                                </CardContentContainer>
                            </CardActionAreaContainer>
                        </CardContainer>        
                    ))
                }

            </NewsBox>
        </NewsContainer>
    )
}

export default HorizontalNewsCards;