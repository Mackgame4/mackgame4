import {
  Document,
  View,
  Text,
  //Image,
  Page,
  StyleSheet,
} from '@react-pdf/renderer';

import { colorVars } from './Utils';

import DocHeader from './components/docHeader';
import PdfIcon from './components/pdfIcons';

const styles = StyleSheet.create({
  body: {
    padding: 5,
    paddingHorizontal: 45,
    backgroundColor: colorVars.backgroudColor,
  },
  title: {
    fontSize: 18,
    fontFamily: 'JetBrainsMono-Bold',
    fontWeight: 'bold',
    color: colorVars.primaryColor,
    letterSpacing: 2,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 15
  },
  leftContainer: {
    backgroundColor: colorVars.accentColor,
    width: '50%',
    alignItems: 'flex-start',
  },
  rightContainer: {
    width: '50%',
    alignItems: 'flex-end',
  }
});

const Doc = () => (
  <Document>
    <Page size="A4" orientation="portrait" style={styles.body}>
      <DocHeader />
      <View style={styles.content}>
        <View style={styles.leftContainer}>
        </View>
        <View style={styles.rightContainer}>
          <Text style={styles.title}>Contacto</Text>
          <PdfIcon height={16} name="phoneIcon" color={colorVars.primaryColor} isOutlined />
          <Text>910 000 000</Text>
        </View>
      </View>
    </Page>
  </Document>
);

export default Doc;