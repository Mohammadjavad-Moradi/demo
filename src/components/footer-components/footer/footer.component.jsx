import React from 'react';

import Grid from '@material-ui/core/Grid';

import { FooterContainer, PaperContainer } from './footer.styles';


const Footer = () => {

  return (
    <FooterContainer>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <PaperContainer>About me</PaperContainer>
        </Grid>
        <Grid item xs={12} sm={6}>
          <PaperContainer>Term of use</PaperContainer>
        </Grid>
        <Grid item xs={12}>
          <PaperContainer>Contact info</PaperContainer>
        </Grid>
      </Grid>
    </FooterContainer>
  );
};

export default Footer;
