import { View, Text, Image, StyleSheet } from '@react-pdf/renderer';
import { colorVars, getLocale } from '@/lib/utils';

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

export default function DocLanguages() {
    const languages = getLocale().languages;
    return (
        <View style={styles.container}>
            {languages.map((lang, index) => (
                <View key={index} style={{ marginTop: 5, textAlign: 'right', alignItems: 'flex-end' }}>
                    <Text style={styles.text}>{lang.name}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <Image src={lang.flag} style={{ width: 'auto', height: 8, marginRight: 7 }} />
                        <Text style={styles.footerText}>- {lang.level}</Text>
                    </View>
                </View>
            ))}
        </View>
    );
}