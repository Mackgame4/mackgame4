import { View, Text, StyleSheet } from '@react-pdf/renderer';
import { colorVars, getLocale } from '@/lib/utils';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    skillText: {
        fontSize: 10,
        fontFamily: 'JetBrainsMono-Regular',
        color: colorVars.textColor,
        letterSpacing: 0.5,
        textDecoration: 'none',
        marginTop: 5
    },
});

export default function DocSkills() {
    const skills = getLocale().skills;
    return (
        <View style={styles.container}>
            {skills.map((skill, index) => (
                <Text key={index} style={styles.skillText}>{skill}</Text>
            ))}
        </View>
    );
}