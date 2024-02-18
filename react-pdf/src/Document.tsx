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
  },
  title: {
    fontSize: 18,
    fontFamily: 'JetBrainsMono-Bold',
    fontWeight: 'bold',
    color: colorVars.primaryColor,
    letterSpacing: 2,
  },
  text: {
    fontSize: 12,
    fontFamily: 'JetBrainsMono-Regular',
    color: colorVars.textColor,
    letterSpacing: 1,
  },
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
          <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <PdfIcon height={11} name="phoneIcon" color={colorVars.primaryColor} isOutlined />
            <Text style={[styles.text, { marginLeft: 7 }]}>910 000 000</Text>
          </View>
          <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <PdfIcon height={11} name="emailIcon" color={colorVars.primaryColor} isOutlined />
            <Text style={[styles.text, { marginLeft: 7 }]}>email@gmail.com</Text>
          </View>
          <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <PdfIcon height={11} name="githubIcon" color={colorVars.primaryColor} isOutlined />
            <Text style={[styles.text, { marginLeft: 7 }]}>github.com</Text>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

export default Doc;