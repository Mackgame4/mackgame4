import {
  Document,
  Font,
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
    <Page style={styles.body}>
      <Text style={styles.title}>Title</Text>
      <Text style={styles.text}>
        Text
      </Text>
      <Text
        fixed
        style={styles.text}
        render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
      />
    </Page>
  </Document>
);

export default Doc;