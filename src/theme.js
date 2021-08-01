import { createMuiTheme } from '@material-ui/core/styles';

const primary = {
    cbiBlue: 'rgba(16,78,126,1)',
    cbiDarkBlue: 'rgba(5,54,92,1)',
    cbiLightBlue: 'rgba(36,112,171,1)'
};

const secondary = {
    charlestonGreen: 'rgba(33, 37, 41,1)',
    celadonBlue: 'rgba(69, 123, 157,1)',
    prussianBlue: 'rgba(29, 53, 87,1)',
    powderBlue: 'rgba(168, 218, 220,1)'
}

const button = {
    main: `rgba(0, 175, 185,1)`
}

const common = {
    black: `rgba(0,0,0)`,
    white: `rgb(255,255,255)`
}


export const theme = createMuiTheme({
    palette: {
        primary: {
            main: primary.cbiBlue,
            dark: primary.cbiDarkBlue,
            light: primary.cbiLightBlue
        },
        secondary: {
            charlestonGreen: secondary.charlestonGreen,
            main: secondary.celadonBlue,
            dark: secondary.prussianBlue,
            light: secondary.powderBlue
        },
        common: {
            black: common.black,
            white: common.white
        },
        button: {
            main: button.main
        }
    },
    mixins: {
        toolbar: {
            minHeight: 36
        }
    }
})