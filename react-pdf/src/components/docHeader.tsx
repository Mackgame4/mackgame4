import {
    View,
    Text,
    Image,
    StyleSheet,
} from '@react-pdf/renderer';

import { colorVars } from '../Utils';

const styles = StyleSheet.create({
    title: {
        fontSize: 45,
        textAlign: 'left',
        fontFamily: 'CaviarDreams-Bold',
        fontWeight: 'bold',
    },
    badge: {
        backgroundColor: colorVars.textColor,
        color: 'white',
        padding: 5,
        borderRadius: 5,
        fontSize: 10,
        fontFamily: 'JetBrainsMono-Regular',
        margin: 3,
    },
    header: {
        width: '100%',
        height: 210,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    leftContainer: {
        width: '50%',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    rightContainer: {
        width: '50%',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    avatarContainer: {
        width: 160,
        height: 160,
        borderRadius: '50%',
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colorVars.primaryColor,
    },
    avatarImage: {
        width: 158,
        height: 158,
        borderRadius: '50%',
    },
});

const DocHeader = () => (
    <View style={styles.header}>
        <View style={styles.leftContainer}>
            <Text style={[styles.title, { fontFamily: 'CaviarDreams-Regular', color: colorVars.textColor}]}>Fabio</Text>
            <Text style={[styles.title, { color: colorVars.primaryColor}]}>Magalhas</Text>
            <View style={{ flexDirection: 'row' }}>
                <Text style={styles.badge}>Software Engineer</Text>
                <Text style={styles.badge}>Fullstack Developer</Text>
                <Text style={styles.badge}>Student</Text>
            </View>
        </View>
        <View style={styles.rightContainer}>
            <View style={styles.avatarContainer}>
                <Image style={styles.avatarImage} src="https://thumbs.dreamstime.com/b/homem-cinzento-do-placeholder-da-foto-pessoa-gen%C3%A9rica-silhueta-cinzenta-em-um-fundo-branco-144511705.jpg" />
            </View>
        </View>
    </View>
);

export default DocHeader;