import { View, Link, Text, StyleSheet } from '@react-pdf/renderer';
import { colorVars, getLocale } from '@/lib/utils';
import PdfIcon from '@/components/pdfIcons';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
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

export default function DocExperience() {
    const experience = getLocale().experience;
    return (
        <View style={styles.container}>
            {experience.map((job, index) => (
                <View key={index} style={ index == 0 ? { marginTop: 5, textAlign: 'left', alignItems: 'flex-start' } : { marginTop: 15, textAlign: 'left', alignItems: 'flex-start' }}>
                <Link src={job.src} style={{ textDecoration: 'none' }}>
                    <Text style={{ ...styles.footerText, ...(job.underlinedTitle ? { textDecoration: 'underline' } : {}) }}>{job.date}</Text>
                    {!job.date ? <View style={{ marginTop: 7 }} /> : null}
                    <Text style={{ ...styles.text, ...(job.underlinedTitle ? { textDecoration: 'underline' } : {}) }}>{job.title}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    {job.company ? <>
                    <Text style={styles.footerText}>{job.company} - {job.location}</Text>
                    <PdfIcon height={7} name="externalLinkIcon" color={colorVars.primaryColor} isOutlined />
                    </> : null}
                    </View>
                </Link>
                {job.description ?
                <Text style={[styles.footerText, { marginTop: 10 }]}>{job.description}</Text>
                : null}
                </View>
            ))}
        </View>
    );
}