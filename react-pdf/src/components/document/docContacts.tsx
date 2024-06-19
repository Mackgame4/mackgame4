import { View, Link, StyleSheet } from '@react-pdf/renderer';
import { colorVars } from '@/lib/utils';
import { Config } from '@/lib/config';
import PdfIcon from '@/components/pdfIcons';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    link: {
        fontSize: 10,
        fontFamily: 'JetBrainsMono-Regular',
        color: colorVars.textColor,
        letterSpacing: 1,
        textDecoration: 'underline',
    },
});

export default function DocContacts() {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                <PdfIcon height={12} name="folderIcon" color={colorVars.primaryColor} isOutlined />
                <Link style={[styles.link, { marginLeft: 5, letterSpacing: 0.5 }]} src={Config.websiteUrl}>{Config.websiteUrl}</Link>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                <PdfIcon height={12} name="phoneIcon" color={colorVars.primaryColor} isOutlined />
                <Link style={[styles.link, { marginLeft: 5, letterSpacing: 0.5 }]} src={`tel:${Config.phoneNumber}`}>{Config.phoneNumber}</Link>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 2 }}>
                <PdfIcon height={12} name="emailIcon" color={colorVars.primaryColor} isOutlined />
                <Link style={[styles.link, { marginLeft: 5, letterSpacing: 0.5 }]} src={`mailto:${Config.email}`}>{Config.email}</Link>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 2 }}>
                <PdfIcon height={12} name="githubIcon" color={colorVars.primaryColor} isOutlined />
                <Link style={[styles.link, { marginLeft: 5 }]} src={Config.githuLink}>@{Config.githubUsername}</Link>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 2 }}>
                <PdfIcon height={12} name="linkedInIcon" color={colorVars.primaryColor} isOutlined />
                <Link style={[styles.link, { marginLeft: 5 }]} src={Config.linkedInLink}>@{Config.linkedInUsername}</Link>
            </View>
        </View>
    );
}