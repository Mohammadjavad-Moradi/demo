import React from 'react';

import 'aos/dist/aos.css';

import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';

import { CardContainer, CardMediaContainer, CardActionAreaContainer } from './custom-card.styles';
import CustomButton from '../../atom-components/custom-button/custom-button.component';


export default function CustomCard({ content, delaykey, flipdirection }) {

  const flipDirection = (flipdirection) => {
    if ( flipdirection === 0) {
      return "flip-left"
    } else if ( flipdirection % 2 === 0 ){
      return "flip-right"
    } 
    return "flip-right"
  };

  const delay = `${delaykey  * 200}`;
  return (
    <CardContainer raised data-aos={flipDirection(flipdirection)} data-aos-easing="ease-out-cubic" data-aos-once="true" data-aos-delay={delay}>
      <CardActionAreaContainer>
        <CardMediaContainer
          image={content.image}
          title={content.alt}
        />
        <CardContent>
          <Typography gutterBottom variant="body2" color="textPrimary" component="h2">
            {content.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {
              content.textContent
            }
          </Typography>
        </CardContent>
      </CardActionAreaContainer>
      {/* <CardActions>
        <CustomButton variant='contained' color='secondary' component='link' to='/payambank' size='medium'>
           ادامه مطلب     
        </CustomButton>
      </CardActions> */}
    </CardContainer>
  );
}
