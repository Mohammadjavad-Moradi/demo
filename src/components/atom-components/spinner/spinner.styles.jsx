import styled from 'styled-components';
import { ReactComponent as LogoBlue } from '../../../assets/maham-blue.svg';

export const SpinnerOverlay = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center; 
`;

export const LogoSpinner = styled(({...props}) => <LogoBlue {...props} />)`
    width: 10em;
    height: 10em;
    @keyframes spinning {
        0% {
          transform: rotateY(0deg)
        }
        100% {
          transform: rotateY(360deg)
        }
    }   
    animation: spinning 4s infinite;
`;