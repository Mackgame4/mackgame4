import {
  Document,
  Font,
  //View,
  Text,
  Page,
  StyleSheet,
} from '@react-pdf/renderer';

Font.register({
  family: 'Oswald',
  src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf',
});

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'Oswald',
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: 'justify',
    fontFamily: 'Times-Roman',
  }
});

const Doc = () => (
  <Document>
    <Page size="A4" orientation="portrait" style={styles.body}> {/* Define the page structure */}
      <Text style={styles.title}>My first React PDF</Text>
    </Page>
  </Document>
);

export default Doc;