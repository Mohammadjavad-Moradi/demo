import styled from "styled-components";

import Grid from '@material-ui/core/Grid';
import Carousel from 'react-material-ui-carousel';

export const SlideshowContainer = styled(({ ...props }) => <Grid container direction='column' alignItems='flex-start' {...props} />)`
  border-bottom: 1px solid ${props => props.theme.palette.grey[600]};
  padding: 0;
  background-color: rgba(41,75,91,1);
`;

export const CarouselContainer = styled(({ ...props }) => <Carousel interval='4000' animation='slide' {...props} />)`
  width: 100%;
`;

export const SlideItem = styled(({ ...props }) => <Grid container direction='column' alignItems='flex-start' spacing={2} justify='space-between' {...props} />)`
  padding: 1em;
  margin: 0 auto !important;
  min-height: 400px;
  color: ${props => props.theme.palette.common.white};
  background: rgb(108,166,185);
  background: linear-gradient(159deg, rgba(108,166,185,1) 0%, rgba(40,113,139,1) 23%, rgba(31,75,92,1) 35%, rgba(64,119,143,1) 50%, rgba(16,90,124,1) 66%, rgba(41,75,91,1) 83%, rgba(69,123,157,1) 157%);
`;

export const GridItemTitle = styled(({ ...props }) => <Grid item {...props} />)`
  cursor: pointer;
  font-weight: bold;
  font-family: 'Times New Roman', Times, serif;
  line-height: 2em;
  text-decoration: none;
  font-size: 1.5em;
  color: inherit;
  margin: 0 auto !important;
  &:visited {
    text-decoration: none;
    color: inherit;
  }
  &:hover {
    color: ${props => props.theme.palette.button.main};
  }
`;

export const ContentWrapper = styled(({...props}) => <Grid item container justify='space-around' {...props} />)`
  flex-wrap: nowrap !important;
  flex-direction: ${ props => props.isxs ? 'column' : `row`};
`;

export const SummaryWrapper = styled(({...props}) => <Grid item  {...props} />)`
  font-size: .8rem;
  text-align: left;
  line-height: 2em;
  width: ${props => props.isxs ? '100%' : '50%'};
  padding: 1em;

`;

export const ImageWrapper = styled(({...props}) => <Grid item  {...props} />)`
  width: ${ props => props.isxs ? '200px' : '200px'};
  height: ${ props => props.isxs ? '180px' : '180px'};
  ${ props=> props.isxs ? 'margin: 0 auto !important;' : null}
`;

export const Image = styled(({...props}) => <div {...props} />)`
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${props => props.url});

  &:hover {
    transform: scale(1.1);
    transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  }
`;

export const GridItem = styled(({ ...props }) => <Grid item {...props} />)`
  font-size: .8rem;
  text-align: right;
  min-width: 100%;
  color: ${props => props.theme.palette.grey[500]};
`;