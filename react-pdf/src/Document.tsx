import {
  Document,
  View,
  Text,
  //Image,
  Link,
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
    fontSize: 10,
    fontFamily: 'JetBrainsMono-Regular',
    color: colorVars.textColor,
    letterSpacing: 1,
    textDecoration: 'none',
  },
  link: {
    fontSize: 10,
    fontFamily: 'JetBrainsMono-Regular',
    color: colorVars.textColor,
    letterSpacing: 1,
    textDecoration: 'underline',
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
          <Text style={styles.title}>CONTACTO</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 7 }}>
            <PdfIcon height={12} name="phoneIcon" color={colorVars.primaryColor} isOutlined />
            <Text style={[styles.text, { marginLeft: 5, letterSpacing: 0.5 }]}>(+351) 910 000 000</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 2 }}>
            <PdfIcon height={12} name="emailIcon" color={colorVars.primaryColor} isOutlined />
            <Text style={[styles.link, { marginLeft: 5 }]}>email@gmail.com</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 2 }}>
            <PdfIcon height={12} name="githubIcon" color={colorVars.primaryColor} isOutlined />
            <Link style={[styles.link, { marginLeft: 5 }]} src="http://github.com/Mackgame4">@Mackgame4</Link>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 2 }}>
            <PdfIcon height={12} name="linkedInIcon" color={colorVars.primaryColor} isOutlined />
            <Link style={[styles.link, { marginLeft: 5 }]} src="http://linkedin.com/in/mackgame4">@mackgame4</Link>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

export default Doc;