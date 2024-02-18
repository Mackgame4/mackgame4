import {
    Svg,
    Path,
    StyleSheet
} from '@react-pdf/renderer';

import { colorVars } from '../Utils';

const styles = StyleSheet.create({
    icon: {
        width: 16,
        height: 16,
    },
});

export const PhoneIcon = ({ width, height, color, isOutlined }) => (
    <Svg width={width || styles.icon.width} height={height || styles.icon.height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
        stroke={isOutlined ? color || colorVars.primaryColor : 'none'}
        fill={!isOutlined ? color || colorVars.primaryColor : 'none'}
        strokeWidth="2"
        />
    </Svg>
);

const PdfIcon = ({ name, ...props }) => {
    switch (name) {
        case 'phoneIcon':
            return <PhoneIcon {...props} />;
        default:
            return null;
    }
}

export default PdfIcon;