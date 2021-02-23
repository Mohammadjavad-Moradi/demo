import React from  'react';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import CustomCard from '../custom-card/custom-card.component';

import { PayamBankContainer, PayamSlides, SlideTitle, SlideTitleConteiner } from './payam-bank.styles';

const PayamBank = () => {
    const [payamBankContent] = React.useState(
        [
            {
                title: '	مراسم معارفه فرمانده پایگاه مقاومت بسیج بانک مرکزی+عکس',
                image: '/assets/payamBankBasij.jpg',
                alt: 'مراسم معارفه فرمانده پایگاه مقاومت بسیج',
                textContent: `مراسم معارفه فرمانده پایگاه مقاومت بسیج بانک مرکزی با حضور جناب آقای دکتر نجارزاده معاون اداری و مالی بانک، جناب آقای سیدحمیدرضا قریشی فرمانده بسیج وزارتخانه‌ها و ادارات و جناب آقای منصفی فرمانده مرکز بسیج نهاد ریاست جمهوری و جمعی از مسؤولین بانک مرکزی برگزار شد.

                در این مراسم با صدور حکمی از سوی سرهنگ قریشی فرمانده بسیج وزارتخانه ها و ادارات، بهمن الیاسی به عنوان سرپرست پایگاه مقاومت بسیج بانک مرکزی منصوب و از تلاش‌های حجت الاسلام بابایی؛ فرمانده پیشین پایگاه قدردانی شد.
                
                در ابتدای این مراسم دکتر نجارزاده معاون اداری و مالی بانک مرکزی پس از تبریک حلول ماه مبارک رجب و ولادت امام محمد باقر(ع) ضمن قدردانی از تلاش‌ها و اقدامات حجت‌الاسلام بابایی به تشریح فعالیت‌های پایگاه مقاومت بسیج بانک مرکزی پرداختند.  
                
                سپس سرهنگ سیدحمیدرضا قریشی تصریح کردند: بسیج موتور محرک کارآمدی نظام اداری و مبارزه با فساد اداری می‌باشد و نگاه بسیج می‌بایست از بیرون به درون با سرمنشأ قرار دادن عدالت‌محوری باشد. همچنین ایشان تأکید نمودند اهداف و برنامه‌های پایگاه‌های بسیج می‌بایست در راستای اهداف بلندمدت بسیج وزارتخانه‌ها و ادارات ترسیم گردد.
                
                در پایان این مراسم حکم سرپرستی پایگاه مقاومت بسیج بانک مرکزی توسط جناب سرهنگ قریشی به آقای بهمن الیاسی اعطا گردید.`,
                linkUrl: 'https://payamebank.cbi.ir/staff/ctl/View/mid/437/nid/2458'
            },
            {
                title: '	مراسم معارفه فرمانده پایگاه مقاومت بسیج بانک مرکزی+عکس',
                image: '/assets/payamBankBasij.jpg',
                alt: 'مراسم معارفه فرمانده پایگاه مقاومت بسیج',
                textContent: `مراسم معارفه فرمانده پایگاه مقاومت بسیج بانک مرکزی با حضور جناب آقای دکتر نجارزاده معاون اداری و مالی بانک، جناب آقای سیدحمیدرضا قریشی فرمانده بسیج وزارتخانه‌ها و ادارات و جناب آقای منصفی فرمانده مرکز بسیج نهاد ریاست جمهوری و جمعی از مسؤولین بانک مرکزی برگزار شد.

                در این مراسم با صدور حکمی از سوی سرهنگ قریشی فرمانده بسیج وزارتخانه ها و ادارات، بهمن الیاسی به عنوان سرپرست پایگاه مقاومت بسیج بانک مرکزی منصوب و از تلاش‌های حجت الاسلام بابایی؛ فرمانده پیشین پایگاه قدردانی شد.
                
                در ابتدای این مراسم دکتر نجارزاده معاون اداری و مالی بانک مرکزی پس از تبریک حلول ماه مبارک رجب و ولادت امام محمد باقر(ع) ضمن قدردانی از تلاش‌ها و اقدامات حجت‌الاسلام بابایی به تشریح فعالیت‌های پایگاه مقاومت بسیج بانک مرکزی پرداختند.  
                
                سپس سرهنگ سیدحمیدرضا قریشی تصریح کردند: بسیج موتور محرک کارآمدی نظام اداری و مبارزه با فساد اداری می‌باشد و نگاه بسیج می‌بایست از بیرون به درون با سرمنشأ قرار دادن عدالت‌محوری باشد. همچنین ایشان تأکید نمودند اهداف و برنامه‌های پایگاه‌های بسیج می‌بایست در راستای اهداف بلندمدت بسیج وزارتخانه‌ها و ادارات ترسیم گردد.
                
                در پایان این مراسم حکم سرپرستی پایگاه مقاومت بسیج بانک مرکزی توسط جناب سرهنگ قریشی به آقای بهمن الیاسی اعطا گردید.`,
                linkUrl: 'https://payamebank.cbi.ir/staff/ctl/View/mid/437/nid/2458'
            },
            {
                title: '	مراسم معارفه فرمانده پایگاه مقاومت بسیج بانک مرکزی+عکس',
                image: '/assets/payamBankBasij.jpg',
                alt: 'مراسم معارفه فرمانده پایگاه مقاومت بسیج',
                textContent: `مراسم معارفه فرمانده پایگاه مقاومت بسیج بانک مرکزی با حضور جناب آقای دکتر نجارزاده معاون اداری و مالی بانک، جناب آقای سیدحمیدرضا قریشی فرمانده بسیج وزارتخانه‌ها و ادارات و جناب آقای منصفی فرمانده مرکز بسیج نهاد ریاست جمهوری و جمعی از مسؤولین بانک مرکزی برگزار شد.

                در این مراسم با صدور حکمی از سوی سرهنگ قریشی فرمانده بسیج وزارتخانه ها و ادارات، بهمن الیاسی به عنوان سرپرست پایگاه مقاومت بسیج بانک مرکزی منصوب و از تلاش‌های حجت الاسلام بابایی؛ فرمانده پیشین پایگاه قدردانی شد.
                
                در ابتدای این مراسم دکتر نجارزاده معاون اداری و مالی بانک مرکزی پس از تبریک حلول ماه مبارک رجب و ولادت امام محمد باقر(ع) ضمن قدردانی از تلاش‌ها و اقدامات حجت‌الاسلام بابایی به تشریح فعالیت‌های پایگاه مقاومت بسیج بانک مرکزی پرداختند.  
                
                سپس سرهنگ سیدحمیدرضا قریشی تصریح کردند: بسیج موتور محرک کارآمدی نظام اداری و مبارزه با فساد اداری می‌باشد و نگاه بسیج می‌بایست از بیرون به درون با سرمنشأ قرار دادن عدالت‌محوری باشد. همچنین ایشان تأکید نمودند اهداف و برنامه‌های پایگاه‌های بسیج می‌بایست در راستای اهداف بلندمدت بسیج وزارتخانه‌ها و ادارات ترسیم گردد.
                
                در پایان این مراسم حکم سرپرستی پایگاه مقاومت بسیج بانک مرکزی توسط جناب سرهنگ قریشی به آقای بهمن الیاسی اعطا گردید.`,
                linkUrl: 'https://payamebank.cbi.ir/staff/ctl/View/mid/437/nid/2458'
            },
            {
                title: '	مراسم معارفه فرمانده پایگاه مقاومت بسیج بانک مرکزی+عکس',
                image: '/assets/payamBankBasij.jpg',
                alt: 'مراسم معارفه فرمانده پایگاه مقاومت بسیج',
                textContent: `مراسم معارفه فرمانده پایگاه مقاومت بسیج بانک مرکزی با حضور جناب آقای دکتر نجارزاده معاون اداری و مالی بانک، جناب آقای سیدحمیدرضا قریشی فرمانده بسیج وزارتخانه‌ها و ادارات و جناب آقای منصفی فرمانده مرکز بسیج نهاد ریاست جمهوری و جمعی از مسؤولین بانک مرکزی برگزار شد.

                در این مراسم با صدور حکمی از سوی سرهنگ قریشی فرمانده بسیج وزارتخانه ها و ادارات، بهمن الیاسی به عنوان سرپرست پایگاه مقاومت بسیج بانک مرکزی منصوب و از تلاش‌های حجت الاسلام بابایی؛ فرمانده پیشین پایگاه قدردانی شد.
                
                در ابتدای این مراسم دکتر نجارزاده معاون اداری و مالی بانک مرکزی پس از تبریک حلول ماه مبارک رجب و ولادت امام محمد باقر(ع) ضمن قدردانی از تلاش‌ها و اقدامات حجت‌الاسلام بابایی به تشریح فعالیت‌های پایگاه مقاومت بسیج بانک مرکزی پرداختند.  
                
                سپس سرهنگ سیدحمیدرضا قریشی تصریح کردند: بسیج موتور محرک کارآمدی نظام اداری و مبارزه با فساد اداری می‌باشد و نگاه بسیج می‌بایست از بیرون به درون با سرمنشأ قرار دادن عدالت‌محوری باشد. همچنین ایشان تأکید نمودند اهداف و برنامه‌های پایگاه‌های بسیج می‌بایست در راستای اهداف بلندمدت بسیج وزارتخانه‌ها و ادارات ترسیم گردد.
                
                در پایان این مراسم حکم سرپرستی پایگاه مقاومت بسیج بانک مرکزی توسط جناب سرهنگ قریشی به آقای بهمن الیاسی اعطا گردید.`,
                linkUrl: 'https://payamebank.cbi.ir/staff/ctl/View/mid/437/nid/2458'
            },
            {
                title: '	مراسم معارفه فرمانده پایگاه مقاومت بسیج بانک مرکزی+عکس',
                image: '/assets/payamBankBasij.jpg',
                alt: 'مراسم معارفه فرمانده پایگاه مقاومت بسیج',
                textContent: `مراسم معارفه فرمانده پایگاه مقاومت بسیج بانک مرکزی با حضور جناب آقای دکتر نجارزاده معاون اداری و مالی بانک، جناب آقای سیدحمیدرضا قریشی فرمانده بسیج وزارتخانه‌ها و ادارات و جناب آقای منصفی فرمانده مرکز بسیج نهاد ریاست جمهوری و جمعی از مسؤولین بانک مرکزی برگزار شد.

                در این مراسم با صدور حکمی از سوی سرهنگ قریشی فرمانده بسیج وزارتخانه ها و ادارات، بهمن الیاسی به عنوان سرپرست پایگاه مقاومت بسیج بانک مرکزی منصوب و از تلاش‌های حجت الاسلام بابایی؛ فرمانده پیشین پایگاه قدردانی شد.
                
                در ابتدای این مراسم دکتر نجارزاده معاون اداری و مالی بانک مرکزی پس از تبریک حلول ماه مبارک رجب و ولادت امام محمد باقر(ع) ضمن قدردانی از تلاش‌ها و اقدامات حجت‌الاسلام بابایی به تشریح فعالیت‌های پایگاه مقاومت بسیج بانک مرکزی پرداختند.  
                
                سپس سرهنگ سیدحمیدرضا قریشی تصریح کردند: بسیج موتور محرک کارآمدی نظام اداری و مبارزه با فساد اداری می‌باشد و نگاه بسیج می‌بایست از بیرون به درون با سرمنشأ قرار دادن عدالت‌محوری باشد. همچنین ایشان تأکید نمودند اهداف و برنامه‌های پایگاه‌های بسیج می‌بایست در راستای اهداف بلندمدت بسیج وزارتخانه‌ها و ادارات ترسیم گردد.
                
                در پایان این مراسم حکم سرپرستی پایگاه مقاومت بسیج بانک مرکزی توسط جناب سرهنگ قریشی به آقای بهمن الیاسی اعطا گردید.`,
                linkUrl: 'https://payamebank.cbi.ir/staff/ctl/View/mid/437/nid/2458'
            },
            {
                title: '	مراسم معارفه فرمانده پایگاه مقاومت بسیج بانک مرکزی+عکس',
                image: '/assets/payamBankBasij.jpg',
                alt: 'مراسم معارفه فرمانده پایگاه مقاومت بسیج',
                textContent: `مراسم معارفه فرمانده پایگاه مقاومت بسیج بانک مرکزی با حضور جناب آقای دکتر نجارزاده معاون اداری و مالی بانک، جناب آقای سیدحمیدرضا قریشی فرمانده بسیج وزارتخانه‌ها و ادارات و جناب آقای منصفی فرمانده مرکز بسیج نهاد ریاست جمهوری و جمعی از مسؤولین بانک مرکزی برگزار شد.

                در این مراسم با صدور حکمی از سوی سرهنگ قریشی فرمانده بسیج وزارتخانه ها و ادارات، بهمن الیاسی به عنوان سرپرست پایگاه مقاومت بسیج بانک مرکزی منصوب و از تلاش‌های حجت الاسلام بابایی؛ فرمانده پیشین پایگاه قدردانی شد.
                
                در ابتدای این مراسم دکتر نجارزاده معاون اداری و مالی بانک مرکزی پس از تبریک حلول ماه مبارک رجب و ولادت امام محمد باقر(ع) ضمن قدردانی از تلاش‌ها و اقدامات حجت‌الاسلام بابایی به تشریح فعالیت‌های پایگاه مقاومت بسیج بانک مرکزی پرداختند.  
                
                سپس سرهنگ سیدحمیدرضا قریشی تصریح کردند: بسیج موتور محرک کارآمدی نظام اداری و مبارزه با فساد اداری می‌باشد و نگاه بسیج می‌بایست از بیرون به درون با سرمنشأ قرار دادن عدالت‌محوری باشد. همچنین ایشان تأکید نمودند اهداف و برنامه‌های پایگاه‌های بسیج می‌بایست در راستای اهداف بلندمدت بسیج وزارتخانه‌ها و ادارات ترسیم گردد.
                
                در پایان این مراسم حکم سرپرستی پایگاه مقاومت بسیج بانک مرکزی توسط جناب سرهنگ قریشی به آقای بهمن الیاسی اعطا گردید.`,
                linkUrl: 'https://payamebank.cbi.ir/staff/ctl/View/mid/437/nid/2458'
            },
            {
                title: '	مراسم معارفه فرمانده پایگاه مقاومت بسیج بانک مرکزی+عکس',
                image: '/assets/payamBankBasij.jpg',
                alt: 'مراسم معارفه فرمانده پایگاه مقاومت بسیج',
                textContent: `مراسم معارفه فرمانده پایگاه مقاومت بسیج بانک مرکزی با حضور جناب آقای دکتر نجارزاده معاون اداری و مالی بانک، جناب آقای سیدحمیدرضا قریشی فرمانده بسیج وزارتخانه‌ها و ادارات و جناب آقای منصفی فرمانده مرکز بسیج نهاد ریاست جمهوری و جمعی از مسؤولین بانک مرکزی برگزار شد.

                در این مراسم با صدور حکمی از سوی سرهنگ قریشی فرمانده بسیج وزارتخانه ها و ادارات، بهمن الیاسی به عنوان سرپرست پایگاه مقاومت بسیج بانک مرکزی منصوب و از تلاش‌های حجت الاسلام بابایی؛ فرمانده پیشین پایگاه قدردانی شد.
                
                در ابتدای این مراسم دکتر نجارزاده معاون اداری و مالی بانک مرکزی پس از تبریک حلول ماه مبارک رجب و ولادت امام محمد باقر(ع) ضمن قدردانی از تلاش‌ها و اقدامات حجت‌الاسلام بابایی به تشریح فعالیت‌های پایگاه مقاومت بسیج بانک مرکزی پرداختند.  
                
                سپس سرهنگ سیدحمیدرضا قریشی تصریح کردند: بسیج موتور محرک کارآمدی نظام اداری و مبارزه با فساد اداری می‌باشد و نگاه بسیج می‌بایست از بیرون به درون با سرمنشأ قرار دادن عدالت‌محوری باشد. همچنین ایشان تأکید نمودند اهداف و برنامه‌های پایگاه‌های بسیج می‌بایست در راستای اهداف بلندمدت بسیج وزارتخانه‌ها و ادارات ترسیم گردد.
                
                در پایان این مراسم حکم سرپرستی پایگاه مقاومت بسیج بانک مرکزی توسط جناب سرهنگ قریشی به آقای بهمن الیاسی اعطا گردید.`,
                linkUrl: 'https://payamebank.cbi.ir/staff/ctl/View/mid/437/nid/2458'
            }
        ]
    );

    const theme = useTheme();
    const matchesMd = useMediaQuery(theme.breakpoints.down('md'));
    const matchesXs = useMediaQuery(theme.breakpoints.down('xs'));

    let count = 3;
    if (matchesMd) { count = 2 };
    if (matchesXs) { count = 1 };

    const slidesNum = Math.ceil(payamBankContent.length / count);
    const organizedContent = [];
    let startIndex = 0;
    let endIndex = count;

    for ( let i = 0; i < slidesNum ; i++) {
        let tem = payamBankContent.slice(startIndex, endIndex);
        organizedContent.push(tem);
        startIndex = startIndex + count;
        i === slidesNum - 2 ? endIndex = payamBankContent.length : endIndex = endIndex + count;
    }


    return (
        <React.Fragment>
            <SlideTitleConteiner>
                <SlideTitle to='/payamBank'>پیام بانک</SlideTitle>
            </SlideTitleConteiner>
            <PayamBankContainer>
                {
                    organizedContent.map((item, index) => (
                        <PayamSlides key={index}>
                            {
                                item.map((card, id) => (
                                    <CustomCard content={card} key={id} delaykey={id} flipdirection={index}/>
                                ))
                            }
                        </PayamSlides>
                    ))
                }
            </PayamBankContainer>
        </React.Fragment>
    )
}

export default PayamBank;