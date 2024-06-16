import { Document, Page, StyleSheet } from '@react-pdf/renderer';
import { colorVars } from '@/lib/utils';

import CardFront from '@/components/card/cardFront';
import CardBack from '@/components/card/cardBack';

const styles = StyleSheet.create({
  body: {
    backgroundColor: colorVars.backgroudColor,
  },
});

const Card = () => (
  <Document>
    {/** Card Front Section */}
    <Page size="C7" orientation="landscape" style={styles.body}>
      <CardFront />
    </Page>
    {/** Card Back Section */}
    <Page size="C7" orientation="landscape" style={[styles.body, { padding: 10, paddingHorizontal: 15 }]}>
      <CardBack />
    </Page>
  </Document>
);

export default Card;