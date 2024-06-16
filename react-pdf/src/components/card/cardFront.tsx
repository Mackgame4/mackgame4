import { View, Text, StyleSheet } from '@react-pdf/renderer';
import { colorVars, getLocale } from '@/lib/utils';
import { Config } from '@/lib/config';
import PdfPattern from '@/components/pdfPatterns';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        gap: 5,
    },
    title: {
        fontSize: 25,
        textAlign: 'center',
        fontFamily: 'CaviarDreams-Regular',
        fontWeight: 'bold',
        color: colorVars.textColor
    },
    textContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 25,
        backgroundColor: colorVars.backgroudColor,
        width: '75%',
        border: 1,
        borderColor: colorVars.primaryColor,
        borderRadius: 10,
    },
    badge: {
        backgroundColor: colorVars.textColor,
        color: colorVars.textForegroundColor,
        padding: 5,
        borderRadius: 5,
        fontSize: 9,
        fontFamily: 'JetBrainsMono-Regular',
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardBorder: {
        position: 'absolute',
        width: 100,
        height: 100,
        borderRadius: '50%',
        backgroundColor: colorVars.primaryColor,
    }
});

export default function CardFront() {
    const badge = getLocale().badges[0];
    return (
        <View style={styles.container}>
            <View style={[styles.cardBorder, { top: -80, left: -80 }]} />
            <View style={[styles.cardBorder, { top: -80, right: -80 }]} />
            <View style={{ display: 'flex', flexDirection: 'row', position: 'absolute', top: 0, left: 0 }}>
                <PdfPattern strokeWidth={1} name="topographyPattern" color={colorVars.primaryColor} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{Config.firstName}</Text>
                <Text style={[styles.title, { color: colorVars.primaryColor }]}>{Config.lastName}</Text>
                <Text style={styles.badge}>{badge}</Text>
            </View>
            <View style={[styles.cardBorder, { bottom: -80, left: -80 }]} />
            <View style={[styles.cardBorder, { bottom: -80, right: -80 }]} />
        </View>
    );
}