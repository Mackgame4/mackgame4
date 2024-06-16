import { View, StyleSheet } from '@react-pdf/renderer';
import { colorVars } from '@/lib/utils';
import PdfPattern from '@/components/pdfPatterns';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
});

export default function CardWiggles() {
    const cols = 10;
    const rows = 10;
    const gap = 5;
    return (
        <View>
            {Array.from({ length: rows }).map((_, index) => (
                <View key={index} style={[styles.container, { gap: gap }]}>
                    {Array.from({ length: cols }).map((_, index) => (
                        <View key={index} style={{margin: -(gap+2)}}>
                            <PdfPattern width={50} height={50} name="leafsPattern" color={colorVars.primaryColor} />
                        </View>
                    ))}
                </View>
            ))}
        </View>
    );
}