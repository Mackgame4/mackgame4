import {
  Document,
  Text,
  Page,
  StyleSheet,
} from '@react-pdf/renderer';

const styles = StyleSheet.create({
  body: {
    padding: 5,
    paddingHorizontal: 45,
    backgroundColor: colorVars.backgroudColor,
  },
});

const Card = () => (
  <Document>
    <Page size="A4" orientation="portrait" style={styles.body}>
      <Text>Card</Text>
    </Page>
  </Document>
);

export default Card;