import React from  'react';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import CustomCard from '../custom-card/custom-card.component';
import TitleContainer from '../../atom-components/title-container/title-container.component';

import { PayamBankContainer, PayamSlides } from './payam-bank.styles';

const PayamBank = () => {
    const [payamBankContent] = React.useState(
        [
            {
                title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                image: '/assets/18129916.jpg',
                alt: 'مراسم معارفه فرمانده پایگاه مقاومت بسیج',
                textContent: 'Praesent et auctor est, vitae venenatis mi. Fusce vestibulum imperdiet dui id ornare. Donec in diam volutpat, viverra erat eu, tincidunt risus.',
                linkUrl: 'https://payamebank.cbi.ir/staff/ctl/View/mid/437/nid/2458'
            },
            {
                title:'Duis nec lacinia quam. Donec nec urna vitae libero consequat tristique',
                image: '/assets/18129917.jpg',
                alt: 'مراسم معارفه فرمانده پایگاه مقاومت بسیج',
                textContent: 'Nulla ultricies tellus eu ornare laoreet. Vivamus sed pellentesque velit, sit amet pulvinar diam. Mauris non convallis purus. Aliquam erat volutpat.',
                linkUrl: 'https://payamebank.cbi.ir/staff/ctl/View/mid/437/nid/2458'
            },
            {
                title: 'Ut vel elit non dui hendrerit mattis a eu ante',
                image: '/assets/18129912.jpg',
                alt: 'مراسم معارفه فرمانده پایگاه مقاومت بسیج',
                textContent: 'Sed hendrerit semper faucibus. Fusce quis vulputate felis, eget vehicula erat. Pellentesque lorem erat, sodales at leo ac, semper volutpat dui.',
                linkUrl: 'https://payamebank.cbi.ir/staff/ctl/View/mid/437/nid/2458'
            },
            {
                title:'Ut sed aliquet augue',
                image: '/assets/payamBankBasij.jpg',
                alt: 'مراسم معارفه فرمانده پایگاه مقاومت بسیج',
                textContent: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam ac feugiat urna, nec iaculis leo. Maecenas molestie fermentum ultrices.',
                linkUrl: 'https://payamebank.cbi.ir/staff/ctl/View/mid/437/nid/2458'
            },
            {
                title: 'Proin et urna nec nisi euismod malesuada',
                image: '/assets/18129916.jpg',
                alt: 'مراسم معارفه فرمانده پایگاه مقاومت بسیج',
                textContent: 'Suspendisse lorem lorem, sollicitudin a molestie a, lobortis congue massa. Phasellus ut ullamcorper ante. Morbi eros tellus, pretium sit amet placerat eu, varius in felis.',
                linkUrl: 'https://payamebank.cbi.ir/staff/ctl/View/mid/437/nid/2458'
            },
            {
                title: 'Sed tellus lacus, sollicitudin eget magna et',
                image: '/assets/18129912.jpg',
                alt: 'مراسم معارفه فرمانده پایگاه مقاومت بسیج',
                textContent: 'Morbi faucibus nec risus non viverra. Curabitur nec blandit lectus. Fusce placerat purus in tortor consectetur tempus.',
                linkUrl: 'https://payamebank.cbi.ir/staff/ctl/View/mid/437/nid/2458'
            },
            {
                title: 'Morbi quis arcu id lacus faucibus hendrerit',
                image: '/assets/18129917.jpg',
                alt: 'مراسم معارفه فرمانده پایگاه مقاومت بسیج',
                textContent: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus eget libero ut sem bibendum feugiat vel nec arcu. Suspendisse eget pharetra enim.',
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
            <TitleContainer name='Card News' linkUrl='/payambank' color='blue' />
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