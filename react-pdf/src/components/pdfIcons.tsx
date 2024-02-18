import {
    Svg,
    Path,
    Polyline,
    StyleSheet
} from '@react-pdf/renderer';

import { colorVars } from '../Utils';

const styles = StyleSheet.create({
    icon: {
        width: 16,
        height: 16,
    },
});

/* Icon components */
export const PhoneIcon = ({ width, height, color, strokeWidth, isOutlined }) => (
    <Svg width={width || styles.icon.width} height={height || styles.icon.height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
        stroke={isOutlined ? color || colorVars.primaryColor : 'none'}
        fill={!isOutlined ? color || colorVars.primaryColor : 'none'}
        strokeWidth={strokeWidth || 2} />
    </Svg>
);

export const EmailIcon = ({ width, height, color, strokeWidth, isOutlined }) => (
    <Svg width={width || styles.icon.width} height={height || styles.icon.height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
        stroke={isOutlined ? color || colorVars.primaryColor : 'none'}
        fill={!isOutlined ? color || colorVars.primaryColor : 'none'}
        strokeWidth={strokeWidth || 2} />
        <Polyline points="22,6 12,13 2,6"
        fill="none"
        stroke={isOutlined ? color || colorVars.primaryColor : 'none'}
        strokeWidth={strokeWidth || 2} />
    </Svg>
);

export const GithubIcon = ({ width, height, color, strokeWidth, isOutlined }) => (
    <Svg width={width || styles.icon.width} height={height || styles.icon.height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
        stroke={isOutlined ? color || colorVars.primaryColor : 'none'}
        fill={!isOutlined ? color || colorVars.primaryColor : 'none'}
        strokeWidth={strokeWidth || 2} />
    </Svg>
);

/* Icon wrapper */
const PdfIcon = ({ name, ...props }) => {
    switch (name) {
        case 'phoneIcon':
            return <PhoneIcon {...props} />;
        case 'emailIcon':
            return <EmailIcon {...props} />;
        case 'githubIcon':
            return <GithubIcon {...props} />;
        default:
            return null;
    }
}

export default PdfIcon;