import { Font } from '@react-pdf/renderer';

Font.register({
    family: 'Oswald-Regular',
    src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf',
});

Font.register({
    family: 'HelveticaNeue-Light',
    src: '/fonts/HelveticaNeue-Light.ttf',
});

Font.register({
    family: 'HelveticaNeue-Regular',
    src: '/fonts/HelveticaNeue-Medium.ttf',
});

Font.register({
    family: 'HelveticaNeue-Bold',
    src: '/fonts/HelveticaNeue-Heavy.ttf',
});

Font.register({
    family: 'Inter-Regular',
    src: '/fonts/Inter-Regular.ttf'
});

Font.register({
    family: 'CaviarDreams-Regular',
    src: '/fonts/CaviarDreams.ttf'
});

Font.register({
    family: 'CaviarDreams-Bold',
    src: '/fonts/CaviarDreams_Bold.ttf'
});

Font.register({
    family: 'CaviarDreams-Italic',
    src: '/fonts/CaviarDreams_Italic.ttf'
});

Font.register({
    family: 'CaviarDreams-BoldItalic',
    src: '/fonts/CaviarDreams_BoldItalic.ttf'
});

Font.register({
    family: 'Ostrich-Regular',
    src: '/fonts/ostrich-regular.ttf'
});

export const colorVars = {
    primaryColor: '#017E05',
    secondaryColor: '#33362F',
    accentColor: '#A2A498',
    textColor: '#2B312E',
    backgroudColor: '#FDFDF5'
};

export function mergeStyles(...styles: unknown[]) {
    return Object.assign({}, ...styles);
}