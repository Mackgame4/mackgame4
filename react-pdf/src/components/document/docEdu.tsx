import { View, Text, Link, StyleSheet } from '@react-pdf/renderer';
import { colorVars, getLocale } from '@/lib/utils';
import PdfIcon from '@/components/pdfIcons';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    text: {
        fontSize: 10,
        fontFamily: 'JetBrainsMono-Regular',
        color: colorVars.textColor,
        letterSpacing: 1,
        textDecoration: 'none',
    },
    footerText: {
        fontSize: 8,
        fontFamily: 'JetBrainsMono-Regular',
        color: colorVars.accentColor,
        letterSpacing: 1,
        textDecoration: 'none'
    }
});

export default function DocEdu() {
    const education = getLocale().education;
    return (
        <View style={styles.container}>
            {education.map((edu, index) => (
                <View key={index} style={index == 0 ? { marginTop: 5, paddingLeft: 30, textAlign: 'right' } : { marginTop: 15, paddingLeft: 30, textAlign: 'right' }}>
                <Link src={edu.src} style={{ textDecoration: 'none', textAlign: 'right', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                    <Text style={styles.footerText}>{edu.date}</Text>
                    <Text style={styles.text}>{edu.title}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={styles.footerText}>{edu.institution} - {edu.location}</Text>
                    <PdfIcon height={7} name="externalLinkIcon" color={colorVars.primaryColor} isOutlined />
                    </View>
                </Link>
                {edu.description &&
                <Text style={[styles.footerText, { marginTop: 10 }]}>{edu.description}</Text>
                }
                </View>
            ))}
        </View>
    );
}