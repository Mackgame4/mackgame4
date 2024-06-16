import {
  Document,
  Text,
  Page,
  StyleSheet,
} from '@react-pdf/renderer';

import { colorVars } from '@/lib/utils';

const styles = StyleSheet.create({
  body: {
    padding: 5,
    paddingHorizontal: 45,
    backgroundColor: colorVars.backgroudColor,
  },
});

const Card = () => (
  <Document>
    <Page size="C7" orientation="landscape" style={styles.body}>
      <Text>Card</Text>
    </Page>
  </Document>
);

export default Card;