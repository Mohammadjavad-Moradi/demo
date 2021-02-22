import React, { useEffect, useState } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { NewsContainer,
    CardContainer,
    CardMediaContainer, 
    CardActionAreaContainer, 
    CardContentContainer,
    TitleContainer,
    Content,
    DateContent,
    SectionTitleContainer,
    SectionTitle,
    NewsBox } from './news-box.styles';

const BankNews = () => {
    const [bankNews, setBankNews] = useState([
        {
            title: 'نظام بانکی علیرغم محدودیت در منابع حمایت ویژه ای از فضای کسب و کار داشته است',
            linkUrl: '',
            image: '/assets/payamBankBasij.jpg',
            alt: 'image title',
            content: 'بانک مرکزی و نظام بانکی علیرغم وجود محدودیت ها در منابع، توجه ویژه ای به قشر اصناف، فضای کسب و کار و جهش تولید داشته است.',
            date: '99/9/9'
        },
        {
            title: 'تمدید فرصت امهال مطالبات واحدهای تولیدی تا شهریورماه 1400',
            linkUrl: '',
            image: '/assets/payamBankBasij.jpg',
            alt: 'image title',
            content: 'بانک مرکزی در بخشنامه ای مصوبه شورای پول و اعتبار مبنی بر تمدید مهلت استفاده از مصوبه این شورا در خصوص تعیین تکلیف بدهی غیرجاری واحدهای تولیدی تا پایان شهوریور ماه 1400 را به شبکه بانکی ابلاغ کرد. ',
            date: '99/9/9'
        },
        {
            title: 'گزارش معاملات مربوط به عملیات بازار باز',
            linkUrl: '',
            image: '/assets/payamBankBasij.jpg',
            alt: 'image title',
            content: 'بانک مرکزی با تزریق 62 هزار میلیارد ریال نقدینگی در قالب توافق بازخرید با سررسید 14 روزه با حداقل نرخ 19.81 درصد به بانک‌های متقاضی موافقت کرد.',
            date: '99/9/9'
        },
        {
            title: 'از ابتدای سال ۳۲ میلیارد دلار برای واردات تأمین ارز شده است ',
            linkUrl: '',
            image: '/assets/payamBankBasij.jpg',
            alt: 'image title',
            content: 'رئیس کل بانک مرکزی اعلام کرد: علیرغم مشکلات ناشی از تأثیر شیوع ویروس کرونا درامور تجاری و تأمین ارز در ابتدای سال، بانک مرکزی و صادرکنندگان تاکنون ۳۲ میلیارد دلار برای واردات کشور تأمین ارز کرده‌اند.',
            date: '99/9/9'
        },
        {
            title: 'اعلام نتیجه حراج اوراق بدهی دولتی و برگزاری حراج جديد',
            linkUrl: '',
            image: '/assets/payamBankBasij.jpg',
            alt: 'image title',
            content: 'ضمن اعلام نتیجه‌ سی و هشتمین مرحله از حراج اوراق بدهی دولتی مورخ 28 بهمن 1399، به اطلاع می‌رساند ‌حراج جدید اوراق یاد شده و دومین مرحله از حراج اوراق سلف موازی استاندارد نفت خام در تاریخ 5 اسفند‌ماه  سال جاری برگزار خواهد شد.',
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
            <SectionTitleContainer>
                <SectionTitle to='/akhbarbank'>اخبار بانک</SectionTitle>
            </SectionTitleContainer>
            <NewsBox>
                {
                    bankNews.map((news, index) => (
                        <CardContainer variant="outlined" data-aos="fade-up" data-aos-easing="ease-in-out-cubic" data-aos-once="false" key={index}>
                            <CardActionAreaContainer>
                                <CardMediaContainer 
                                image={news.image}
                                title={news.alt}
                                />
                                <CardContentContainer>
                                    <TitleContainer>{news.title}</TitleContainer>
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

export default BankNews;