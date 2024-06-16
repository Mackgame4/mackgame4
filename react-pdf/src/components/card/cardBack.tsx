import { View, Text, Image, Link, StyleSheet } from '@react-pdf/renderer';
import { colorVars, ln } from '@/lib/utils';
import { Config } from '@/lib/config';
import PdfIcon from '@/components/pdfIcons';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        
    },
    leftContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '50%',
        height: '100%',
        padding: 10,
        gap: 10
    },
    rightContainer: {
        width: '50%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    roundedImageContainer: {
        position: 'absolute',
        width: 150,
        height: '100%',
        borderTopLeftRadius: 60,
        borderBottomLeftRadius: 60,
        backgroundColor: colorVars.primaryColor,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardBorder: {
        position: 'absolute',
        width: 100,
        height: 100,
        borderRadius: '50%',
        backgroundColor: colorVars.primaryColor,
    },
    link: {
        fontSize: 7.5,
        fontFamily: 'JetBrainsMono-Regular',
        color: colorVars.textColor,
        letterSpacing: 1,
        textDecoration: 'underline',
        marginLeft: 5
    },
    infoText: {
        //color: colorVars.textForegroundColor,
        color: 'black',
        fontSize: 10,
        fontFamily: 'JetBrainsMono-Regular'
    },
    title: {
        fontSize: 10,
        fontFamily: 'JetBrainsMono-Bold',
        color: colorVars.primaryColor,
        letterSpacing: 1
    },
    contactContainer: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        gap: 5
    },
});

export default function CardBack() {
    return (
        <View style={styles.container}>
            <View style={[styles.cardBorder, { top: -80, left: -80 }]} />
            <View style={styles.leftContainer}>
                <View style={styles.contactContainer}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 3 }}>
                        <PdfIcon height={10} name="phoneIcon" color={colorVars.primaryColor} isOutlined />
                        <Text style={styles.title}>Telemóvel</Text>
                    </View>
                    <Link style={styles.link} src={`tel:${Config.phoneNumber}`}>{Config.phoneNumber}</Link>
                </View>
                <View style={styles.contactContainer}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 3 }}>
                        <PdfIcon height={10} name="emailIcon" color={colorVars.primaryColor} isOutlined />
                        <Text style={styles.title}>Email</Text>
                    </View>
                    <Link style={[styles.link, { letterSpacing: 0.55 }]} src={`mailto:${Config.email}`}>{Config.email}</Link>
                </View>
                <View style={styles.contactContainer}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 3 }}>
                        <PdfIcon height={10} name="githubIcon" color={colorVars.primaryColor} isOutlined />
                        <Text style={styles.title}>GitHub</Text>
                    </View>
                    <Link style={styles.link} src={Config.githuLink}>@{Config.githubUsername}</Link>
                </View>
                <View style={styles.contactContainer}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 3 }}>
                        <PdfIcon height={10} name="linkedInIcon" color={colorVars.primaryColor} isOutlined />
                        <Text style={styles.title}>LinkedIn</Text>
                    </View>
                    <Link style={styles.link} src={Config.linkedInLink}>@{Config.linkedInUsername}</Link>
                </View>
            </View>
            <View style={styles.rightContainer}>
                <View style={styles.roundedImageContainer}>
                    <Image src="/qrcode.png" style={{ width: 120, height: 120, marginTop: -5, marginLeft: 13 }} />
                    <Text style={[styles.infoText, { marginLeft: 13 }]}>{ln('moreInfo')}</Text>
                </View>
            </View>
            <View style={[styles.cardBorder, { bottom: -80, left: -80 }]} />
        </View>
    );
}