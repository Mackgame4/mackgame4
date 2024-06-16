import { View, Text, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
});

export default function CardBack() {
    return (
        <View style={styles.container}>
            <Text>Text</Text>
        </View>
    );
}